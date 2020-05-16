from flask import Flask, request, jsonify
from flask_cors import CORS
from places import mobileGetNearby

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


app.run()