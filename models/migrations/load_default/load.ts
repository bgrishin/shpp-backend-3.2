import {db} from "../../config/db.connection";
import * as fs from "fs";

try {
    console.log('\x1b[32m','[MIGRATION]','\x1b[0m','Connected to DB')
    const loadDefaultDataRequest = fs.readFileSync(__dirname + '/load_request.sql')
        .toString()
        .replaceAll('\n', '')
        .replaceAll('\r', ' ');
    db.query(loadDefaultDataRequest, (error, results, fields) => {
        if(error) {
            console.log(error)
            db.end()
        } else {
            console.log('\x1b[32m','[MIGRATION]','\x1b[0m','Migration process successful (LOAD)')
            db.end()
        }
    })
} catch (e) {
    console.log('\x1b[32m','[MIGRATION]','\x1b[0m',`Migration crashed with error: ${e}`)
}