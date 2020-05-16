import googlemaps
import pprint
import time
from keys.gmaps import key

# Define API key
API_KEY = key()

# Define client
gmaps = googlemaps.Client(key = API_KEY)

# REQUIRES: Latitude of location, Longitude of Location, Category for Point of Interest 
# EFFECTS: Returns a JSON format of related point of interests within the area

# Questions for later: What should my radius be? 
def getNearbyStores(latitude, longitude, category, radius=100):
    # Appends coordinates into a location string
    location = str(latitude) + ',' + str(longitude)
    places_result =  gmaps.places_nearby(location=location, radius = radius, open_now=False,type = 'store')
    pprint.pprint(places_result)
    return getNearbyStores
