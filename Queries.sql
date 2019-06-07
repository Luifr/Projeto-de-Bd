-- os termos entre '' sao exemplos, deve-se substituí-lo pelo valor inserido pelo usuário
-- a mascara %xxx% procura por valores que contenham "xxx" como substring.

-- > nome (pode ser pedaço), retorna nomes e cpfs.
select cpf, nome from funcionario where nome LIKE '%TEIXEIRA%' order by cpf;

-- > cpf, retorna todos os dados pessoais.
select *
    from funcionario f left join agente a
    on f.cpf = a.cpf
    where f.cpf = '535.409.459-38';

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

-- > titulo, retorna noticias associadas.
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

-- muito mais pra vir aqui ainda