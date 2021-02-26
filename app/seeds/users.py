from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(first_name='Demo', last_name='User', email='demo@aa.io',
                password='password')

    gen = User(first_name='Gen', last_name='Ohta', email='gen@aa.com',
               password='genpw')

    juliet = User(first_name='Juliet', last_name='Shafto', email='juliet@aa.com',
                  password='julietpw')

    alfredo = User(first_name='Alfredo', last_name='Quiroga', email='alfredo@aa.com',
                   password='alfredopw')

    ed = User(first_name='Ed', last_name='Herman', email='ed@aa.com',
              password='edpw')

    john = User(first_name='John', last_name='Tipton', email='tipton@gmail.com',
                password='password')

    adam = User(first_name='Adam', last_name='Burton', email='burton@gmail.com',
                password='password')

    frank = User(first_name='Frank', last_name='Clinton', email='fclint@gmail.com',
                 password='password')

    claire = User(first_name='Claire', last_name='Costano', email='claircos@gmail.com',
                  password='password')

    monica = User(first_name='Monica', last_name='Smith', email='msmith@gmail.com',
                  password='password')

    db.session.add(demo)
    db.session.add(gen)
    db.session.add(juliet)
    db.session.add(alfredo)
    db.session.add(john)
    db.session.add(adam)
    db.session.add(frank)
    db.session.add(claire)
    db.session.add(monica)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
