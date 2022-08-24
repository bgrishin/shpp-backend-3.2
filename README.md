# Books library (3.2) 

Copy of KOWO BOOKS on TypeScript with MVC

## What packages is used here ?

- Express
- Pug
- Dotenv
- node-cron
- MySqlDump
- Validator
- bootstrap
- mysql
- multer

## DevDependencies

- nodemon
- ts-node

# How to get started ?
(Step 1) Clone repository
### `git clone https://github.com/VERHOVNA-RADA/SHPP-m.node.js_3.2.git `
(Step 2) Init project
### `npm i`
(Step 3) Create .env file and enter all database data into him
> HOST_DB=your host
> USERNAME_DB=your username
> PASSWORD_DB=your password
> NAME_DB=your db name

(Step 4) Run migration to prepare database for using
### `npm run migration:start`

(Last step) Run project
### `npm run start:dev`

After this all steps you can go to address ```localhost:3000``` and see working library :)

# More about migrations

You can just write ```npm run migration:start``` to load all required scripts (UP and LOAD)

But if you want to use migrations step by step then here tutorial
#

```1 step:``` Enter your data-base data in .env file

```2 step:``` Enter "npm run migration:up" for create the table

```3 step:``` Enter "npm run migration:load" for load default data for created table

#
If you wanna to delete the table enter "npm run migration:down"

