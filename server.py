import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

print(f"Servidor corriendo en http://localhost:{PORT}")
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
