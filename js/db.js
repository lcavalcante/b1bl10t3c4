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

var l1 = new Livro("Senhor dos Aneis","Tolkien","A histÃ³ria narra o conflito contra o mal que se alastra pela Terra-mÃ©dia, atravÃ©s da luta de vÃ¡rias raÃ§as - Humanos, AnÃµes, Elfos, Ents e Hobbits - contra Orcs, para evitar que o Anel do Poder volte Ã s mÃ£os de seu criador Sauron, o Senhor do Escuro. Partindo dos primÃ³rdios tranquilos do Condado, a histÃ³ria muda atravÃ©s da Terra-mÃ©dia e segue o curso da Guerra do Anel atravÃ©s dos olhos de seus personagens, especialmente do protagonista, Frodo Bolseiro.","http://pngimg.com/upload/book_PNG2111.png",1);
var l2 = new Livro("b","a","a","http://pngimg.com/upload/book_PNG2111.png",2);
var l3 = new Livro("c","a","a","http://pngimg.com/upload/book_PNG2111.png",3);
var l4 = new Livro("d","a","a","http://pngimg.com/upload/book_PNG2111.png",4);
var l5 = new Livro("e","a","a","http://pngimg.com/upload/book_PNG2111.png",5);
var l6 = new Livro("f","a","a","http://pngimg.com/upload/book_PNG2111.png",6);
var l7 = new Livro("g","a","a","http://pngimg.com/upload/book_PNG2111.png",7);
var l8 = new Livro("h","a","a","http://pngimg.com/upload/book_PNG2111.png",8);
var l9 = new Livro("i","a","a","http://pngimg.com/upload/book_PNG2111.png",9);
var l10 = new Livro("j","a","a","http://pngimg.com/upload/book_PNG2111.png",10);
