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

 
def getNearbyStores(latitude, longitude, category, radius):
    # Appends coordinates into a location string
    location = str(latitude) + ',' + str(longitude)
    places_result =  gmaps.places_nearby(location=location, radius = radius, open_now=False,type = category)['results']
    pprint.pprint(places_result)
    return getNearbyStores

# Defaults radius to 1000 meters
def mobileGetNearby(latitude, longitude, query=None,category='store', radius=100):
    nearbyStores = getNearbyStores(latitude, longitude, category, radius)
    for store in nearbyStores:
    #if query is None or store['name'] == query:
        print('----------------------')
        print(store['name'])
        print(store['place_id'])

mobileGetNearby(43.892719, -79.263153, 'store', 500)