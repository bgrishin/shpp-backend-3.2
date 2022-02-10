import {db} from "../config/db.connection";
require('mysql2/promise')

import {RowDataPacket} from "mysql2";
import {Iresult} from "../../interfaces/books.interface";

export let allBooksLength: number

(async () => {
    allBooksLength = await getAllBooksLength()
})()

export async function getAll(offset: number) {
    const books = await db.promise().query('SELECT * FROM Books JOIN Books_Authors ON Books_Authors.book_id = Books.id JOIN Authors ON Books_Authors.author_id = Authors.id WHERE NOT books.deleted=TRUE ORDER BY books.id LIMIT ?, 20', offset)
    if((books as RowDataPacket)[0].length === 0) {
        return {
            error: '404'
        }
    }
    let result: Iresult = {
        books: (books as RowDataPacket)[0],
        page: 1,
        last: false,
        currentOffset: offset,
        pagination: true
    }
    if(result.page) {
        result.page = offset / 20 + 1
    }
    if(!(result.page - 1)) {
        result.last = 'prev'
    }
    if(result.page === allBooksLength) {
        result.last = 'next'
    }
    if(result.page === allBooksLength && !(result.page - 1)) {
        result.last = 'all'
    }
    return (result as Iresult)
}

export async function getOneBook(id: number) {
    const book = await db.promise().query<RowDataPacket[]>('SELECT * FROM Books JOIN Books_Authors ON Books_Authors.book_id = Books.id JOIN Authors ON Books_Authors.author_id = Authors.id WHERE books.id = ?', id)
    if(book[0].length === 0) {
        return {
            error: '404'
        }
    }
    book[0][0].imgUrl = book[0][0].imgUrl.slice(1) // because i need /images/20.jpg but i have ./images/20.jpg
    return (book[0][0] as RowDataPacket)
}

export async function registerClick(id: number) {
    let clicks = await db.promise().query<RowDataPacket[]>('SELECT clicks FROM Books WHERE id = ?', id)
    clicks[0][0].clicks += 1
    await db.promise().query<RowDataPacket[]>('UPDATE Books SET clicks = ? WHERE id = ?', [clicks[0][0].clicks, id])
}

export async function findBooks(query: string) {
    query = '%' + query.trim() + '%'
    const books = await db.promise().query<RowDataPacket[]>("SELECT * FROM Books JOIN Books_Authors ON Books_Authors.book_id = Books.id JOIN Authors ON Books_Authors.author_id = Authors.id WHERE NOT books.deleted=TRUE AND books.book_name LIKE ?", query)
    let result: RowDataPacket[] = books[0]
    if(!(books as RowDataPacket)[0].length) {
        return false
    }
    return (result as RowDataPacket)
}

async function getAllBooksLength() {
    const allBooks = await db.promise().query('SELECT * FROM Books WHERE NOT deleted=TRUE')
    const result = Math.ceil((allBooks as RowDataPacket)[0].length / 20)
    return result
}
