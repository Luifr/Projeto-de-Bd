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
	pool.query(`SELECT CPF, NOME, CARGO FROM FUNCIONARIO;`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getEmployeeByCpf = (req,res) => {
	pool.query(`SELECT * FROM FUNCIONARIO F LEFT JOIN AGENTE A ON F.CPF = A.CPF WHERE F.CPF='${req.params.cpf}';`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getEmployeesByName = (req,res) => {
	pool.query(`SELECT CPF, NOME, CARGO FROM FUNCIONARIO WHERE NOME LIKE '%${req.params.nome}%' ORDER BY NOME;`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getEmployeesByPosition = (req,res) => {
	pool.query(`SELECT CPF, NOME, CARGO FROM FUNCIONARIO WHERE CARGO LIKE '%${req.params.position}%' ORDER BY CARGO;`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

// Retorna todas as notícias na qual dado funcionário está envolvido no desenvolvimento.
// não inclui agentes de estúdio já que não é ~exatamente~ desenvolvimento, mas posso melhorar isso aqui.
module.exports.getNewsByCpf = (req,res) => {
	pool.query(`SELECT DISTINCT N.TITULO, N.DESCRICAO, N.CATEGORIA, N.DATA
    			FROM EQUIPESDECAMPO EC JOIN FILMAGEMEDITADA FE
    			ON EC.FILMBRUTA = FE.FILMBRUTA
        			JOIN FILMAGEMBRUTA FB
        			ON EC.FILMBRUTA = FB.ID
            			JOIN NOTICIA N
            			ON FB.TITULONOTICIA = N.TITULO AND FB.DATANOTICIA = N.DATA
                			JOIN ACONTECIMENTO A
                			ON N.NOMEACONT = A.NOME AND N.DATAACONT = A.DATA
    			WHERE
        			EC.AGENTECAMPO = '${req.params.cpf}' OR
        			FE.EDITOR = '${req.params.cpf}' OR
        			N.REDATOR = '${req.params.cpf}' OR
        			N.PRODUTOR = '${req.params.cpf}' OR
        			A.MEMBROEQUIPEESCUTA = '${req.params.cpf}'
    			ORDER BY N.DATA;`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.insertEmployee = (req,res) => {
	pool.query(`INSERT INTO FUNCIONARIO(CPF, NOME, TELEFONE, CARGO, SALARIO) VALUES ('${req.params.cpf}', '${req.params.nome}', '${req.params.telefone}', '${req.params.cargo}', ${req.params.salario});`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		} else res.send(err.constraint);
	})
}

module.exports.insertAgent = (req,res) => {
	pool.query(`INSERT INTO AGENTE(CPF, TIPO, SALARIOEXTRA) VALUES ('${req.params.cpf}', '${req.params.tipo}', ${req.params.salarioextra});`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		} else res.send(err.constraint);
	})
}

//////////////////////////////////////////////////////////////////////

module.exports.getNews = (req,res) => {
	pool.query(`SELECT * FROM NOTICIA;`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getNewsByName = (req,res) => {
	pool.query(`SELECT * FROM NOTICIA WHERE TITULO LIKE '%${req.params.titulo}%';`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getNewsByDate = (req,res) => {
	pool.query(`SELECT * FROM NOTICIA WHERE DATAACONT='${req.params.dataacont}';`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getNewsByCategory = (req,res) => {
	pool.query(`SELECT * FROM NOTICIA WHERE CATEGORIA='${req.params.categoria}'`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

// Retorna todas as notícias publicadas entre dado período.
module.exports.getNewsByPeriod = (req,res) => {
	pool.query(`SELECT TITULO, DATA, CATEGORIA, DESCRICAO
    				FROM NOTICIA
    			WHERE TO_DATE('${req.params.data1}', 'DD/MM/YYYY') < DATA AND DATA < TO_DATE('${req.params.data2}', 'DD/MM/YYYY')
    			ORDER BY DATA;`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

// Retorna todos os funcionários envolvidos no desenvolvimento de dada notícia.
// tbm não inclui agentes de estúdio, mas da pra colocar
module.exports.getEmployeesByNews = (req,res) => {
	pool.query(`SELECT REDATOR FROM NOTICIA N WHERE N.TITULO LIKE '%AMOR%' AND N.DATA = TO_DATE('2019/06/05', 'YYYY/MM/DD')
				UNION SELECT PRODUTOR FROM NOTICIA N WHERE N.TITULO LIKE '%AMOR%' AND N.DATA = TO_DATE('2019/06/05', 'YYYY/MM/DD')
				UNION SELECT A.MEMBROEQUIPEESCUTA
						FROM NOTICIA N JOIN ACONTECIMENTO A
						ON N.NOMEACONT = A.NOME AND N.DATAACONT = A.DATA
					  WHERE N.TITULO LIKE '%AMOR%' AND N.DATA = TO_DATE('2019/06/05', 'YYYY/MM/DD')
				UNION SELECT F2.EDITOR
					    FROM NOTICIA N JOIN ACONTECIMENTO A
						ON N.NOMEACONT = A.NOME AND N.DATAACONT = A.DATA
							JOIN FILMAGEMBRUTA F
							ON N.TITULO = F.TITULONOTICIA AND N.DATA = F.DATANOTICIA
								JOIN FILMAGEMEDITADA F2
								ON F.ID = F2.FILMBRUTA
					  WHERE N.TITULO LIKE '%AMOR%' AND N.DATA = TO_DATE('2019/06/05', 'YYYY/MM/DD')
				UNION SELECT E.AGENTECAMPO
					    FROM NOTICIA N JOIN ACONTECIMENTO A
						ON N.NOMEACONT = A.NOME AND N.DATAACONT = A.DATA
							JOIN FILMAGEMBRUTA F
							ON N.TITULO = F.TITULONOTICIA AND N.DATA = F.DATANOTICIA
								JOIN FILMAGEMEDITADA F2
								ON F.ID = F2.FILMBRUTA
									JOIN EQUIPESDECAMPO E
									ON F.ID = E.FILMBRUTA
				WHERE N.TITULO = '${req.params.titulo}' AND N.DATA = TO_DATE('${req.params.data}', 'DD/MM/YYYY');`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

// Retorna todos os dias e horários em que dada notícia foi ao ar.
module.exports.getNewsAirdate = (req,res) => {
	pool.query(`SELECT N.TITULO, N.DATA, P.EPISODIO, P.NROBLOCO, P.FILMEDITADA, P.NROEDIC,  P.HORA
    				FROM PERTENCE P JOIN FILMAGEMEDITADA FE
    				ON P.FILMEDITADA = FE.FILMBRUTA AND P.NROEDIC = FE.NROEDICAO
        				JOIN FILMAGEMBRUTA FB
        				ON FE.FILMBRUTA = FB.ID
            				JOIN NOTICIA N
            				ON FB.TITULONOTICIA = N.TITULO AND FB.DATANOTICIA = N.DATA
    			WHERE N.TITULO = '${req.params.titulo}' AND N.DATA = TO_DATE('${req.params.data}', 'DD/MM/YYYY');`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

////////////////////////////////////////////////////////////////////////////////////////

module.exports.getEpisodes = (req,res) => {
	pool.query(`SELECT * FROM EPISODIO;`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

module.exports.getEpisodesByDate = (req,res) => {
	pool.query(`SELECT * FROM EPISODIO WHERE DATA='${req.params.data}';`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

// Retorna todas as notícias que foram ao ar em dado episódio.
module.exports.getNewsByEpisode = (req,res) => {
	pool.query(`SELECT P.EPISODIO, P.NROBLOCO, P.HORA, F.FILMBRUTA, P.NROEDIC, N.TITULO, N.DESCRICAO, N.CATEGORIA, N.DATA
    				FROM EPISODIO E JOIN PERTENCE P
    				ON E.DATA = P.EPISODIO
        				JOIN FILMAGEMEDITADA F
        				ON P.FILMEDITADA = F.FILMBRUTA AND P.NROEDIC = F.NROEDICAO
            				JOIN FILMAGEMBRUTA F2
            				ON F.FILMBRUTA = F2.ID
                				JOIN NOTICIA N
                				ON F2.TITULONOTICIA = N.TITULO AND F2.DATANOTICIA = N.DATA
    			WHERE E.DATA = '${req.params.data}'
				ORDER BY P.HORA;`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

// Retorna a média do IBOPE de dado episódio.
module.exports.getIbopeByEpisode = (req,res) => {
	pool.query(`SELECT AVG(IBOPE)
    				FROM EPISODIO E JOIN AUDIENCIA A
    				ON E.DATA = A.DATA
				WHERE E.DATA = '${req.params.data}';`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		}
	})
}

///////////////////////////////////////////////////
// não vão ser implementadas pra entrega, mas funcionam e são bonitinhas
// então da pra colocar acho

// Retorna todas as propagandas de dado CPNJ.
module.exports.getAdsByCPNJ = (req,res) => {
	pool.query(`SELECT * FROM PROPAGANDA P WHERE CNPJ = '${req.params.CPNJ}';`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		} else res.send(err.constraint);
	})
}

// Retorna todas as propagandas de dado CPNJ e, se foram ao ar, retorna a média dos pontos de
// IBOPE contabilizados durante a exibição do anúncio.
module.exports.getAdsDataByCPNJ = (req,res) => {
	pool.query(`SELECT P.NOMEPROPAGANDA, P.DURACAO, PE.EPISODIO AS DIA_DE_EXIBICAO, PE.HORARIO, P.VALOR, AVG(A.IBOPE)
    				FROM PROPAGANDA P LEFT JOIN PROPAGANDASEXIBIDAS PE
    				ON P.CNPJ = PE.CNPJ AND P.NOMEPROPAGANDA = PE.NOMEPROPAGANDA
        				LEFT JOIN AUDIENCIA A ON A.DATA = PE.EPISODIO AND A.HORARIO >= PE.HORARIO AND A.HORARIO <= PE.HORARIO + P.DURACAO::INTERVAL
    			WHERE P.CNPJ = '${req.params.CPNJ}'
				GROUP BY P.NOMEPROPAGANDA, P.DURACAO, PE.EPISODIO, PE.HORARIO, P.VALOR;`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		} else res.send(err.constraint);
	})
}

// Retorna o faturamento gerado por propagandas de dado CPNJ.
module.exports.getRevenueByCPNJ = (req,res) => {
	pool.query(`SELECT SUM(P2.VALOR)
    				FROM PROPAGANDASEXIBIDAS P JOIN PROPAGANDA P2
    				ON P.CNPJ = P2.CNPJ AND P.NOMEPROPAGANDA = P2.NOMEPROPAGANDA
    			WHERE P.CNPJ = '${req.params.CPNJ}';`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		} else res.send(err.constraint);
	})
}

// Retorna o faturamento gerado por dada propaganda.
module.exports.getRevenueByAd = (req,res) => {
	pool.query(`SELECT SUM(P2.VALOR)
    				FROM PROPAGANDASEXIBIDAS P JOIN PROPAGANDA P2
    				ON P.CNPJ = P2.CNPJ AND P.NOMEPROPAGANDA = P2.NOMEPROPAGANDA
    			WHERE P.CNPJ = '${req.params.CPNJ}' AND P.NOMEPROPAGANDA = '${req.params.nomepropaganda}';`, (err,data)=>{
		if(!err){
			res.send(data.rows);
		} else res.send(err.constraint);
	})
}