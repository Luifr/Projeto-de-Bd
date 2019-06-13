-- os termos entre '' sao exemplos, deve-se substituí-lo pelo valor inserido pelo usuário
-- a mascara %xxx% procura por valores que contenham "xxx" como substring.

-- > nome (pode ser pedaço), retorna nomes e cpfs.
select cpf, nome from funcionario where nome LIKE '%TEIXEIRA%' order by cpf;

-- > cpf, retorna todos os dados pessoais.
select *
    from funcionario f left join agente a
    on f.cpf = a.cpf
    where f.cpf = '535.409.459-38';

-- > cpf de agente de estudio, retorna todos os dias em que trabalhou
select e.episodio
    from equipesdeestudio e join pertence p on p.episodio = e.episodio
    where e.agenteestudio = '875.325.819-34'
group by e.episodio;

-- > cpf, retorna todas as noticias que participou no desenvolvimento (nao inclui agentes de estudio).
select distinct n.titulo, n.data, n.categoria, n.descricao
    from equipesdecampo ec join filmagemeditada fe
    on ec.filmbruta = fe.filmbruta
        join filmagembruta fb
        on ec.filmbruta = fb.id
            join noticia n
            on fb.titulonoticia = n.titulo and fb.datanoticia = n.data
                join acontecimento a
                on n.nomeacont = a.nome and n.dataacont = a.data
    where
        ec.agentecampo = '535.409.459-38' or
        fe.editor = '535.409.459-38' or
        n.redator = '535.409.459-38' or
        n.produtor = '535.409.459-38' or
        a.membroequipeescuta = '535.409.459-38'
    order by n.data;

--===================================--

-- > data, retorna todas as noticias do dia.
select titulo, data, categoria, descricao -- pode ser select * tbm
    from noticia where data = TO_DATE('2019/06/05', 'YYYY/MM/DD');

-- > data inicial e final, retorna todas noticias do periodo.
select titulo, data, categoria, descricao
    from noticia
    where TO_DATE('1800/06/05', 'YYYY/MM/DD') < data and data < TO_DATE('2018/06/05', 'YYYY/MM/DD')
    order by data;

-- > titulo, retorna noticias parecidas.
select titulo, data, categoria, descricao
    from noticia
    where titulo like '%TEXT%';

-- > titulo e data, retorna quando foi ao ar
select n.titulo, n.data, p.episodio, p.nrobloco, p.filmeditada, p.nroedic,  p.hora
    from pertence p join filmagemeditada fe
    on p.filmeditada = fe.filmbruta and p.nroedic = fe.nroedicao
        join filmagembruta fb
        on fe.filmbruta = fb.id
            join noticia n
            on fb.titulonoticia = n.titulo and fb.datanoticia = n.data
    where n.titulo like '%amor%' and n.data = TO_DATE('2019/06/05', 'YYYY/MM/DD');

-- > título e data, retorna todos funcionários envolvidos no desenvolvimento
-- essa aqui retorna todos os cpfs mas com repetições e várias colunas.
-- precisaria ser feito um union de todas as colunas mas não consegui fazer isso sem criar mais tabelas.
select a.membroequipeescuta, n.produtor, n.redator, f2.editor, e.agentecampo
    from noticia n join acontecimento a
    on n.nomeacont = a.nome and n.dataacont = a.data
        join filmagembruta f
        on n.titulo = f.titulonoticia and n.data = f.datanoticia
            join filmagemeditada f2
            on f.id = f2.filmbruta
                join equipesdecampo e
                on f.id = e.filmbruta
    where n.titulo like '%amor%' and n.data = TO_DATE('2019/06/05', 'YYYY/MM/DD');

-- > título e data, retorna todos funcionários envolvidos no desenvolvimento
-- essa aqui retorna bonitinho mas são feitas várias buscas e joins.
select redator from noticia n where n.titulo like '%amor%' and n.data = TO_DATE('2019/06/05', 'YYYY/MM/DD')
union select produtor from noticia n where n.titulo like '%amor%' and n.data = TO_DATE('2019/06/05', 'YYYY/MM/DD')
union select a.membroequipeescuta
    from noticia n join acontecimento a
    on n.nomeacont = a.nome and n.dataacont = a.data
    where n.titulo like '%amor%' and n.data = TO_DATE('2019/06/05', 'YYYY/MM/DD')
union select f2.editor
    from noticia n join acontecimento a
    on n.nomeacont = a.nome and n.dataacont = a.data
        join filmagembruta f
        on n.titulo = f.titulonoticia and n.data = f.datanoticia
            join filmagemeditada f2
            on f.id = f2.filmbruta
    where n.titulo like '%amor%' and n.data = TO_DATE('2019/06/05', 'YYYY/MM/DD')
union select e.agentecampo
    from noticia n join acontecimento a
    on n.nomeacont = a.nome and n.dataacont = a.data
        join filmagembruta f
        on n.titulo = f.titulonoticia and n.data = f.datanoticia
            join filmagemeditada f2
            on f.id = f2.filmbruta
                join equipesdecampo e
                on f.id = e.filmbruta
    where n.titulo like '%amor%' and n.data = TO_DATE('2019/06/05', 'YYYY/MM/DD');

-- > título e data, retorna filmagens brutas, durações e agentes responsáveis.
select id, nrofilmagem, duracaoinicial, agentecampo
    from filmagembruta f join equipesdecampo e
    on f.id = e.filmbruta
    where f.titulonoticia like '%amor%' and f.datanoticia = TO_DATE('2019/06/05', 'YYYY/MM/DD');

-- > id de filmagem bruta, retorna filmagens editadas, suas versões, durações finais e editores responsáveis.
select filmbruta, nroedicao, duracaofinal, editor
    from filmagembruta f join filmagemeditada f2
        on f.id = f2.filmbruta
    where f.titulonoticia like '%amor%' and f.datanoticia = '2019/06/05';

--=======================================

-- > data, retorna todas as notícias do dia.
select p.episodio, p.nrobloco, p.hora, f.filmbruta, p.nroedic, n.titulo, n.descricao, n.categoria, n.data
    from episodio e join pertence p
    on e.data = p.episodio
        join filmagemeditada f
        on p.filmeditada = f.filmbruta and p.nroedic = f.nroedicao
            join filmagembruta f2
            on f.filmbruta = f2.id
                join noticia n
                on f2.titulonoticia = n.titulo and f2.datanoticia = n.data
    where e.data = '2019-06-07'
order by p.hora;

-- > data, retorna média de ibope do episódio.
select avg(ibope)
    from episodio e join audiencia a
    on e.data = a.data
    where e.data = '2019-06-07';

--=================================

-- > cnpj, retorna propagandas
select *
    from propaganda p
    where cnpj like '%899%';

-- > nome, retorna propagandas
select *
    from propaganda p
    where p.nomepropaganda like '%Alfa%';

-- > dado cnpj, retorna dados de todas propagandas, que foram e não foram ao ar, e se foram inclui média de ibope durante cada exibição.
select p.nomepropaganda, p.duracao, pe.episodio as dia_de_exibicao, pe.horario, p.valor, avg(a.ibope)
    from propaganda p left join propagandasexibidas pe
    on p.cnpj = pe.cnpj and p.nomepropaganda = pe.nomepropaganda
        left join audiencia a on a.data = pe.episodio and a.horario >= pe.horario and a.horario <= pe.horario + p.duracao::interval
    where p.cnpj like '%899%'
group by p.nomepropaganda, p.duracao, pe.episodio, pe.horario, p.valor;

-- > dado cnpj, retorna lucro gerado por todas as propagandas exibidas da empresa.
select sum(p2.valor)
    from propagandasexibidas p join propaganda p2
    on p.cnpj = p2.cnpj and p.nomepropaganda = p2.nomepropaganda
    where p.cnpj like '%899%';

-- > dado cnpj e nome de propaganda, retorna lucro gerado por ela.
select sum(p2.valor)
    from propagandasexibidas p join propaganda p2
    on p.cnpj = p2.cnpj and p.nomepropaganda = p2.nomepropaganda
    where p.cnpj like '%899%' and p.nomepropaganda = 'Coca-cola 2019 Maio'