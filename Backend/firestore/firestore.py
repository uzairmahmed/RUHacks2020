import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
# Use a service account
cred = credentials.Certificate('./keys/serviceAccount.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()

# CREATE

def addStore(place_id, store_name, streets):
    doc_ref = db.collection('stores').document(place_id)
    doc_ref.set({
    u'store': store_name,
    u'location': streets
    })

def addItem(place_id, item_name, supply):
    doc_ref = db.collection(u'stores').document(place_id).collection(u'items').document(item_name)
    doc_ref.set({
    u'supply': supply,
    u'demand': 0
    })

# UPDATE

def adjustItemSupply(place_id, item_name, supply):
    doc_ref = db.collection(u'stores').document(place_id).collection(u'items').document(item_name)
    doc = doc_ref.get()
    demand = doc.to_dict()['demand']
    
    doc_ref.update({
    u'supply': supply,
    u'demand': demand
    })

def adjustItemDemand(place_id, item_name, demand):
    doc_ref = db.collection(u'stores').document(place_id).collection(u'items').document(item_name)
    doc = doc_ref.get()
    supply = doc.to_dict()['supply']
    
    doc_ref.update({
    u'supply': supply,
    u'demand': demand
    })

# READ 

def readStore(place_id):
    doc_ref = db.collection(u'stores').document(place_id)
    doc = doc_ref.get()
    return doc.to_dict()
    
def readItem(place_id, item_name):
    doc_ref = db.collection(u'stores').document(place_id).collection(u'items').document(item_name)
    doc = doc_ref.get()
    return doc.to_dict()

# Fix to all
def readAllItems(place_id):
    output = []
    try:
        docs = db.collection(u'stores').document(place_id).collection(u'items').stream()
        for doc in docs:
            print(doc.id)
            print(doc.to_dict())
            output.append(
            {
                'name':doc.id,
                'supply':doc.to_dict()['supply'],
                'demand':doc.to_dict()['demand']
            }
        )
    except:
        print("Error 404")
    return output

# DELETE

def deleteStore(place_id):
    doc_ref = db.collection(u'stores').document(place_id)
    doc = doc_ref.get()
    doc_ref.delete()
    return doc.to_dict()
    
def deleteItem(place_id, item_name):
    doc_ref = db.collection(u'stores').document(place_id).collection(u'items').document(item_name)
    doc = doc_ref.get()
    doc_ref.delete()
    return doc.to_dict()
