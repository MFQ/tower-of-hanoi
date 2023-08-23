import os

from flask import Flask, request
from tower_of_hanoi.algorithm import Algorithm


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
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

    return app