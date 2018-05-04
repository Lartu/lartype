#!/bin/env python
#Taken from https://kdecherf.com/blog/2012/07/29/multithreaded-python-simple-http-server/

import SocketServer
import BaseHTTPServer
import SimpleHTTPServer

class ThreadingSimpleServer(SocketServer.ThreadingMixIn,
                   BaseHTTPServer.HTTPServer):
    pass

import sys

port = 23416

server = ThreadingSimpleServer(('', port), SimpleHTTPServer.SimpleHTTPRequestHandler)
try:
    while 1:
        sys.stdout.flush()
        server.handle_request()
except KeyboardInterrupt:
    print "Finished"
