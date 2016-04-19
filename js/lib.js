var lib = angular.module("lib", []);

angular.module('lib').controller('libController', function (){
    var self = this;

    self.livros = [];
    self.livros.push(l1);
    self.livros.push(l2);
    self.livros.push(l3);
    self.livros.push(l4);
    self.livros.push(l5);
    self.livros.push(l6);
    self.livros.push(l7);
    self.livros.push(l8);
    self.livros.push(l9);
    self.livros.push(l10);

    self.indiceLivro = 0;

    self.livro = self.livros[self.indiceLivro];


    self.addLivro = function(titulo, autores, desc, foto, preco){
        var novoLivro = new Livro(titulo, autores, desc, foto, preco);
        self.livros.push(novoLivro);
    }

    self.updateLivro = function(indice, titulo, autores, desc, foto, preco){
        self.livros[indice].setTitulo(titulo);
        self.livros[indice].setAutores(autores);
        self.livros[indice].setDesc(desc);
        self.livros[indice].setFoto(foto);
        self.livros[indice].setPreco(preco);
    }

    self.addComment = function(comment){
        self.livro.setComment(comment);
    }

    self.next = function(){
        self.indiceLivro += 1;
        if(self.indiceLivro >= self.livros.length){
            self.indiceLivro = 0;
        }
        self.livro = self.livros[self.indiceLivro];
    }
    self.prev = function(){
        self.indiceLivro -= 1;
        if(self.indiceLivro < 0){
            self.indiceLivro = self.livros.length-1;
        }
        self.livro = self.livros[self.indiceLivro];
    }

});
