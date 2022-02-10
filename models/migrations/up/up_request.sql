CREATE TABLE IF NOT EXISTS Books (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    book_name varchar(255) NOT NULL,
    pages int NOT NULL,
    year int NOT NULL,
    imgUrl varchar(255) NOT NULL,
    clicks int NOT NULL,
    deleted boolean NOT NULL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS Authors(
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Books_Authors (
    author_id int NOT NULL,
    book_id int NOT NULL,
    deleted boolean NOT NULL DEFAULT FALSE
);
