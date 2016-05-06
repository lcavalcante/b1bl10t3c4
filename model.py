from google.appengine.ext import ndb


class Book(ndb.Model):

        titulo = ndb.StringProperty()
        autor = ndb.StringProperty()
        preco = ndb.FloatProperty()
        desc = ndb.StringProperty()
        foto = ndb.StringProperty()


def all_books():
    return Book.query()


def query_book(number):
    key = ndb.Key(Book, number)
    book = key.get()
    return book


def insert_book(id, titulo, autor, preco, desc, foto):
    book = Book(id=id, titulo=titulo, autor=autor, preco=preco, desc=desc, foto=foto)
    book.put()
    return book


def update_book(id, titulo, autor, preco, desc, foto):
    book = Book(id=id, titulo=titulo, autor=autor, preco=preco, desc=desc, foto=foto)
    book.put()
    return book


def delete_book(number):
    key = ndb.Key(Book, number)
    key.delete()
