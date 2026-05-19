from flask import Flask, jsonify, request
from users import users

app = Flask(__name__)

# Home Route
@app.route('/')
def home():
    return jsonify({
        "message": "User Profile API is running"
    })

# GET all users
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

# GET user by ID
@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):

    for user in users:
        if user["id"] == id:
            return jsonify(user)

    return jsonify({
        "error": "User not found"
    }), 404

# POST new user
@app.route('/users', methods=['POST'])
def add_user():

    data = request.get_json()

    # Basic Validation
    required_fields = ["name", "email", "role"]

    for field in required_fields:
        if field not in data or data[field] == "":
            return jsonify({
                "error": f"{field} is required"
            }), 400

    new_user = {
        "id": len(users) + 1,
        "name": data["name"],
        "email": data["email"],
        "role": data["role"],
        "bio": data.get("bio", ""),
        "company": data.get("company", ""),
        "website": data.get("website", "")
    }

    users.append(new_user)

    return jsonify({
        "message": "User added successfully",
        "user": new_user
    }), 201

if __name__ == '__main__':
    app.run(debug=True)