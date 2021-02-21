"""create_user_book_spot_table

Revision ID: 397ca62cc8d1
Revises: f0f68448b41c
Create Date: 2021-02-21 12:49:47.799224

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '397ca62cc8d1'
down_revision = 'f0f68448b41c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_book_spots',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('spots_id', sa.Integer(), nullable=False),
    sa.Column('guest_id', sa.Integer(), nullable=False),
    sa.Column('group_size', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['guest_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['spots_id'], ['spots.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_book_spots')
    # ### end Alembic commands ###
