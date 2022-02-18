import mysqldump from 'mysqldump';
import dotenv from 'dotenv'
dotenv.config();

const {
    HOST_DB, USERNAME_DB, PASSWORD_DB, NAME_DB,
} = process.env;

export async function makeDump() {
    try {
        await mysqldump({
            connection: {
                host: HOST_DB || '',
                user: USERNAME_DB || '',
                password: PASSWORD_DB || '',
                database: NAME_DB || '',
            },
            dumpToFile: 'models/dumps/dump.sql',
        });
        console.log("\x1b[34m", '[DUMP]', "\x1b[0m",`Dump is created!`)
    } catch (e) {
        console.log("\x1b[34m", '[DUMP]', "\x1b[0m",`Dump crashed with error: ${e}`)
    }
}