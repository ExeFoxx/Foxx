from flask import Flask, render_template

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def home():
    return render_template('resume.html')

if __name__ == '__main__':
    app.run(debug=True)
