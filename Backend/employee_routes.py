# from flask import Blueprint, jsonify, request
# from employee_data import employees

# employee_routes = Blueprint("employee_routes", __name__)

# # GET EMPLOYEES
# @employee_routes.route("/employees", methods=["GET"])
# def get_employees():

#     return jsonify(employees)

# # ADD EMPLOYEE
# @employee_routes.route("/employees", methods=["POST"])
# def add_employee():

#     new_employee = request.json

#     new_employee["id"] = len(employees) + 1

#     employees.append(new_employee)

#     return jsonify({
#         "message": "Employee Added Successfully",
#         "employee": new_employee
#     })

# # UPDATE EMPLOYEE
# @employee_routes.route("/employees/<int:id>", methods=["PUT"])
# def update_employee(id):

#     updated_data = request.json

#     for employee in employees:

#         if employee["id"] == id:

#             employee["name"] = updated_data["name"]
#             employee["department"] = updated_data["department"]
#             employee["email"] = updated_data["email"]
#             employee["status"] = updated_data["status"]

#             return jsonify({
#                 "message": "Employee Updated Successfully",
#                 "employee": employee
#             })

#     return jsonify({
#         "message": "Employee Not Found"
#     }), 404

# # DELETE EMPLOYEE
# @employee_routes.route("/employees/<int:id>", methods=["DELETE"])
# def delete_employee(id):

#     for employee in employees:

#         if employee["id"] == id:

#             employees.remove(employee)

#             return jsonify({
#                 "message": "Employee Deleted Successfully"
#             })

#     return jsonify({
#         "message": "Employee Not Found"
#     }), 404

from flask import Blueprint, jsonify, request

from employee_data import get_connection

employee_routes = Blueprint(
    "employee_routes",
    __name__
)

# GET EMPLOYEES
@employee_routes.route(
    "/employees",
    methods=["GET"]
)
def get_employees():

    conn = get_connection()

    employees = conn.execute(
        "SELECT * FROM employees"
    ).fetchall()

    conn.close()

    return jsonify([
        dict(employee)
        for employee in employees
    ])


# ADD EMPLOYEE
@employee_routes.route(
    "/employees",
    methods=["POST"]
)
def add_employee():

    data = request.json

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO employees
        (fullname, email, company, website)

        VALUES (?, ?, ?, ?)
    """, (

        data["fullname"],
        data["email"],
        data["company"],
        data["website"]
    ))

    conn.commit()

    conn.close()

    return jsonify({
        "message":
        "Employee Added Successfully"
    })


# UPDATE EMPLOYEE
@employee_routes.route(
    "/employees/<int:id>",
    methods=["PUT"]
)
def update_employee(id):

    data = request.json

    conn = get_connection()

    conn.execute("""
        UPDATE employees

        SET
            fullname = ?,
            email = ?,
            company = ?,
            website = ?

        WHERE id = ?
    """, (

        data["fullname"],
        data["email"],
        data["company"],
        data["website"],
        id
    ))

    conn.commit()

    conn.close()

    return jsonify({
        "message":
        "Employee Updated Successfully"
    })


# DELETE EMPLOYEE
@employee_routes.route(
    "/employees/<int:id>",
    methods=["DELETE"]
)
def delete_employee(id):

    conn = get_connection()

    conn.execute(
        "DELETE FROM employees WHERE id = ?",
        (id,)
    )

    conn.commit()

    conn.close()

    return jsonify({
        "message":
        "Employee Deleted Successfully"
    })