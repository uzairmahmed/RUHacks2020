from flask import Flask, request, jsonify


app = Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "skkkkiap bim bim bap yip yip yap"

app.run()