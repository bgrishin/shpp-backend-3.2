
export interface Books_Authors {
    author_id: number,
    book_id: number
}

export interface authors {
    id: number,
    name: string
}

export interface error {
    error: string
}

export interface IOneDatapack {
    id: number,
    imgUrl: string,
    name: string,
    author: string,
    pages: number,
    year: number
}

export interface Idatapack {
    id: number,
    name: string,
    author: string,
    imgUrl: string
}

export interface IAdmindatapack {
    id: number,
    name: string,
    pages: number,
    year: number
    clicks: number,
    author: string,
    author_id: number
}

export interface IAuthor {
    id: number,
    author_name: string
}

export interface Iresult {
    books: Idatapack[],
    page: number,
    last: boolean | string,
    currentOffset: number,
    pagination: boolean
}

export interface IAdminresult {
    books: IAdmindatapack[],
    authors: IAuthor[],
    currentPage: number,
    allPages: number
}

export interface ICreateRequest {
    name: string,
    author: string,
    year: number,
    pages: number
}