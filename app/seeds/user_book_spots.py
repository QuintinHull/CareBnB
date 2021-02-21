from app.models import db, User_Book_Spot, Spot

def seed_bookings():

    booking_1 = User_Book_Spot(id=1, spots_id=1, guest_id=1, group_size=8)
    booked_spot1 = Spot.query.get(booking_1.spots_id)
    booked_spot1.availability -= booking_1.group_size

    booking_2 = User_Book_Spot(id=2, spots_id=2, guest_id=1, group_size=2)
    booked_spot2 = Spot.query.get(booking_2.spots_id)
    booked_spot2.availability -= booking_2.group_size

    booking_3 = User_Book_Spot(id=3, spots_id=3, guest_id=1, group_size=6)
    booked_spot3 = Spot.query.get(booking_3.spots_id)
    booked_spot3.availability -= booking_3.group_size

    booking_4 = User_Book_Spot(id=4, spots_id=4, guest_id=1, group_size=9)
    booked_spot4 = Spot.query.get(booking_4.spots_id)
    booked_spot4.availability -= booking_4.group_size


    db.session.add(booking_1)
    db.session.add(booking_2)
    db.session.add(booking_3)
    db.session.add(booking_4)
    db.session.commit()

def undo_bookings():
    User_Book_Spot.query.delete()
    db.session.commit()