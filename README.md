# CareBnB

---

**CareBnB** is a clone of **[AirBnB](https://www.airbnb.com/)** but instead of serving guests who are traveling, CareBnB serves those in need of shelter. The project was inspired by the 2021 events in Northern Texas, where many Texans were left without power and water.

<h2>Try the site live: <a href=https://care-b-n-b.herokuapp.com//>Here</a> <b>|</b> Check out our <a href="https://github.com/QuintinHull/CareBnB">documentation</a></h2>

## How to run the site locally

- Clone the repo
- In the route directory, use the command ```pipenv install``` all dependencies
- In the react-app directory, use the command ```npm install``` to install all dependencies
- Make a copy of the .env.example file and edit to match local db configuration
- Create a file in /CareBnB/react-app/src/components/GoogleMapsComponent called apikey.js with one export const named "googleApiKey"
- Create a file in /CareBnB/react-app/src/aws called keys.js with one export const named "SECRET_ACCESS_KEY"
- Create the database and user in psql
  * In a pipenv shell, run all migrations with ```flask db upgrade```
  * Seed all data with ```flask db seed all```
- In the route directory, use the command ```flask run``` to run the backend server
- In the react-app directory, use the comman ```npm start``` to run the front end

## Technologies used in CareBnB

**JavaScript**

**Python**

**SQLAlchemy**

**Flask** 

**React**

**Redux**

**React Google Maps**

**Amazon Web Services**

**React Bootstrap**

**Heroku** 

## Features that we implemented


* Users can **log in** or **sign up** to access some functionality of the site.
* A logged in user has the ability to **host a spot** that displays how many guests they can accept.
* A logged in user can **book a spot**, and selecte how many guests they are booking for. 
* The **search** bar can locate using a search term and specify how many available spots.  
* A logged in user can utilize **google maps** to identify a spot close to them.

## Challenges throughout the development process
We faced a few challenges while we were building CareBnB:

1. Implementing google maps to allow users to search spots by their coordinates

2. Implementing AWS to allow users to upload an image as a file instead of a image url

## Developers

<img alt="Developer" align="right" src="https://user-images.githubusercontent.com/70561117/103400187-079d6600-4af9-11eb-8d20-00c8f88e3936.png" width="20%" />
<table style="width:100%">
  <tr>
    <th><a href="https://github.com/mustafaomousa" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/70066469?s=400&v=4" height="auto" width="100"></a></th>
    <th><a href="https://https://github.com/lanejohns" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/67983315?s=400&u=b3585036a4be3bd5d5b6fa6e95fab5b180bfa4af&v=4" height="auto" width="100"></a></th>
    <th><a href="https://github.com/QuintinHull" rel="nofollow"><img src="https://avatars2.githubusercontent.com/u/70037265?s=460&u=c4f09b24fc3acea13c4c81e5f0eef835bf54780b&v=4" height="auto" width="100"></a></th>
    <th><a href="https://github.com/Jummies" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/74935506?s=400&u=c948c56b7e17b692ef7eb87d04ca46bfbad62c92&v=4" height="auto" width="100"></a></th>
  </tr>
  <tr>
    <td>Mustafa Mousa</td>
    <td>Lane Johns</td>
    <td>Quintin Hull</td>
    <td>Jung Park</td>
  </tr>
  <tr>
    <td><a href="https://github.com/mustafaomousa">@mustafaomousa</a></td>
    <td><a href="https://https://github.com/lanejohns">@lanejohns</a></td>
    <td><a href="https://github.com/QuintinHull">@QuintinHull</a></td>
    <td><a href="https://github.com/Jummies">@Jummies</a></td>
  </tr>
</table>

