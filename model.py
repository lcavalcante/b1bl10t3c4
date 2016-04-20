from google.appengine.ext import ndb


class Book(ndb.Model):

        title = ndb.StringProperty()
        author = ndb.StringProperty()
        price = ndb.IntegerProperty()
        desc = ndb.StringProperty()
        photo = ndb.StringProperty()


def all_books():
    return Book.query()


def insert_book(id, title, author, price, desc, photo):
    book = Book(id=id, title=title, author=author, price=price, desc=desc, photo=photo)
    book.put()
    return book


def update_book(id, title, author, price, desc, photo):
    book = Book(id=id, title=title, author=author, price=price, desc=desc, photo=photo)
    book.put()
    return book


def delete_book(number):
    key = ndb.Key(Book, number)
    key.delete()
