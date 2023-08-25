import os

from flask import Flask, request
from flask_cors import CORS, cross_origin
from tower_of_hanoi.algorithm import Algorithm


app = Flask(__name__)

app.config['CORS_HEADERS'] = 'Content-Type'

CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

@app.route("/")
def home():
    return "running."

@cross_origin()
@app.route('/generate-steps', methods=["POST"])
def generate_steps():
    body = request.get_json()
    if body.get("number_of_pegs"):
        algo = Algorithm(body["number_of_pegs"])
        steps = algo.generate_tower_of_hanoi()
        return {
            "number_of_pegs": body["number_of_pegs"],
            "steps": steps
        }
    else:
        return {
            "error": "missing number of pegs from the body"
        }