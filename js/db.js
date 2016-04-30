var Livro = function(titulo, autores, desc, foto, preco){
    var self = this;

    self.titulo = titulo;
    self.autores = autores;
    self.preco = preco;
    self.desc = desc;
    self.foto = foto;
    self.comments = [];

    this.setTitulo = function(titulo) {
        self.titulo = titulo;
    };
    this.setAutores = function(autores) {
        self.autores = autores;
    };
    this.setPreco = function(preco) {
        self.preco = preco;
    };
    this.setFoto = function(foto) {
        self.foto = foto;
    };
    this.setDesc = function(desc) {
        self.desc = desc;
    };
    this.setComment = function(comment){
        self.comments.push(comment);
    }

}

var l1 = new Livro("The Lord of the Rings","J.R.R Tolkien","A histÃ³ria narra o conflito contra o mal que se alastra pela Terra-mÃ©dia, atravÃ©s da luta de vÃ¡rias raÃ§as - Humanos, AnÃµes, Elfos, Ents e Hobbits - contra Orcs, para evitar que o Anel do Poder volte Ã s mÃ£os de seu criador Sauron, o Senhor do Escuro. Partindo dos primÃ³rdios tranquilos do Condado, a histÃ³ria muda atravÃ©s da Terra-mÃ©dia e segue o curso da Guerra do Anel atravÃ©s dos olhos de seus personagens, especialmente do protagonista, Frodo Bolseiro.","img/lotr.jpg",1);
var l2 = new Livro("The Hunger Games","Suzanne Collins","1","img/hg.jpg",2);
var l3 = new Livro("The Chronicles of Narnia","C. S. Lewis","sa","img/cn.jpg",3);
var l4 = new Livro("The Great Gatsby","F. Scott Fitzgerald","a","img/gg.jpg",4);
var l5 = new Livro("Planet of the Apes","Pierre Boulle","a","img/pa.jpg",5);
var l6 = new Livro("Ensaio Sobre a Cegueira","Jose Saramago","a","img/ec.jpg",6);
var l7 = new Livro("The Godfather","Mario Puzo","a","img/tg.jpg",7);
var l8 = new Livro("I Robot","Isaac Asimov","a","img/ir.jpg",8);
var l9 = new Livro("War And Peace","Leo Tolstoy","a","img/wp.jpg",9);
var l10 = new Livro("Les Miserables","Victor Hugo","a","img/lm.jpg",10);
