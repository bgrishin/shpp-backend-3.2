import {Request, Response} from "express";
import {error, IAdminresult} from "../interfaces/books.interface";
import {createAuthorService, createBookService, deleteBookService, getAllAdmin} from "../models/services/admin.service";

export async function showAdminPage(req: Request, res: Response) {
    let offset: number = Number(req.query.offset)
    if(!offset || offset < 0) {
        offset = 0
    }
    const result: IAdminresult | error = await getAllAdmin(offset)
    if((result as error).error) {
        res.status(404)
        return res.send({
            error: "404 Not found"
        })
    }
    return res.render('adminPage', result)
}

export async function deleteBook(req: Request, res: Response) {
    let id: number
    id = Number(req.params.id)
    if(!id) {
        return res.status(400).send({
            error: '400 Bad Request'
        })
    }
    await deleteBookService(id)
    return res.send({
        ok: true
    })
}

export async function createBook(req: Request, res: Response) {
    const body = req.body
    if(!body) {
        return res.status(400).send({
            error: '400 Bad Request'
        })
    }
    const result = await createBookService(body, req.file)
    if(result!.error) {
        return res.status(400).send({
            error: '400 Bad Request'
        })
    }
    if(result.ok) {
        return res.redirect('http://localhost:3000/admin')
    }
}

export async function createAuthor(req: Request, res: Response) {
    const body = req.body
    if(!body) {
        return res.status(400).send({
            error: '400 Bad Request'
        })
    }
    console.log(body)
    const result = await createAuthorService(req.body.author_name)
    if(result!.error) {
        return res.status(400).send({
            error: '400 Bad Request'
        })
    }
    if(result.ok) {
        return res.redirect('http://localhost:3000/admin')
    }
}