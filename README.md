# Vehicle Tracking  
Hosting @ sakethk.ml

Initial motivation : Tomtom's hackathon on TechGig

Used Tomtom's SDK for web. It's simple. They even have tutorials on their website.

The co-ordinates are sent at /sendata via a POST request. Wrote a Firebase cloud function that parses the request and adds the data to
Firebase's realtime database. Used some simple javascript to retrieve the co-ordinates from the database and update the marker on the map.

# To-Do 
Remove previous markers
Handle exceptions
