from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(id=1, first_name='Demo', last_name='User', email='demo@aa.io',
                password='password')

    gen = User(id=2, first_name='Gen', last_name='Ohta', email='gen@aa.com',
               password='genpw')

    juliet = User(id=3, first_name='Juliet', last_name='Shafto', email='juliet@aa.com',
                  password='julietpw')

    alfredo = User(id=4, first_name='Alfredo', last_name='Quiroga', email='alfredo@aa.com',
                   password='alfredopw')

    ed = User(id=5, first_name='Ed', last_name='Herman', email='ed@aa.com',
              password='edpw')

    db.session.add(demo)
    db.session.add(gen)
    db.session.add(juliet)
    db.session.add(alfredo)
    db.session.add(ed)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    User.query.delete()
    db.session.commit()
