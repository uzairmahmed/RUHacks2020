from flask import Flask, request, jsonify
from flask_cors import CORS
from places import mobileGetNearby
from firestore import firestore
app = Flask(__name__)
app.config["DEBUG"] = False

CORS(app)

@app.route('/mobile/get-nearby/', methods=['POST'])
def mobGetNearby():
    latitude = request.args.get('latitude')
    longitude = request.args.get('longitude')
    try:
        query = request.args.get('query')
        if query == "EMPTY":
            response = mobileGetNearby(latitude=latitude, longitude=longitude)
        else:
            response = mobileGetNearby(latitude=latitude, longitude=longitude, query=query)
    except:
        response = mobileGetNearby(latitude=latitude, longitude=longitude)
    return jsonify(response)

@app.route('/mobile/update-demand/', methods=['POST'])
def mobAdjustDemand():
    place_id = request.args.get('place_id')
    item = request.args.get('item')
    demand = request.args.get('demand')
    response = {}
    try:
        firestore.adjustItemDemand(place_id=place_id, item_name=item, demand=demand)
        response['status']='Success'
    except:
        response['status']='Error 404'
    return jsonify(response)
    

@app.route('/dashboard/get-products/', methods=['POST'])
def dashGetProducts():
    place_id = request.args.get('place_id')
    response = firestore.readAllItems(place_id)
    return jsonify(response)
    
    
@app.route('/dashboard/update-supply/', methods=['POST'])
def dashAdjustSupply():
    place_id = request.args.get('place_id')
    item = request.args.get('item')
    supply = request.args.get('supply')
    response = {}
    try:
        firestore.adjustItemSupply(place_id=place_id, item_name=item, supply=supply)
        response['status']='Success'
    except:
        response['status']='Error 404'
    return jsonify(response)

@app.route('/dashboard/create-store/', methods=['POST'])
def dashAddStore():
    place_id = request.args.get('place_id')
    response = {}
    try:
        firestore.addStore(place_id)
        response['status']='Success'
    except:
        response['status']='Error: Create Store Failed'
    return jsonify(response)

@app.route('/dashboard/create-item/', methods=['POST'])
def dashAddItem():
    place_id = request.args.get('place_id')
    item = request.args.get('item')
    response = {}
    try:
        firestore.addItem(place_id=place_id, item_name=item)
        response['status']='Success'
    except:
        response['status']='Error: Create Item Failed'
    return jsonify(response)

@app.route('/dashboard/delete-item/', methods=['POST'])
def dashDeleteItem():
    place_id = request.args.get('place_id')
    item = request.args.get('item')
    response = {}
    try:
        firestore.deleteItem(place_id=place_id, item_name=item)
        response['status']='Success'
    except:
        response['status']='Error 404'
    return jsonify(response)

@app.route('/dashboard/delete-store/', methods=['POST'])
def dashDeleteStore():
    place_id = request.args.get('place_id')
    response = {}
    try:
        firestore.deleteStore(place_id)
        response['status']='Success'
    except:
        response['status']='Error 404'
    return jsonify(response)

if __name__ == '__main__':
    app.run()