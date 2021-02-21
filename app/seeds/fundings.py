from app.models import db, Funding


def seed_fundings():
    funding_1 = Funding(id=1, user_id=1, spots_id=1, sponsorship_cost=10.0)

    funding_2 = Funding(id=2, user_id=1, spots_id=2, sponsorship_cost=15.0)

    funding_3 = Funding(id=3, user_id=1, spots_id=3, sponsorship_cost=5.0)

    funding_4 = Funding(id=4, user_id=1, spots_id=4, sponsorship_cost=20.0)

    db.session.add(funding_1)
    db.session.add(funding_2)
    db.session.add(funding_3)
    db.session.add(funding_4)
    db.session.commit()


def undo_fundings():
    Funding.query.delete()
    db.session.commit()
