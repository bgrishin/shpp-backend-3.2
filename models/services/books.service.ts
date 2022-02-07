import {db} from "../config/db.connection";
require('mysql2/promise')

import {RowDataPacket} from "mysql2";
import {authors, Books_Authors, Idatapack, Iresult} from "../../interfaces/books.interface";

export let allBooksLength: number

(async () => {
    allBooksLength = await getAllBooksLength()
})()

export async function getAll(offset: number) {
    const books = await db.promise().query('SELECT * FROM Books WHERE NOT deleted=TRUE ORDER BY id LIMIT ?, 20', offset)
    if((books as RowDataPacket)[0].length === 0) {
        return {
            error: '404'
        }
    }
    const books_authors = await db.promise().query('SELECT * FROM Books_Authors')
    const authors = await db.promise().query('SELECT * FROM Authors')
    let result: Iresult = {
        books: [],
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
    for(let i = 0; i < (books as RowDataPacket)[0].length; i++) {
        const author_id = (books_authors as RowDataPacket)[0].find((data: Books_Authors) => data.book_id === (books as RowDataPacket)[0][i].id)?.author_id
        const author = (authors as RowDataPacket)[0].find((data: authors) => data.id === author_id)?.name
        result.books[i] = {
            id: (books as RowDataPacket)[0][i].id,
            name: (books as RowDataPacket)[0][i].name,
            author: author,
            imgUrl: (books as RowDataPacket)[0][i].imgUrl
        }
    }
    return (result as Iresult)
}

export async function getOneBook(id: number) {
    const book = await db.promise().query<RowDataPacket[]>('SELECT * FROM Books WHERE id = ?', id)
    if(book[0].length === 0) {
        return {
            error: '404'
        }
    }
    const author_id = await db.promise().query<RowDataPacket[]>('SELECT * FROM Books_Authors WHERE book_id = ?', book[0][0].id)
    const author = await db.promise().query<RowDataPacket[]>('SELECT * FROM Authors WHERE id = ?', author_id[0][0].author_id)
    const imgUrlForOne = book[0][0].imgUrl.slice(1) // because i need /images/20.jpg but i have ./images/20.jpg
    return {
        id: book[0][0].id,
        imgUrl: imgUrlForOne,
        name: book[0][0].name,
        author: author[0][0].name,
        pages: book[0][0].pages,
        year: book[0][0].year
    }
}

export async function registerClick(id: number) {
    let clicks = await db.promise().query<RowDataPacket[]>('SELECT clicks FROM Books WHERE id = ?', id)
    clicks[0][0].clicks += 1
    await db.promise().query<RowDataPacket[]>('UPDATE Books SET clicks = ? WHERE id = ?', [clicks[0][0].clicks, id])
}

export async function findBooks(query: string) {
    query = query.trim()
    query = '%' + query + '%'
    const books = await db.promise().query("SELECT * FROM Books WHERE name LIKE ?", query)
    const books_authors = await db.promise().query('SELECT * FROM Books_Authors')
    const authors = await db.promise().query('SELECT * FROM Authors')
    let result: Idatapack[] = []
    for(let i = 0; i < (books as RowDataPacket)[0].length; i++) {
        const author_id = (books_authors as RowDataPacket)[0].find((data: Books_Authors) => data.book_id === (books as RowDataPacket)[0][i].id)?.author_id
        const author = (authors as RowDataPacket)[0].find((data: authors) => data.id === author_id)?.name
        result[i] = {
            id: (books as RowDataPacket)[0][i].id,
            name: (books as RowDataPacket)[0][i].name,
            author: author,
            imgUrl: (books as RowDataPacket)[0][i].imgUrl
        }
    }
    if(!(books as RowDataPacket)[0].length) {
        return false
    }
    return (result as Idatapack[])
}

async function getAllBooksLength() {
    const allBooks = await db.promise().query('SELECT * FROM Books WHERE NOT deleted=TRUE')
    const result = Math.ceil((allBooks as RowDataPacket)[0].length / 20)
    return result
}