import {Request, Response} from "express";
import {findBooks, getAll, getOneBook, registerClick} from "../models/services/books.service";
import {error, Iresult} from "../interfaces/books.interface";
import validator from 'validator'
import {RowDataPacket} from "mysql2";

export async function showPage(req: Request, res: Response) {
    let offset: number = Number(req.query.offset)
    if(!offset || offset < 0) {
        offset = 0
    }
    if(req.query.search) {
        let result = await searchBooks(req, res)
        return res.render('main', result)
    }
    const result: Iresult | error = await getAll(offset)
    if((result as error).error) {
        res.status(404)
        return res.send({
            error: "404 Not found"
        })
    }
    return res.render('main', result)
}

export async function showOnePage(req: Request, res: Response) {
    let id: number
    id = Number(req.params.id)
    if(!id) {
        res.status(400)
        return res.send({
            error: "400 Bad Request"
        })
    }
    const result: RowDataPacket | error = await getOneBook(id)
    if((result as error).error) {
        res.status(404)
        return res.send({
            error: "404 Not found"
        })
    }
    return res.render('bookPage', result)
}

export async function clickedBook(req: Request, res: Response) {
    let id: number
    id = Number(req.params.id)
    if(!id) {
        res.status(400)
        return res.send({
            error: "400 Bad Request"
        })
    }
    registerClick(id)
    return res.send({
        ok: true
    })
}

export async function searchBooks(req: Request, res: Response) {
    let query: string = String(req.query.search!)
    query = decodeURI(query)
    query = validator.escape(query) //Protection from XSS
    const result: RowDataPacket | boolean = await findBooks(query)
    return {
        books: (result as RowDataPacket),
        pagination: false,
        query: query
    }
}
