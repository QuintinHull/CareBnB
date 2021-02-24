from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SelectField
from wtforms.validators import DataRequired
from app.models import Spot

state = [("AL"), ("AK"), ("AZ"), ("AR"), ("CA"), ("CO"), ("CT"), ("DE"), ("FL"), ("GA"), ("HI"), ("ID"), ("IL"), ("IN"), ("IA"), ("KS"), ("KY"), ("LA"), ("ME"), ("MD"), ("MA"), ("MI"), ("MN"), ("MS"),
         ("MO"), ("MT"), ("NE"), ("NV"), ("NH"), ("NJ"), ("NM"), ("NY"), ("NC"), ("ND"), ("OH"), ("OK"), ("OR"), ("PA"), ("RI"), ("SC"), ("SD"), ("TN"), ("TX"), ("UT"), ("VT"), ("VA"), ("WA"), ("WV"), ("WI"), ("WY")]


class SpotForm(FlaskForm):
    image_url = StringField("spot_image", validators=[DataRequired()])
    title = StringField("title", validators=[DataRequired()])
    address = StringField("address", validators=[DataRequired()])
    city = StringField("city", validators=[DataRequired()])
    state = SelectField("state", choices=state, validators=[DataRequired()])
    zipcode = IntegerField("zipcode", validators=[DataRequired()])
    description = TextAreaField("description", validators=[DataRequired()])
    capacity = IntegerField("capacity", validators=[DataRequired()])
