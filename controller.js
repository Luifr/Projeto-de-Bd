const { Pool } = require('pg');

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	password: 'adminadmin',
	database: 'projeto_bd',
	port: 5432
});

module.exports.greet = (req,res) => {
		pool.query("SELECT cpf FROM Funcionarios", (err,data)=>{
		if(!err){
			res.send(data);
		}
	})
}

// mas pelo que eu lembre são: buscar os funcionários por cpf/nome (acho que dá pra fazer por cargo tbm)
// buscar notícias por nome/data
// buscar episódio por data
// buscar propaganda por nome/cpnj da empresa
// daí pros funcionários, dá pra clicar entre os que apareceram na busca pra ver todas as informações deles, e as notícias que ele já participou
// nas notícias, a msm coisa, mas mostrando as informações e quais funcionários trabalharam nela
// nos episódios, mostrar os blocos e quais as filmagens editadas de cada um