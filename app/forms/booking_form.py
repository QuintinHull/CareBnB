from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired
from app.models import User_Book_Spot


class BookingForm(FlaskForm):
    group_size = IntegerField("group_size", validators=[DataRequired()])
