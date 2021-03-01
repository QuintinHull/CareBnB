from flask import Blueprint, jsonify, request
from flask_login import current_user
from ..forms import BookingForm
from app.models import User_Book_Spot, Spot
from app.models.db import db


booking_routes = Blueprint('bookings', __name__)


@booking_routes.route("/")
def all_bookings():
    bookings = User_Book_Spot.query.all()
    return {"all_bookings": {booking.id: booking.to_dict() for booking in bookings}}


@booking_routes.route("/<id>")
def single_booking(id):
    booking = User_Book_Spot.query.get(id)
    return {"booking": booking.to_dict()}


@booking_routes.route("/<spot_id>", methods=["POST"])
def add_booking(spot_id):
    form = BookingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        spot = Spot.query.get(spot_id)
        spot.availability -= form.data["group_size"]
        booking = User_Book_Spot(
            spots_id=spot_id,
            guest_id=current_user.id,
            group_size=form.data["group_size"])

        db.session.add(booking)
        db.session.commit()
        return {'booking': {booking.id: booking.to_dict()}}
    else:
        return "Bad Data"


@booking_routes.route('/<id>', methods=['DELETE'])
def delete_booking(id):
    booking = User_Book_Spot.query.filter(User_Book_Spot.id == id).first()
    db.session.delete(booking)
    db.session.commit()
    return {'deleted': True}

# @spot_routes.route('/<id>', methods=["DELETE"])
# def delete_spot(id):
#     spot = Spot.query.filter(Spot.id == id).first()
#     db.session.delete(spot)
#     db.session.commit()
#     return {'deleted': True}
