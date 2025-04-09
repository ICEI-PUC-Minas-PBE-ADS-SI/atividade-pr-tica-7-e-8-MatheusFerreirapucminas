const filmes = [
    { 
      "id": 1, 
      "nome": "Os Farofeiros 2", 
      "descrição": "Em Os Farofeiros 2, acompanhamos um novo capítulo da história dos amigos Alexandre (Antônio Fragoso), Lima (Maurício Manfrini), Rocha (Charles Paraventi) e Diguinho (Nilton Bicudo). Quando Alexandre é reconhecido como o melhor gerente de vendas na empresa em que trabalha, ele ganha como recompensa por seus esforços uma viagem para a Bahia com toda a família. Porém, os outros três amigos não estão muito felizes com a forma como Alexandre comanda as coisas. Para tentar amolecer o coração dos amigos e garantir sua tão esperada promoção, ele resolve levar todos - acompanhados das esposas e dos filhos - para a viagem ao Nordeste. No entanto, problemas e imprevistos podem levar por água abaixo essa viagem dos sonhos.", 
      "imagem": "images/comedia.jpg", 
      "video": "videos/Os Farofeiros.mp4",
      "link": "https://globoplay.globo.com/os-farofeiros-2/t/L5PWFtnQBt/",
      "nome_filme": 'VEJA AQUI'
    },
    { 
      "id": 2, 
      "nome": "Vingadores Ultimato", 
      "descrição": "Após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.", 
      "imagem": "images/acao.jpg",
      "video": "videos/Vingadores Ultimato.mp4",
      "link": "https://www.disneyplus.com/en-br/movies/marvel-studios-avengers-endgame/aRbVJUb2h2Rf?distributionPartner=google",
      "nome_filme": 'VEJA AQUI'
    },
    { 
      "id": 3, 
      "nome": "It: a Coisa", 
      "descrição": "Um grupo de sete adolescentes de Derry, uma cidade no Maine, formam o auto-intitulado 'Losers Club' - o clube dos perdedores. A pacata rotina da cidade é abalada quando crianças começam a desaparecer e tudo o que pode ser encontrado delas são partes de seus corpos. Logo, os integrantes do 'Losers Club' acabam ficando face a face com o responsável pelos crimes: o palhaço Pennywise.", 
      "imagem": "images/terror.png",
      "video": "videos/It a Coisa.mp4",
      "link": "https://www.max.com/br/pt/movies/it-a-coisa/1fef0800-258f-49f5-84a5-6a1f88173769?utm_source=universal_search",
      "nome_filme": 'VEJA AQUI'
    },
    { 
      "id": 4, 
      "nome": "Senna", 
      "descrição": "A minissérie Senna conta a história de Ayrton Senna, herói brasileiro dentro e fora das pistas da Fórmula 1. Ao longo de seis episódios, a produção mergulha na trajetória do piloto com um olhar intimista acerca de Ayrton, interpretado pelo ator Gabriel Leone, como piloto e como pessoa, contando com a colaboração ativa de sua família no desenvolvimento da série. A trama de Senna se desenrola a partir da largada da carreira do automobilista, partindo para a Europa pela primeira vez para correr na Fórmula Ford, e acompanha sua jornada, entre os desafios das pistas, os movimentos estratégicos nas trocas de escuderia, dos seus relacionamentos e do peso de ser uma figura pública tão significativa para sua terra-natal. A série também retrata o trágico acidente que tirou sua vida e deixou um país inteiro de luto, no Grande Prêmio de San Marino, na Itália.", 
      "imagem": "images/documentario.jpg",
      "video": "videos/Senna.mp4",
      "link": "https://www.netflix.com/br/title/81068725?preventIntent=true&source=35",
      "nome_filme": 'VEJA AQUI'
    },
    { 
      "id": 5, 
      "nome": "Cobra Kai", 
      "descrição": "Trinta e quatro anos depois de Daniel Larusso (Ralph Macchio) e Johnny Lawrence (William Zabka) se enfrentarem, a rivalidade entre os dois ressurge quando Lawrence decide retomar sua vida por meio do infame dojo Cobra Kai. Esgotado e completamente falido, Johnny vê a oportunidade de treinar jovens socialmente inaptos - como seu vizinho Miguel (Xolo Maridueña) -, ajudando-os a se defender da hostilidade lá fora e transformando-os em verdadeiros campeões. Já Daniel, agora um revendedor de carros de sucesso, tenta superar seus próprios desafios sem a ajuda de seu mentor, o Sr. Miyagi. Ao saber que Lawrence reabriu o centro de artes marciais, Daniel resolve fazer o mesmo e inaugura sua própria escola, na esperança de arruinar os planos de seu adversário. Embora tenham amadurecido de maneiras diferentes, os dois homens ainda são confrontados com os demônios do passado e as frustrações do presente e Cobra Kai se torna palco para esses conflitos internos.", 
      "imagem": "images/series.jpg",
      "video": "videos/Cobra Kai.mp4",
      "link": "https://www.netflix.com/br/title/81002370?preventIntent=true&source=35",
      "nome_filme": 'VEJA AQUI'
    },
    { 
      "id": 6, 
      "nome": "Simplesmente Acontece", 
      "descrição": "Os jovens britânicos Rosie (Lily Collins) e Alex (Sam Claflin) são amigos inseparáveis desde a infância, experimentando juntos as dificuldades amorosas, familiares e escolares. Embora exista uma atração entre eles, os dois mantêm a amizade acima de tudo. Um dia, Alex decide aceitar um convite para estudar medicina em Harvard, nos Estados Unidos. A distância entre eles faz com que nasçam os primeiros segredos, enquanto cada um encontra outros namorados e namoradas. Mas o destino continua atraindo Rosie e Alex um ao outro.", 
      "imagem": "images/romance.jpg",
      "video": "videos/Simplesmente Acontece.mp4",
      "link": "https://www.primevideo.com/dp/amzn1.dv.gti.aeb980d1-865e-3c0e-492d-bca2ee7e4b70/ref=atv_nb_lcl_pt_BR?autoplay=0",
      "nome_filme": 'VEJA AQUI'
    },
    { 
      "id": 7, 
      "nome": "Carros", 
      "descrição": "Relâmpago McQueen (Owen Wilson) é um carro de corridas ambicioso, que já em sua 1ª temporada na Copa Pistão torna-se um astro. Ele sonha em se tornar o 1º estreante a vencer o campeonato, o que possibilitaria que assinasse um patrocínio com a cobiçada Dinoco. A fama faz com que Relâmpago acredite que não precisa da ajuda de ninguém, sendo uma 'equipe de um carro só'. Esta arrogância lhe custa caro na última corrida da temporada, fazendo com que seus dois pneus traseiros estourem na última volta da corrida. O problema permite que seus dois principais adversários, o ídolo Rei (Richard Petty) e o traiçoeiro Chicks (Michael Keaton), cruzem a linha de chegada juntamente com ele, o que faz com que uma corrida de desempate seja agendada na California. Relâmpago é então levado para o local de corrida por Mack (John Ratzenberger), um caminhão que faz parte de sua equipe. Ele quer chegar ao local antes de seus competidores e, por causa disto, insiste que Mack viage sem interrupções. Mack termina dormindo em pleno trânsito, o que faz com que a caçamba se abra e Relâmpago, que também estava dormindo, seja largado em plena estrada. Ao acordar Relâmpago tenta encontrar Mack a todo custo, mas não tem sucesso. Em seu desespero ele chega à pequena Radiator Springs, uma cidade do interior que tem pouquíssimo movimento e que jamais ouviu falar de Relâmpago ou até mesmo da Copa Pistão. Porém, por ter destruído a principal rua da cidade, Relâmpago é condenado a reasfaltá-la. Obrigado a permanecer na cidade contra a sua vontade, aos poucos ele conhece os habitantes locais e começa a se afeiçoar por eles.", 
      "imagem": "images/infantil.png", 
      "video": "videos/Carros.mp4",
      "link": "https://www.disneyplus.com/pt-br/browse/entity-9c1b0ec2-2e4e-4717-89fb-bdf3a45523df?distributionPartner=google",
      "nome_filme": 'VEJA AQUI'
    }
  ] 