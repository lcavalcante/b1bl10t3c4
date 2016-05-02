"use strict";

var Desc = function (autor, titulo, texto) {
    var self = this;

    self.titulo = titulo;
    self.autor = autor;
    self.texto = texto;
};
var Livro = function (titulo, autores, desc, foto, preco) {
    var self = this;

    self.titulo = titulo;
    self.autores = autores;
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
    this.addComment = function (comment) {
        self.comments.push(comment);
    }

};


var l1 = new Livro("The Lord of the Rings", "J.R.R Tolkien", "A história narra o conflito contra o mal que se alastra pela Terra-média, através da luta de várias raças - Humanos, Anões, Elfos, Ents e Hobbits - contra Orcs, para evitar que o Anel do Poder volte às mãos de seu criador Sauron, o Senhor do Escuro. Partindo dos primórdios tranquilos do Condado, a história muda através da Terra-média e segue o curso da Guerra do Anel através dos olhos de seus personagens, especialmente do protagonista, Frodo Bolseiro.", "img/lotr2.jpg", 20);
var l2 = new Livro("The Hunger Games", "Suzanne Collins", "1", "img/hg.jpg", 20);
var l3 = new Livro("The Chronicles of Narnia", "C. S. Lewis", "sa", "img/cn.jpg", 30);
var l4 = new Livro("The Great Gatsby", "F. Scott Fitzgerald", "a", "img/gg.jpg", 40);
var l5 = new Livro("Planet of the Apes", "Pierre Boulle", "a", "img/pa.jpg", 50);
var l6 = new Livro("Ensaio Sobre a Cegueira", "Jose Saramago", "a", "img/ec.jpg", 60);
var l7 = new Livro("The Godfather", "Mario Puzo", "a", "img/tg.jpg", 70);
var l8 = new Livro("I Robot", "Isaac Asimov", "a", "img/ir.jpg", 80);
var l9 = new Livro("War And Peace", "Leo Tolstoy", "a", "img/wp.jpg", 90);
var l10 = new Livro("Les Miserables", "Victor Hugo", "a", "img/lm.jpg", 100);

var c1 = new Desc("Victor Victorius Viton", "O Melhor", "Eu amo frodo bolseiro");
var c2 = new Desc("Leticia, A Cabeluda", "Legolas", "Orlando Bloom muito gatinho");

l1.addComment(c1);
l1.addComment(c2);