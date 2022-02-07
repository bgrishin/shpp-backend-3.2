import {db} from "../config/db.connection";
import * as fs from "fs";

try {
    console.log('\x1b[32m','[MIGRATION]','\x1b[0m','Connected to DB')
    const createTableRequest = fs.readFileSync(__dirname + '/up/up_request.sql')
        .toString()
        .replaceAll('\n', ''); //there can be an error so you just need to update nodejs to latest version

    const loadDefaultDataRequest = fs.readFileSync(__dirname + '/load_default/load_request.sql')
        .toString()
        .replaceAll('\n', '')
        .replaceAll('\r', ' ');

    db.query(createTableRequest, (error) => {
        if(error) {
            console.log(error)
            db.end()
        } else {
            console.log('\x1b[32m','[MIGRATION]','\x1b[0m','Table created')
        }
    })

    db.query(loadDefaultDataRequest, (error) => {
        if(error) {
            console.log(error)
            db.end()
        } else {
            console.log('\x1b[32m','[MIGRATION]','\x1b[0m','Default data loaded')
            console.log('\x1b[32m','[MIGRATION]','\x1b[0m','Migration process successful (UP and LOAD)')
            db.end()
        }
    })
} catch (e) {
    console.log('\x1b[32m','[MIGRATION]','\x1b[0m',`Migration crashed with error: ${e}`)
}