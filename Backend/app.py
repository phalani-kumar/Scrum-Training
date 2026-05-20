from flask import Flask
from flask_cors import CORS
from employee_routes import employee_routes

app = Flask(__name__)

CORS(app)

app.register_blueprint(employee_routes)

@app.route("/")
def home():

    return "Employee Dashboard Backend Running"

if __name__ == "__main__":

    app.run(debug=True, port=5001)
    