# Design Documentation
Varghese Rony George
## STORAGE
The database was implemented using Firebase. 

### STORE
Each store document is stored in a collection named stores. The key for each store document is their Place ID given by Google Places API. The document structure is as follows:

>{
>    name:        Name of Store
>    vicinity:    Address of Store
>}

Each store will then contain a collection named items, where the items are stored.


### ITEM
Each item is contaiend in a collection named items that each store has. These items use their item name as the key. The document structure is as follows:  

>{
>    supply:        How much is in stock
>    demand:        How many people on the application have requested it
>}

Overall, the path to each item would be **stores > STORE_ID > items > NAME_OF_ITEM**

## API
The API interacts with both customers in the mobile application, as well as suppliers on their store dashboard. This was done using Flask API, and was hosted on Google Cloud Platform. Here is a list of the API calls

### Mobile: Get Nearby
*backend-url/mobile/get-nearby/*

Mobile users would use their location and get all the stores near them with their list of items.

Sample request:

>{
>    longitude:       Coordinate of User
>    latitude:        Coordinate of User
>    query:           Optional Query for Specific Store
>}

Sample response:

>{
>    stores: List of Stores    
>    [
>        {
>           name:       Name of Store
>           vicinity:   Street Address of Store
>           place_id:   Google Places Key, also used in our database as a key for the store
>           longitude:  Coordinate of Store           
>           latitude:   Coordinate of Store
>           items:      List of Items
>           [ 
>                {
>                    name: Name of Item
>                    supply: Stock of Item
>                    demand: Requests for Item
>                }
>           ]
>        }
>    ]
>}

### Mobile: Update Demand
*backend-url/mobile/update-demand/*

Mobile users would request the item and increment the demand to notify the store.

Sample request:

>{
>    place_id:    Store Key
>    item:        Item to increment Demand
>}

Sample response:

>{
>    Status: Either Success or Error    
>}

### Mobile: Get Products
*backend-url/mobile/get-products/*

Mobile users would request a list of all the products from the requested store.

Sample request:

>{
>    place_id:       Store to check items
>}

Sample response:

>{
>     items:      List of Items
>     [ 
>          {
>              name: Name of Item
>              supply: Stock of Item
>              demand: Requests for Item
>          }
>     ]
>}

### Dashboard: Update Supply
*backend-url/dashboard/update-supply/*

Dashboard users would request the item and increment the supply to notify the users.

Sample request:

>{
>    place_id:    Store Key
>    item:        Item to increment Supply
>}

Sample response:

>{
>    Status: Either Success or Error    
>}

### Dashboard: Create Store
*backend-url/dashboard/create-store/*

New Stores can be added to the database through the dashboard.

Sample request:

>{
>    place_id:    Store Key
>}

Sample response:

>{
>    Status: Either Success or Error    
>}

### Dashboard: Create Item
*backend-url/dashboard/create-item/*

Dashboard users would add items to the inventory list.

Sample request:

>{
>    place_id:    Store Key
>    item:        Item to Add
>}

Sample response:

>{
>    Status: Either Success or Error    
>}

### Dashboard: Delete Store
*backend-url/dashboard/delete-store/*

Dashboard users could delete their store from the database.

Sample request:

>{
>    place_id:    Store Key
>}

Sample response:

>{
>    Status: Either Success or Error    
>}

### Dashboard: Delete Item
*backend-url/dashboard/delete-item/*

Dashboard users could delete an item from their inventory.

Sample request:

>{
>    place_id:    Store Key
>    item:        Item to increment Supply
>}

Sample response:

>{
>    Status: Either Success or Error    
>}

Programmer Notes: I had fun trying Places API for the first time. Given that this was a hackathon project with time constraints, I didn't spend as much time on exceptions as I normally would. I would try to focus on fixing bugs such as the possibility of a supply being negative, etc.