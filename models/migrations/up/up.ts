import {db} from "../../config/db.connection";
import * as fs from "fs";

try {
    console.log('\x1b[32m','[MIGRATION]','\x1b[0m','Connected to DB')
    const createTableRequest = fs.readFileSync(__dirname + '/up_request.sql')
        .toString()
        .replaceAll('\n', ''); //there can be an error so you just need to update nodejs to latest version

    db.query(createTableRequest, (error) => {
        if(error) {
            console.log(error)
            db.end()
        } else {
            console.log('\x1b[32m','[MIGRATION]','\x1b[0m','Migration process successful (UP)')
            db.end()
        }
    })
} catch (e) {
    console.log('\x1b[32m','[MIGRATION]','\x1b[0m',`Migration crashed with error: ${e}`)
}