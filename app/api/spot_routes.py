from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import db, Spot
from app.forms import SpotForm
from sqlalchemy import and_

spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/')
def all_spots():
    spots = Spot.query.all()
    print('current_user.id', current_user.id)
    return {"all_spots": {spot.id: spot.to_dict() for spot in spots}}


@spot_routes.route('/', methods=["POST"])
def create_spot():
    form = SpotForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data["capacity"])
    if form.validate_on_submit():
        spot = Spot(
            image_url=form.data['image_url'],
            title=form.data['title'],
            address=form.data['address'],
            city=form.data['city'],
            state=form.data['state'],
            zipcode=form.data['zipcode'],
            description=form.data['description'],
            capacity=form.data['capacity'],
            availability=form.data['capacity'],
            latitude=form.data["latitude"],
            longitude=form.data["longitude"],
            host_id=current_user.id,
        )
        db.session.add(spot)
        db.session.commit()
        return {"spot": spot.to_dict()}
    return {"errors": "set errors here"}


@spot_routes.route('/<id>', methods=["DELETE"])
def delete_spot(id):
    spot = Spot.query.filter(Spot.id == id).first()
    db.session.delete(spot)
    db.session.commit()
    return {'spot': spot.to_dict()}


@spot_routes.route('/<id>')
def single_spot(id):
    spot = Spot.query.get(id)
    return {'spot': spot.to_dict()}


@spot_routes.route('/top-available')
def available_spots():
    spots = Spot.query.filter(Spot.availability > 0).order_by(Spot.availability.desc()).limit(10)
    return {'available_spots': [spot.to_dict() for spot in spots]}


@spot_routes.route('/search/<guest_size>&<city>')
def search_spots(guest_size, city):
    spots = Spot.query.filter(
        and_(Spot.city.ilike(f'{city}%'), Spot.availability >= guest_size))
    return {'searched_spots': [spot.to_dict() for spot in spots]}
