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


class BookAPI(APIHandler):
    def get(self):
        books = model.all_books()
        r = [as_dict(book) for book in books]
        self.send_json(r)

    def post(self):
        r = json.loads(self.request.body)
        book = model.insert_book(r['id'], r['title'], r['author'], r['price'], r['desc'], r['photo'])
        r = as_dict(book)
        self.send_json(r)


class ParamBook(BookAPI):
    def delete(self, id):
        model.delete_book(int(id))
        self.response.http_status_message(202)

    def put(self, id):
        r = json.loads(self.request.body)
        book = model.update_book(id, r['title'], r['author'], r['price'], r['desc'], r['photo'])
        r = as_dict(book)
        self.send_json(r)


app = webapp2.WSGIApplication([
    ('/api/book', BookAPI),
    (r'/api/book/(?P<id>[0-9]+)$', ParamBook),
], debug=True)
