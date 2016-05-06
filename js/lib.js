"use strict";


function livroFactory(titulo, autores, desc, foto, preco) {
    return {
        titulo: titulo,
        autor: autores,
        desc: desc,
        foto: foto,
        preco: preco,
        comments: []
    };
}

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
    };

    service.postLivro = function (data) {

        function success(response) {
            return response.data;
        }

        function error(response) {
            console.log(response.status);
            return response.data;
        }

        return $http.post('api/livro', data).then(success, error)
    };

    service.putLivro = function (data, id) {

        function success(response) {
            return response.data;
        }

        function error(response) {
            console.log(response.status);
            return response.data;
        }

        return $http.put('api/livro/' + id, data).then(success, error)
    };

    service.deleteLivro = function (id) {
        function success(response) {
            return response.data;
        }

        function error(response) {
            console.log(response.status);
            return response.data;
        }


        return $http.delete('api/livro/' + id).then(success, error);
    }

}

function libController(libService) {
    var self = this;
    debug = self;
    debug.factory = livroFactory;


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

    self.addLivro = function (titulo, autores, desc, foto, preco) {
        var novoLivro = livroFactory(titulo,autores,desc,foto,preco);
        novoLivro.id = '';

        function success() {
            self.livros.push(novoLivro);
        }

        function error(data) {
            console.log(data);
        }


        libService.postLivro(novoLivro).then(success, error);
    };

    self.updateLivro = function (livro, titulo, autores, desc, foto, preco) {
       console.log(titulo);
       var novoLivro = livroFactory(titulo, autores, desc, foto, preco);
       var indice = self.findLivro(livro.titulo);
       function success() {
            self.livros[indice] = novoLivro;
       }

       function error(data) {
           console.log(data);
       }

       libService.putLivro(novoLivro, self.livros[indice].id).then(success, error);

    };

    self.deleteLivro = function (index) {

        function success() {
            if (index > -1) {
                self.livros.splice(index, 1);
            }
        }

        function error() {
            console.log("error");
        }

        libService.deleteLivro(self.livros[index].id).then(success, error);
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


var debug = null;
angular.module("lib", [])
    .factory('livroFactory', livroFactory)
    .service('libService', libService)
    .controller('libController', libController);
