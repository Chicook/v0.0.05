from flask import Flask, render_template

WoldVirtual = Flask(__name__)

@WoldVirtual.route('/')

def principal():
    return render_template('webprincipal.html')

@WoldVirtual.route('/pagina1')
def pagina1():
    return render_template('pagina1.html')

@WoldVirtual.route('/pagina2')
def pagina2():
    return render_template('pagina2.html')

@WoldVirtual.route('/webcentral')
def webcentral():
    return render_template('webcentral.html')

if __name__ == '__main__':
    WoldVirtual.run(debug=True)
