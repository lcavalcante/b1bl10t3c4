import webapp2
import json

import model


def as_dict(book):
    return {'id': book.key.id(),
            'titulo': book.titulo,
            'autor': book.autor,
            'preco': book.preco,
            'desc': book.desc,
            'foto': book.foto}


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
        print self.request.body
        book = model.insert_book(r['id'], r['titulo'], r['autor'], r['preco'], r['desc'], r['foto'])
        r = as_dict(book)
        self.send_json(r)


class ParamBook(BookAPI):
    def delete(self, id):
        model.delete_book(id)
        self.response.http_status_message(202)

    def put(self, id):
        r = json.loads(self.request.body)
        book = model.update_book(id, r['titulo'], r['autor'], r['preco'], r['desc'], r['foto'])
        r = as_dict(book)
        self.send_json(r)


app = webapp2.WSGIApplication([
    ('/api/livro', BookAPI),
    (r'/api/livro/(?P<id>[0-9]+)$', ParamBook),
], debug=True)
