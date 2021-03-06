from flask.cli import AppGroup
from .users import seed_users, undo_users
from .spots import seed_spots, undo_spots
from .user_book_spots import seed_bookings, undo_bookings
from .fundings import seed_fundings, undo_fundings

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_spots()
    seed_bookings()
    seed_fundings()
    # Add other seed functions here


@seed_commands.command('spots')
def seed_spot():
    seed_spots()


@seed_commands.command('bookings')
def seed_booking():
    seed_bookings()


@seed_commands.command('fundings')
def seed_funding():
    seed_fundings()
# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_fundings()
    undo_bookings()
    undo_spots()
    undo_users()
    # Add other undo functions here
