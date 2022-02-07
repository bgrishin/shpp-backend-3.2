import {db} from "../config/db.connection";
import {RowDataPacket} from "mysql2";
import {
    Books_Authors,
    authors,
    IAdminresult,
    ICreateRequest
} from "../../interfaces/books.interface";

import * as cron from 'node-cron'
import {makeDump} from "../config/create.dump";


let allBooksLength: number
(async () => {
    allBooksLength = await getAllBooksLength()
})()


export async function getAllAdmin(offset: number) {
    const books = await db.promise().query('SELECT * FROM Books WHERE NOT deleted=TRUE ORDER BY id LIMIT ?, 5', offset)
    if((books as RowDataPacket)[0].length === 0) {
        return {
            error: '404'
        }
    }
    const books_authors = await db.promise().query('SELECT * FROM Books_Authors')
    const authors = await db.promise().query('SELECT * FROM Authors')
    let result: IAdminresult = {
        books: [],
        authors: (authors as RowDataPacket)[0],
        currentPage: 1,
        allPages: allBooksLength
    }
    if(result.currentPage) {
        result.currentPage = offset / 5 + 1
    }
    for(let i = 0; i < (books as RowDataPacket)[0].length; i++) {
        const author_id = (books_authors as RowDataPacket)[0].find((data: Books_Authors) => data.book_id === (books as RowDataPacket)[0][i].id)?.author_id
        const author = (authors as RowDataPacket)[0].find((data: authors) => data.id === author_id)?.name
        result.books[i] = {
            id: (books as RowDataPacket)[0][i].id,
            name: (books as RowDataPacket)[0][i].name,
            pages: (books as RowDataPacket)[0][i].pages,
            year: (books as RowDataPacket)[0][i].year,
            clicks: (books as RowDataPacket)[0][i].clicks,
            author: author,
            author_id: author_id
        }
    }
    return (result as IAdminresult)
}

export async function deleteBookService(id: number) {
    await db.promise().query('UPDATE Books SET deleted = TRUE WHERE id = ?', id)
    await db.promise().query('UPDATE Books_Authors SET deleted = TRUE WHERE book_id = ?', id)
    await getAllBooksLength()
}

async function getAllBooksLength() {
    const allBooks = await db.promise().query('SELECT * FROM Books WHERE NOT deleted=TRUE')
    const result = Math.ceil((allBooks as RowDataPacket)[0].length / 5)
    return result
}

export async function createBookService(body: ICreateRequest, file: Express.Multer.File | undefined) {
    try {
        const imgUrl: string = `./images/${file?.filename}`
        const book = await db.promise().query('INSERT INTO Books (name, pages, year, imgUrl, clicks) VALUES (?, ?, ?, ?, ?)', [body.name, body.pages, body.year, imgUrl, 0])
        const author = await db.promise().query('INSERT INTO Books_Authors (author_id, book_id) VALUES (?, ?)', [Number(body.author), (book as RowDataPacket)[0].insertId])
        await getAllBooksLength()
        return {
            ok: true,
            error: false
        }
    } catch (e) {
        return {
            error: '400 Bad Request'
        }
    }
}

export async function createAuthorService(name: string) {
    try {
        await db.promise().query('INSERT INTO Authors (name) VALUES (?)', name)
        return {
            ok: true,
            error: false
        }
    } catch (e) {
        return {
            error: '400 Bad Request'
        }
    }
}

cron.schedule('0 18 * * *', async () => {
    await db.promise().query('DELETE FROM Books WHERE deleted=TRUE')
    await db.promise().query('DELETE FROM Books_Authors WHERE deleted=TRUE')
    console.log("\x1b[31m", '[CRON_DELETE]', '\x1b[0m', 'Books previously marked as deleted have been deleted.')
})

cron.schedule('0 19 * * *', async () => {
    await makeDump()
})