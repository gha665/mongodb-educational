//insert one document in collection
db.enemies.insertOne({
    "name": "Blinky",
    "color": "Red"
});

db.enemies.insertOne({
    "_id": 10,
    "name": "Pinky",
    "color": "Pink",
    "status": "alive"
});

//insert multiple documents in collection
db.enemies.insertMany([{
        "name": "Blinky",
        "color": "Red"
    },
    {
        "name": "Clyde",
        "color": "Orange"
    }
]);

//find ALL documents in collection
db.enemies.find({});

//find a specific property in a document
db.enemies.find({
    "name": "Blinky"
});


db.enemies.insertMany([{
        name: "Popeye",
        age: 30
    },
    {
        name: "Mickey Mouse",
        age: 35
    },
    {
        name: "Batman",
        age: 24
    }
]);

//select all the users who are older than 32 years
db.enemies.find({"age": { $gt: 32 }})

//find ONLY the names of the enemies
db.enemies.find({}, {
    "name": 1,
    "_id": 0
})

