import mysql from "mysql2"
import express from 'express'

const app = express();
const PORT = 3306

app.use(express.json());


const connection = mysql.createConnection({
    host: "Localhost",
    user: "**",
    password: "**",
    database: "youtube_db"
})

app.get('/users', async (req, res) => {
    const [rows] = await connection.query('SELECT * FROM users');
    return res.json(rows);
})

app.listen(prompt, () => {
    console.log("Servidor rodando em http://localhost" + PORT);
})


// https:www.youtube.com/videos

// host: localhost, user: root, password, database

// testar conexão com o bd

// connection.connect((error) => {
//     if (error) {
//         console.error("Erro ao conectar com o BD MySQL", error)
//         return;
//     }
//     console.log("Coenctado com o BD MySQL");
// })

// connection.query(
//     "INSERT INTO users(name, email, password) VALUES (?,?,?)", ['Pedro', 'pedro@gmail.com', '123456789'],
//     (error, result) => {
//         if (error)throw error
//         console.log("Usuário criado com sucesso", result.insertId)
//     }
// )

// connection.query(
//     "SELECT * FROM users",
//     (error, result) => {
//         if (error)throw error
//         console.log("Usuário criado com sucesso", result.insertId)
//     }
// )

// encerra a conexão
// connection.end();