# employees = [
#     {
#         "id": 1,
#         "name": "Rakesh",
#         "department": "Developer",
#         "email": "rakesh@gmail.com",
#         "status": "Active"
#     },
#     {
#         "id": 2,
#         "name": "Sneha",
#         "department": "Designer",
#         "email": "sneha@gmail.com",
#         "status": "Inactive"
#     }
# ]

import sqlite3

def get_connection():

    conn = sqlite3.connect("employees.db")

    conn.row_factory = sqlite3.Row

    return conn


def create_table():

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS employees (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            fullname TEXT NOT NULL,

            email TEXT NOT NULL,

            company TEXT,

            website TEXT
        )
    """)

    conn.commit()

    conn.close()


create_table()