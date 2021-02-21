from .db import db

class User_Book_Spot(db.Model):
    __tablename__ = "user_book_spots"

    id = db.Column(db.Integer, primary_key=True)
    spots_id = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
    guest_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    group_size = db.Column(db.Integer, nullable=False)

    spot = db.relationship("Spot")
    guest = db.relationship("User")