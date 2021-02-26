from app.models import db, Spot


def seed_spots():

    spot_1 = Spot(image_url='https://m.media-amazon.com/images/I/61cKLDstV3L._AC_SX522_.jpg', title="Gen's Orphanage", address='7567 Court Ave.',
                  city='Oviedo', state='FL', zipcode=32765, description='Amazing 10 bedroom home.', capacity=20, availability=20, latitude=28.6700, longitude=81.2081, host_id=2)

    spot_2 = Spot(image_url='https://www.bostondesignguide.com/sites/default/files/architecturaldesign-summerhomes-1.jpg', title="Juliet's Summer Home", address='762 Old Summerhouse St.',
                  city='Goodlettsville', state='TN', zipcode=37072,  description='Beautiful summer home located in the Tennesse hills', capacity=4, availability=4, latitude=36.3231, longitude=-86.7133, host_id=3)

    spot_3 = Spot(image_url='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bojnice-castle-1603142898.jpg', title="Alfredo's Castle", address='84 Courtland St.',
                  city='Fremont', state='OH', zipcode=43420, description='Stunning countryside castle ', capacity=500, availability=500, latitude=41.3503, longitude=-83.1219, host_id=4)

    spot_4 = Spot(image_url='https://images.mansionglobal.com/im-191825?width=1280?width=1280&size=1', title="Ed's Mansion", address='11 Pleasant Avenue',
                  city='Fenton', state='MI', zipcode=48430, description='Amazing 10 bedroom home.', capacity=50, availability=50, latitude=42.7978, longitude=-83.7049, host_id=5)

    spot_5 = Spot(image_url='https://gambrick.com/wp-content/uploads/2019/05/small-house-colors-brick.jpg', title="Ranch style", address='7563 Fith Street',
                  city='Fort Worth', state='TX', zipcode=76006, description='Ranch style home off busy street in Fort Worth', capacity=5, availability=5, latitude=32.7555, longitude=-97.3308, host_id=5)

    spot_6 = Spot(image_url='https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg', title="Cozy family home", address='5 Wellington St',
                  city='Lubbock', state='TX', zipcode=79382, description='We are happy to host anyone in need of shelter.', capacity=1, availability=1, latitude=101.8313, longitude=-101.8552, host_id=6)

    spot_7 = Spot(image_url='https://static01.nyt.com/images/2019/06/25/realestate/25domestic-zeff/a1c1a1a36c9e4ff8adcb958c4276f28d-jumbo.jpg', title="All welcome here!", address='53 Mayfield Street',
                  city='Amarillo', state='TX', zipcode=79101, description='Our home is open to anyone in need of shelter and a warm plate', capacity=3, availability=3, latitude=35.2220, longitude=-101.8313, host_id=7)

    spot_8 = Spot(image_url='https://static01.nyt.com/images/2019/06/25/realestate/25domestic-zeff/a1c1a1a36c9e4ff8adcb958c4276f28d-jumbo.jpg', title="Open to those in need!", address='368 Roosevelt Street',
                  city='Oklahoma City', state='OK', zipcode=73008, description='We have room for five but can take more if willing to use sleeping bags', capacity=5, availability=5, latitude=35.4676, longitude=-97.5164, host_id=8)

    spot_9 = Spot(image_url='https://assets.themortgagereports.com/wp-content/uploads/2017/12/How-to-Buy-a-House-with-Low-Income-This-Year.jpg', title="A place to stay dry and warm!", address='9371 Foxrun Road',
                  city='Midland', state='TX', zipcode=79701, description='When the weather is bad, we open our home for 10 people in need.', capacity=10, availability=10, latitude=31.9973, longitude=-102.0779, host_id=9)

    spot_10 = Spot(image_url='https://ei.marketwatch.com/Multimedia/2019/05/22/Photos/ZQ/MW-HK104_lillev_20190522122922_ZQ.jpg', title="Tudor style home", address='8351 S. Holly Avenue',
                   city='Abilene', state='TX', zipcode=79601, description='', capacity=1, availability=1, latitude=32.4487, longitude=-99.7331, host_id=5)

    spot_11 = Spot(image_url='https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Stock-Suburban-Home.jpg', title="Bunk-beds galore", address='8013C Boston Ave',
                   city='San Angelo', state='TX', zipcode=76901, description='We have a room with two sets of bunk-beds that is great for kids', capacity=7, availability=7, latitude=31.4638, longitude=-100.4370, host_id=6)

    spot_12 = Spot(image_url='https://image.cnbcfm.com/api/v1/image/104559560-Jackson_Mississippi.jpg', title="Basement level, fully functional", address='9616 E. Kingston Dr',
                   city='Wichita Falls', state='TX', zipcode=76301, description='Our home has a basement that is fully functional with a kitchen, bathroom, and two bedrooms.', capacity=8, availability=8, latitude=33.9137, longitude=-98.4934, host_id=7)

    spot_13 = Spot(image_url='https://charlotteaxios-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/07/July-open-houses-header-1.jpg', title="Safe Shelter", address='513 North Cambridge Ave',
                   city='Waco', state='TX', zipcode=76633, description='Stay as long as you need!', capacity=5, availability=3, latitude=31.5493, longitude=-97.1467, host_id=8)

    spot_14 = Spot(image_url='https://media-cdn.wehco.com/img/photos/2019/09/06/190905foresthillhistorichomestour05b8900336972.jpg', title="One night only", address='63 Armstrong Court',
                   city='Tyler', state='TX', zipcode=75701, description='We can host up to 2 guests for a max of one night at a time.', capacity=2, availability=2, latitude=32.3513, longitude=-95.3011, host_id=9)

    spot_15 = Spot(image_url='https://empire-s3-production.bobvila.com/slides/8507/original/putty_house.jpg', title="Safe neighborhood", address='23 Bay Meadows Dr',
                   city='Paris', state='TX', zipcode=75460, description='Your average home in a safe neighborhood. Please dont hesitate to book with us!', capacity=3, availability=3, latitude=33.6609, longitude=-95.5555, host_id=5)

    spot_16 = Spot(image_url='https://cdn.houseplansservices.com/product/jbo1rrf0j7s4ebo15acfa89ar/w800x533.jpg', title="Room for your dogs!", address='79 S. Cedar Street',
                   city='Guthrie', state='TX', zipcode=79236, description='We have a fenced in backyard so please bring your furry friends too!', capacity=3, availability=3, latitude=33.6207, longitude=-100.3228, host_id=6)

    spot_17 = Spot(image_url='https://photos.zillowstatic.com/fp/ef2b1d11bc5c7b1a33c59bebd4bf338b-p_e.jpg', title="Farm House", address='67 Shore Road',
                   city='Fresno', state='CA', zipcode=93650, description='We have a farm house with a private guest house. Perfect for an entire family in need.', capacity=7, availability=5, latitude=36.7378, longitude=-119.7871, host_id=7)

    spot_18 = Spot(image_url='https://www.theday.com/storyimage/NL/20201105/NWS01/201109888/AR/0/AR-201109888.jpg', title="Garage Apartment", address='370 Arrowhead Street',
                   city='Portland', state='OR', zipcode=97035, description='Stay dry in our apartment attached to our garage. You will have plenty of privacy', capacity=10, availability=10, latitude=45.5051, longitude=-122.6750, host_id=8)

    spot_19 = Spot(image_url='https://images.adsttc.com/media/images/5c2e/ec1d/08a5/e549/4e00/0045/large_jpg/Unjung-dong_brick_house_(1).jpg', title="Room for one", address='55 Evergreen Rd',
                   city='Philadelphia', state='PA', zipcode=19019, description='We have a spare bedroom that can easily accommodate someone looking for shelter', capacity=1, availability=1, latitude=39.9526, longitude=-75.1652, host_id=9)

    spot_20 = Spot(image_url='https://media-cdn.wehco.com/img/photos/2014/09/21/LM-Monaco-home-13_t1070_ha8041694561a87fcc20f356e91cfcd09434b5e1b.jpg', title="Warm house, clean water, & internet", address='108 Rosewood Street',
                   city='Jefferson City', state='MO', zipcode=65101, description='Whatever the reason, please dont hesitate to book a stay with us.', capacity=2, availability=1, latitude=38.5767, longitude=-92.1735, host_id=5)

    spot_21 = Spot(image_url='https://historicindianapolis.com/wp-content/uploads/2012/09/1531-Broadway-01.jpg', title="Well heated family home", address='91 Queen St',
                   city='Syracuse', state='NY', zipcode=13201, description='When the neighborhood loses electricity you can count on us for help.', capacity=4, availability=2, latitude=43.0481, longitude=-76.1474, host_id=6)

    spot_22 = Spot(image_url='https://i.pinimg.com/originals/ba/b0/f8/bab0f85e67ab72a2d95995cf434ef506.jpg', title="Family home on river bluff", address='7 South Clinton St',
                   city='Little Rock', state='AR', zipcode=72002, description='We would be more than happy to host anyone in need of food or a place to sleep.', capacity=8, availability=8, latitude=34.746, longitude=-92.2896, host_id=7)

    spot_23 = Spot(image_url='https://charlotteaxios-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/07/July-open-houses-header-1.jpg', title="Stay in the Shade", address='578 Colonial Ave',
                   city='Tucson', state='AZ', zipcode=85641, description='When you are find yourself in an emergency, let us help and book with us', capacity=5, availability=3, latitude=32.2226, longitude=-110.9747, host_id=8)

    spot_24 = Spot(image_url='https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Stock-Suburban-Home.jpg', title="Blizzard House", address='8341 Aspen Road',
                   city='Denver', state='CO', zipcode=80014, description='Our house never loses power in a blizzard. Book with us to stay warm!', capacity=3, availability=3, latitude=39.7392, longitude=-104.9903, host_id=9)

    spot_25 = Spot(image_url='https://static01.nyt.com/images/2019/06/25/realestate/25domestic-zeff/a1c1a1a36c9e4ff8adcb958c4276f28d-jumbo.jpg', title="A break from the cold", address='976 Garfield Lane',
                   city='Boise', state='ID', zipcode=83701, description='It can get cold in Boise. If you ever need to warm up, book with us!', capacity=1, availability=1, latitude=43.6150, longitude=-116.2023, host_id=5)

    db.session.add(spot_1)
    db.session.add(spot_2)
    db.session.add(spot_3)
    db.session.add(spot_5)
    db.session.add(spot_6)
    db.session.add(spot_7)
    db.session.add(spot_8)
    db.session.add(spot_9)
    db.session.add(spot_10)
    db.session.add(spot_11)
    db.session.add(spot_12)
    db.session.add(spot_13)
    db.session.add(spot_14)
    db.session.add(spot_15)
    db.session.add(spot_16)
    db.session.add(spot_17)
    db.session.add(spot_18)
    db.session.add(spot_19)
    db.session.add(spot_20)
    db.session.add(spot_21)
    db.session.add(spot_22)
    db.session.add(spot_23)
    db.session.add(spot_24)
    db.session.add(spot_25)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_spots():
    Spot.query.delete()
    db.session.commit()
