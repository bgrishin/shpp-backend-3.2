
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

export interface Iresult {
    books: Idatapack[],
    page: number,
    last: boolean | string,
    currentOffset: number,
    pagination: boolean
}

export interface IAdminresult {
    books: IAdmindatapack[],
    currentPage: number,
    allPages: number
}

export interface ICreateRequest {
    name: string,
    author: string,
    year: number,
    pages: number
}
