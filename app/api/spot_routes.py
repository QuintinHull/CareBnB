from flask import Blueprint, jsonify

from app.models import Spot

spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/')
def all_spots():
    spots = Spot.query.all()
    return {"all_spots": [spot.to_dict() for spot in spots]}
