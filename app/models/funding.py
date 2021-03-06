from .db import db


class Funding(db.Model):
    __tablename__ = 'fundings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    spots_id = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
    sponsorship_cost = db.Column(db.Float)

    sponsor = db.relationship("User")
    spot = db.relationship("Spot")

    def to_dict(self):
        return {
            'id': self.id,
            'sponsor': self.sponsor.to_dict(),
            'spot': self.spot.to_dict(),
            'sponsorship_cost': self.sponsorship_cost
        }