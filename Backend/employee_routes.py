from flask import Blueprint, jsonify, request
from employee_data import employees

employee_routes = Blueprint("employee_routes", __name__)

# GET EMPLOYEES
@employee_routes.route("/employees", methods=["GET"])
def get_employees():

    return jsonify(employees)

# ADD EMPLOYEE
@employee_routes.route("/employees", methods=["POST"])
def add_employee():

    new_employee = request.json

    new_employee["id"] = len(employees) + 1

    employees.append(new_employee)

    return jsonify({
        "message": "Employee Added Successfully",
        "employee": new_employee
    })

# UPDATE EMPLOYEE
@employee_routes.route("/employees/<int:id>", methods=["PUT"])
def update_employee(id):

    updated_data = request.json

    for employee in employees:

        if employee["id"] == id:

            employee["name"] = updated_data["name"]
            employee["department"] = updated_data["department"]
            employee["email"] = updated_data["email"]
            employee["status"] = updated_data["status"]

            return jsonify({
                "message": "Employee Updated Successfully",
                "employee": employee
            })

    return jsonify({
        "message": "Employee Not Found"
    }), 404

# DELETE EMPLOYEE
@employee_routes.route("/employees/<int:id>", methods=["DELETE"])
def delete_employee(id):

    for employee in employees:

        if employee["id"] == id:

            employees.remove(employee)

            return jsonify({
                "message": "Employee Deleted Successfully"
            })

    return jsonify({
        "message": "Employee Not Found"
    }), 404