from flask import Flask, jsonify
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)


@app.route('/hello')
def hello_python():
    return {'message': "Hello from Python!"}


@app.route('/time')
def get_current_time():
    return jsonify({'time': time.time()})
