const { Pool } = require('pg');
const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
	pool.query("SELECT cpf FROM Funcionarios", (err,data)=>{
		if(!err){
			res.send(data);
		}
	})
})

app.listen(3000)

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	password: 'adminadmin',
	database: 'projeto_bd',
	port: 5432
});