from app.models import db, Spot


def seed_spots():

    spot_1 = Spot(image_url='https://m.media-amazon.com/images/I/61cKLDstV3L._AC_SX522_.jpg', title="Gen's Orphanage", address='7567 Court Ave.',
                  city='Oviedo', state='FL', zipcode=32765, description='Amazing 10 bedroom home.', capacity=20, availability=20, host_id=2)

    spot_2 = Spot(image_url='https://www.bostondesignguide.com/sites/default/files/architecturaldesign-summerhomes-1.jpg', title="Juliet's Summer Home", address='762 Old Summerhouse St.',
                  city='Goodlettsville', state='TN', zipcode=37072,  description='Beautiful summer home located in the Tennesse hills', capacity=4, availability=4, host_id=3)

    spot_3 = Spot(image_url='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bojnice-castle-1603142898.jpg', title="Alfredo's Castle", address='84 Courtland St.',
                  city='Fremont', state='OH', zipcode=43420, description='Stunning countryside castle ', capacity=500, availability=500, host_id=4)

    spot_4 = Spot(image_url='https://images.mansionglobal.com/im-191825?width=1280?width=1280&size=1', title="Ed's Mansion", address='11 Pleasant Avenue',
                  city='Fenton', state='MI', zipcode=48430, description='Amazing 10 bedroom home.', capacity=50, availability=50, host_id=5)

    db.session.add(spot_1)
    db.session.add(spot_2)
    db.session.add(spot_3)
    db.session.add(spot_4)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_spots():
    Spot.query.delete()
    db.session.commit()
