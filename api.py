import webapp2


class BookHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('Hello world!')

app = webapp2.WSGIApplication([
    ('/api', BookHandler)
], debug=True)
