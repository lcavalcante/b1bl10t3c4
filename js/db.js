"use strict";

var Comment = function (autor, titulo, texto) {
    var self = this;

    self.titulo = titulo;
    self.autor = autor;
    self.texto = texto;
};
var Livro = function (titulo, autores, desc, foto, preco) {
    var self = this;

    self.titulo = titulo;
    self.autor = autores;
    self.preco = preco;
    self.desc = desc;
    self.foto = foto;
    self.comments = [];

    this.setTitulo = function (titulo) {
        self.titulo = titulo;
    };
    this.setAutores = function (autores) {
        self.autores = autores;
    };
    this.setPreco = function (preco) {
        self.preco = preco;
    };
    this.setFoto = function (foto) {
        self.foto = foto;
    };
    this.setDesc = function (desc) {
        self.desc = desc;
    };
    this.addComment = function (autor, titulo, texto) {
        var comment = new Comment(autor, titulo, texto);
        self.comments.push(comment);
    }

};


var l1 = new Livro("The Lord of the Rings", "J.R.R Tolkien", "A história narra o conflito contra o mal que se alastra pela Terra-média, através da luta de várias raças - Humanos, Anões, Elfos, Ents e Hobbits - contra Orcs, para evitar que o Anel do Poder volte às mãos de seu criador Sauron, o Senhor do Escuro. Partindo dos primórdios tranquilos do Condado, a história muda através da Terra-média e segue o curso da Guerra do Anel através dos olhos de seus personagens, especialmente do protagonista, Frodo Bolseiro.", "img/lotr2.jpg", 20);
var l2 = new Livro("The Hunger Games", "Suzanne Collins", "Este livro é o primeiro de uma bem-sucedida trilogia, comercializada para mais de 20 países, A história se passa em uma nação chamada Panem, fundada após o fim da América do Norte. Formada por 12 distritos, é comandada com mão de ferro pela Capital, sede do governo. Uma das formas com que demonstra seu poder sobre o resto do carente país é com os 'Jogos Vorazes', uma competição anual transmitida ao vivo pela televisão, em que um garoto e uma garota de 12 a 18 anos de cada distrito são selecionados e obrigados a lutar até a morte. ", "img/hg.jpg", 20);
var l3 = new Livro("The Chronicles of Narnia", "C. S. Lewis", "Nos últimos 50 anos, 'As Crônicas de Nárnia' transcenderam o gênero da fantasia para se tornar parte do cânone da literatura clássica. Cada um dos sete livros é uma obra-prima, atraindo o leitor para um mundo em que a magia encontra a realidade, e o resultado é um mundo ficcional que tem fascinado gerações. Esta edição apresenta todas as sete crônicas integralmente, um único volume magnífico. Os livros são apresentados de acordo com a ordem de preferência de Lewis, cada capítulo com um ilustração do artista original, Pauline Baynes. Enganosamente simples e diretas, 'As Crônicas de Nárnia' continuam cativando os leitores com aventuras, personagens e fatos que falam a pessoas de todas as idades, mesmo 50 anos após terem sido publicadas pela primeira vez.", "img/cn.jpg", 30);
var l4 = new Livro("The Great Gatsby", "F. Scott Fitzgerald", "Jay Gatsby is the man who has everything. But one thing will always be out of his reach. Everybody who is anybody is seen at his glittering parties. Day and night his Long Island mansion buzzes with bright young things drinking, dancing and debating his mysterious character.", "img/gg.jpg", 40);
var l5 = new Livro("Planet of the Apes", "Pierre Boulle", "Em pouco tempo, os desbravadores do espaço descobrem a terrível verdade: nesse mundo, seus pares humanos não passam de bestas selvagens a serviço da espécie dominante... os macacos. Desde as primeiras páginas até o surpreendente ?nal – ainda mais impactante que a famosa cena ?nal do ?lme de 1968 –, O planeta dos macacos é um romance de tirar o fôlego, temperado com boa dose de sátira. Nele, Boulle revisita algumas das questões mais antigas da humanidade: O que de?ne o homem? O que nos diferencia dos animais? Quem são os verdadeiros inimigos de nossa espécie? Publicado pela primeira vez em 1963, O planeta dos macacos, de Pierre Boulle, inspirou uma das mais bem-sucedidas franquias da história do cinema, tendo início no clássico de 1968, estrelado por Charlton Heston, passando por diversas sequências e chegando às adaptações cinematográ?cas mais recentes. Com milhões de exemplares vendidos ao redor do mundo, O planeta dos macacos é um dos maiores clássicos da ficção científica, imprescindível aos fãs de cultura pop.", "img/pa.jpg", 50);
var l6 = new Livro("Ensaio Sobre a Cegueira", "Jose Saramago", "Livro que deu origem ao filme de Fernando Meirelles. Do autor vencedor do Prêmio Nobel de Literatura de 1998. Um motorista parado no sinal se descobre subitamente cego. É o primeiro caso de uma 'treva branca' que logo se espalha incontrolavelmente. Resguardados em quarentena, os cegos se perceberão reduzidos à essência humana, numa verdadeira viagem às trevas.O Ensaio sobre a cegueira é a fantasia de um autor que nos faz lembrar 'a responsabilidade de ter olhos quando os outros os perderam'. José Saramago nos dá, aqui, uma imagem aterradora e comovente de tempos sombrios, à beira de um novo milênio, impondo-se à companhia dos maiores visionários modernos, como Franz Kafka e Elias Canetti. Cada leitor viverá uma experiência imaginativa única. Num ponto onde se cruzam literatura e sabedoria, José Saramago nos obriga a parar, fechar os olhos e ver. Recuperar a lucidez, resgatar o afeto: essas são as tarefas do escritor e de cada leitor, diante da pressão dos tempos e do que se perdeu: 'uma coisa que não tem nome, essa coisa é o que somos'.", "img/ec.jpg", 60);
var l7 = new Livro("The Godfather", "Mario Puzo", "A fictional portrait journeys inside the world of the Cosa Nostra and its operations to chronicle the lives and fortunes of Mafia leader Vito Corleone, his family, and his underworld domain. Reissue.", "img/tg.jpg", 70);
var l8 = new Livro("I Robot", "Isaac Asimov", "In the late 1940s and early 1950s Isaac Asimov found a home on the pages of the science-fiction magazines Astounding and Super-Science Stories. World War II had just ended and the world was obsessed with air combat and the role of technology in society. Asimov’s stories reflected the concerns over the danger of technology but they also humanized robots, indicating that it is not technology that is evil but the way it is sometimes abused.", "img/ir.jpg", 80);
var l9 = new Livro("War And Peace", "Leo Tolstoy", "Com um número quase sem fim de personagens e mais de mil páginas em sua versão original, Guerra e paz é um dos mais significativos e importantes romances da história. O enredo deste clássico da literatura russa (e mundial) se desenrola durante a campanha de Napoleão Bonaparte na Áustria, e descreve a invasão da Rússia pelo exército francês e a sua retirada, entre os anos de 1805 a 1820. O autor pinta com habilidade e desenvoltura um retrato acurado do jogo da política da época, das intrigas vigentes na corte, das tramas da sociedade, das manobras propostas pela nobreza arruinada, da brutalidade da guerra, sua banalidade e pormenores.", "img/wp.jpg", 90);
var l10 = new Livro("Les Miserables", "Victor Hugo", "In this story of the trials of the peasant Jean Valjean - a man unjustly imprisoned, baffled by destiny, and hounded by his nemesis, the magnificently realized, ambiguously malevolent police detective Javert - Hugo achieves the sort of rare imaginative resonance that allows a work of art to transcend its genre.Trying to forget his past and live an honest life, escaped convict Jean Valjean risks his freedom to take care of a motherless young girl during a period of political unrest in Paris.", "img/lm.jpg", 100);

l1.addComment("Victor Victorius Viton", "O Melhor", "Eu amo frodo bolseiro");
l1.addComment("Leticia, A Cabeluda", "Legolas", "Orlando Bloom muito gatinho");