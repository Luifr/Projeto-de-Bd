const { Pool } = require('pg');

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	password: 'adminadmin',
	database: 'projeto_bd',
	port: 5432
});

// async function getFuncionarios(){
// 	let response = await fetch('http://localhost:3000/funcionarios',{
// 		method: 'GET',
// 		mode: 'cors'
// 	});
// 	let data = await response.json();
// 	console.log(data.rows);
// 	let ul = document.getElementById("funcionarioList");
// 	for(row of data.rows){
// 		let node = document.createElement('li');
// 		node.innerText = row.cpf;
// 		ul.appendChild(node);
// 	}
// }

module.exports.getEmployees = (req,res) => {
		pool.query("SELECT * FROM FUNCIONARIO", (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getEmployeesByCpf = (req,res) => {
	pool.query(`SELECT * FROM FUNCIONARIO WHERE CPF='${req.params.cpf}'`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getEmployeesByName = (req,res) => {
	pool.query(`SELECT * FROM FUNCIONARIO WHERE NOME LIKE '%${req.params.name}%'`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
		console.log(err);
	})
}

module.exports.getEmployeesByPosition = (req,res) => {
	pool.query(`SELECT * FROM FUNCIONARIO WHERE CARGO='${req.params.position}'`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

//////////////////////////////////////////////////////////////////////

module.exports.getNews = (req,res) => {
	pool.query(`SELECT * FROM NOTICIA`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getNewsByName = (req,res) => {
	pool.query(`SELECT * FROM NOTICIA WHERE TITULO='${req.params.name}'`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getNewsByDate = (req,res) => {
	pool.query(`SELECT * FROM NOTICIA WHERE DATAACONT='${req.params.date}'`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getNewsByCategory = (req,res) => {
	pool.query(`SELECT * FROM NOTICIA WHERE CATEGORIA='${req.params.date}'`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

////////////////////////////////////////////////////////////////////////////////////////

module.exports.getEpisodes = (req,res) => {
	pool.query(`SELECT * FROM EPISODIO`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getEpisodesByDate = (req,res) => {
	pool.query(`SELECT * FROM EPISODIO WHERE DATA='${req.params.date}'`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}