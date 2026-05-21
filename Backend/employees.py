from flask import Blueprint, jsonify, request

from db import connection

employee_routes = Blueprint(
    "employee_routes",
    __name__
)

# GET ALL EMPLOYEES
@employee_routes.route("/employees", methods=["GET"])
def get_employees():

    conn = connection()

    employees = conn.execute(
        "SELECT * FROM employees"
    ).fetchall()

    conn.close()

    return jsonify([
        dict(employee)
        for employee in employees
    ])


# ADD EMPLOYEE
@employee_routes.route("/employees", methods=["POST"])
def add_employee():

    data = request.json

    conn = connection()

    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO employees
        (fullname, email, designation, company, website)

        VALUES (?, ?, ?, ?, ?)
    """, (

        data["fullname"],
        data["email"],
        data["designation"],
        data["company"],
        data["website"]
    ))

    conn.commit()

    conn.close()

    return jsonify({
        "message": "Employee Added"
    })


# UPDATE EMPLOYEE
@employee_routes.route(
    "/employees/<int:id>",
    methods=["PUT"]
)
def update_employee(id):

    data = request.json

    conn = connection()

    conn.execute("""
        UPDATE employees

        SET
            fullname = ?,
            email = ?,
            designation = ?,
            company = ?,
            website = ?

        WHERE id = ?
    """, (

        data["fullname"],
        data["email"],
        data["designation"],
        data["company"],
        data["website"],
        id
    ))

    conn.commit()

    conn.close()

    return jsonify({
        "message": "Employee Updated"
    })


# DELETE EMPLOYEE
@employee_routes.route(
    "/employees/<int:id>",
    methods=["DELETE"]
)
def delete_employee(id):

    conn = connection()

    conn.execute(
        "DELETE FROM employees WHERE id = ?",
        (id,)
    )

    conn.commit()

    conn.close()

    return jsonify({
        "message": "Employee Deleted"
    })