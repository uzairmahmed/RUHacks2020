import googlemaps
import time
from keys.gmaps import key
from firestore.firestore import readAllItems 
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
    return places_result

# Defaults radius to 1000 meters
def mobileGetNearby(latitude, longitude, query=None,category='store', radius=10000):
    nearbyStores = getNearbyStores(latitude, longitude, category, radius)
    output = {'stores':[]}
    for store in nearbyStores:
        if query is None or store['name'] == query:
            items = readAllItems(store['place_id'])
            if len(items) > 0:
                output['stores'].append(
                {
                    'name':store['name'],
                    'place_id':store['place_id'],
                    'vicinity':store['vicinity'],
                    'items':items,
                    'longitude':store['geometry']['location']['lng'],
                    'latitude':store['geometry']['location']['lat']
                }
        )
    return output