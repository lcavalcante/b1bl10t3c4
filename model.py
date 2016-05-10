from google.appengine.ext import ndb


class Comment(ndb.Model):
    titulo = ndb.StringProperty()
    autor = ndb.StringProperty()
    texto = ndb.StringProperty()


class Book(ndb.Model):
    titulo = ndb.StringProperty()
    autor = ndb.StringProperty()
    preco = ndb.FloatProperty()
    desc = ndb.StringProperty()
    foto = ndb.StringProperty()
    comments = ndb.StructuredProperty(Comment, repeated=True)


def all_books():
    return Book.query()


def query_book(number):
    key = ndb.Key(Book, number)
    book = key.get()
    return book


def insert_book(id, titulo, autor, preco, desc, foto):
    comments = []
    book = Book(id=id, titulo=titulo, autor=autor, preco=preco, desc=desc, foto=foto, comments=comments)
    book.put()
    return book


def update_book(id, titulo, autor, preco, desc, foto):
    book = Book(id=id, titulo=titulo, autor=autor, preco=preco, desc=desc, foto=foto)
    book.put()
    return book


def delete_book(number):
    key = ndb.Key(Book, number)
    key.delete()


def insert_comment(bookId, id, titulo, autor, texto):
    book = query_book(bookId)
    comment = Comment(id=id, titulo=titulo, autor=autor, texto=texto)
    book.comments.append(comment)
    book.put()
    return comment