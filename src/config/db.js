import mysql from "mysql2"

const configuracaobd = {
    host: 'localhost',
    user: 'root',
    database: 'hardware',
}

const bd = mysql.createConnection(configuracaobd)

export default bd