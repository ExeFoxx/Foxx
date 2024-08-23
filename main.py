from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/license/<path:filename>')
def license_file(filename):
    return send_from_directory('license', filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
