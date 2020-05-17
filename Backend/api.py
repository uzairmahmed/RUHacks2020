from flask import Flask, request, jsonify
from flask_cors import CORS
from places import mobileGetNearby
from firestore import firestore
app = Flask(__name__)
app.config["DEBUG"] = True

CORS(app)

@app.route('/mobile/get-nearby/', methods=['GET'])
def mobGetNearby():
    latitude = request.args.get('latitude')
    longitude = request.args.get('longitude')
    try:
        query = request.args.get('query')
        response = mobileGetNearby(latitude=latitude, longitude=longitude, query=query)
    except:
        response = mobileGetNearby(latitude=latitude, longitude=longitude)
    return jsonify(response)

@app.route('/mobile/increment-demand/', methods=['GET'])
def mobIncrementDemand():
    place_id = request.args.get('place_id')
    item = request.args.get('item')
    response = {}
    try:
        firestore.adjustItem(place_id=place_id, item_name=item, delta_demand=1, delta_supply=0)
        response['status']='Success'
    except:
        response['status']='Error 404'
    return jsonify(response)
    

@app.route('/dashboard/get-products/', methods=['GET'])
def dashGetProducts():
    place_id = request.args.get('place_id')
    response = firestore.readAllItems(place_id)
    return jsonify(response)
    
@app.route('/dashboard/increment-supply/', methods=['GET'])
def dashIncrementSupply():
    place_id = request.args.get('place_id')
    item = request.args.get('item')
    response = {}
    try:
        firestore.adjustItem(place_id=place_id, item_name=item, delta_demand=0, delta_supply=1)
        response['status']='Success'
    except:
        response['status']='Error 404'
    return jsonify(response)

app.run()