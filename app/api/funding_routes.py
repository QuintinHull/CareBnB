from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import Funding
from app.forms import FundingForm
from app.models.db import db

funding_routes = Blueprint('fundings', __name__)

@funding_routes.route("/")
def all_fundings():
    fundings = Funding.query.filter(Funding.user_id == current_user.id).all()
    return {"fundings": {funding.id: funding.to_dict() for funding in fundings}}


@funding_routes.route("/<spot_id>", methods=["POST"])
def create_funding(spot_id):
    form = FundingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        funding = Funding(
            user_id=current_user.id,
            spots_id=spot_id,
            sponsorship_cost=form.data["sponsorship_cost"])
        
        db.session.add(funding)
        db.session.commit()
        return {'funding': {funding.id: funding.to_dict()}}
    else:
        return "Bad Data"

# TODO: FIGURE OUT BUG THAT CAUSES FUNDING TO BE NONE
@funding_routes.route("/<id>")
def get_specific_fundings(id):
    funding = Funding.query.get(id)
    # funding = Funding.query.filter(Funding.id == id).first()
    print(funding)
    return {'funding': {funding.id: funding.to_dict()}}
