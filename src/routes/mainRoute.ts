import express from "express";
const router = express.Router()

import {
    clickedBook,
    showOnePage,
    showPage,
} from "../controllers/books.controller";

router.route('/')
    .get(showPage)

router.route('/book/:id')
    .get(showOnePage)
    .post(clickedBook)


export default router