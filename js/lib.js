"use strict";

function libService($http){
    var service = this;

    service.getLivros = function () {

        function success(response) {
            return response.data;
        }

        function error(response) {
            console.log(response.status);
            return response.data;
        }

        return $http.get('/api/livro').then(success, error)
    }
    
    service.postLivro = function (data) {

        function success(response) {
            return response.data;
        }

        function error(response) {
            console.log(response.status);
            return response.data;
        }

        return $http.post('api/livro', data).then(success, error)
    }
    
    service.putLivro = function (data, id) {

        function success(response) {
            return response.data;
        }

        function error(response) {
            console.log(response.status);
            return response.data;
        }

        return $http.put('api/livro/' + id, data).then(success, error)
    }

}

function libController(libService) {
    var self = this;
    victor = self;

    self.livros = [];

    self.getLivros = function () {
        function success(livros) {
            self.livros = livros;
        }
        
        libService.getLivros().then(success);
    };
    self.getLivros();

    self.indiceLivro = 0;

    self.selected = null;

    self.livro = self.livros[self.indiceLivro];


    self.addLivro = function (titulo, autores, desc, foto, preco) {
        var novoLivro = new Livro(titulo, autores, desc, foto, preco);
        novoLivro.id = '';

        function success(data) {
            self.livros.push(novoLivro);
        }

        function error(data) {
            console.log(data);
        }


        libService.postLivro(novoLivro).then(success, error);
    };

    self.updateLivro = function (indice, titulo, autores, desc, foto, preco) {
       var novoLivro = new Livro(titulo, autores, desc, foto, preco);
        novoLivro.id = '';

       function success(data) {
            self.livros[indice].setTitulo(titulo);
            self.livros[indice].setAutores(autores);
            self.livros[indice].setDesc(desc);
            self.livros[indice].setFoto(foto);
            self.livros[indice].setPreco(preco);
       }

       function error(data) {
           console.log(data);
       }

        libService.putLivro(novoLivro, self.livros[indice].id).then(success, error);

    };

    self.deleteLivro = function (index) {
        if (index > -1) {
            self.livros.splice(index, 1);
        }
    };

    self.findLivro = function (title) {
        for (var i = 0; i < self.livros.length; i++) {
            if (self.livros[i].titulo === title) {
                return i;
            }
        }
    };

    self.addComment = function (comment) {
        self.livro.setComment(comment);
    };

    self.select = function (book) {
        self.selected = book;
    };
}


var victor = null;
angular.module("lib", [])
    .service('libService', libService)
    .controller('libController', libController);
