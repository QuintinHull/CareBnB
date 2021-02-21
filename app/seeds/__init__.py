from flask.cli import AppGroup
from .users import seed_users, undo_users
from .spots import seed_spots, undo_spots

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('users')
def seed():
    seed_users()
    # Add other seed functions here


@seed_commands.command('spots')
def seed_spot():
    seed_spots()

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_spots()
    undo_users()
    # Add other undo functions here
