from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired
from app.models import Funding


class FundingForm(FlaskForm):
    sponsorship_cost = IntegerField("sponsorship_cost", validators=[DataRequired()])
