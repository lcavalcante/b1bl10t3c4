import webapp2
import json

import model


def as_dict(book):
    return {'id': book.key.id(),
            'title': book.title,
            'author': book.author,
            'price': book.price,
            'desc': book.desc,
            'photo': book.photo}


class APIHandler(webapp2.RequestHandler):
    def dispatch(self):
        super(APIHandler, self).dispatch()

    def send_json(self, r):
        # self.response.headers['content-type'] = 'text/plain'
        self.response.write(json.dumps(r))


class QueryHandler(APIHandler):
    def get(self):
        books = model.all_books()
        r = [as_dict(book) for book in books]
        self.send_json(r)


class UpdateHandler(APIHandler):
    def put(self, id):
        r = json.loads(self.request.body)
        book = model.update_book(id, r['title'], r['author'], r['price'], r['desc'], r['photo'])
        r = as_dict(book)
        self.send_json(r)


class InsertHandler(APIHandler):
    def post(self):
        r = json.loads(self.request.body)
        book = model.insert_book(r['title'], r['author'], r['price'], r['desc'], r['photo'])
        r = as_dict(book)
        self.send_json(r)


class DeleteHandler(APIHandler):
    def delete(self, key=None):
        r = json.loads(self.request.body)
        if key is not None:
            model.delete_book(key)
        else:
            model.delete_book(r['id'])


app = webapp2.WSGIApplication([
    ('/api/query', QueryHandler),
    ('/api/insert', InsertHandler),
    ('/api/delete', DeleteHandler),
    ('/api/update', UpdateHandler),
], debug=True)
