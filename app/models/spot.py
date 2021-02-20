from .db import db


class Spot(db.Model):
    __tablename__ = 'spots'

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(20083), nullable=False)
    title = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(2), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    availability = db.Column(db.Integer, nullable=False)
    host_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    host = db.relationship("User", back_populates="spots")

    @property
    def title(self):
        return self.title

    def to_dict(self):
        return {
            "id": self.id,
            "image_url": self.image_url,
            "title": self.title,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "description": self.description,
            "capacity": self.capacity,
            "availability": self.availability,
            "host_id": self.host_id
        }
