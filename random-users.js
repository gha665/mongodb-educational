//const randomUsers = 

db.randomUsers.insertMany([{
        name: "Sue",
        age: 19,
        phone: {
            personal: "555-123-123",
            work: "555-456-456",
            ext: "2342"
        },
        privileges: "user",
        favorites: {
            artist: "Picasso",
            food: "pizza"
        },
        finished: [17, 3],
        badges: ["blue", "black"],
        points: [{
                points: 85,
                bonus: 20
            },
            {
                points: 85,
                bonus: 10
            }
        ]
    },
    {
        name: "Bob",
        age: 42,
        phone: {
            personal: "555-123-123",
            work: "555-456-456",
            ext: "7673"
        },
        privileges: "admin",
        favorites: {
            artist: "Miro",
            food: "meringue"
        },
        finished: [11, 25],
        badges: ["green"],
        points: [{
                points: 85,
                bonus: 20
            },
            {
                points: 64,
                bonus: 12
            }
        ]
    },
    {
        name: "Willy",
        age: 22,
        phone: {
            personal: "555-123-123",
            work: "555-456-456",
            ext: "8263"
        },
        privileges: "user",
        favorites: {
            artist: "Cassatt",
            food: "cake"
        },
        finished: [6],
        badges: ["blue", "Picasso"],
        points: [{
                points: 81,
                bonus: 8
            },
            {
                points: 55,
                bonus: 20
            }
        ]
    },
    {
        name: "John",
        age: 34,
        phone: {
            personal: "555-123-123",
            work: "555-456-456",
            ext: "2143"
        },
        privileges: "admin",
        favorites: {
            artist: "Chagall",
            food: "chocolate"
        },
        finished: [5, 11],
        badges: ["Picasso", "black"],
        points: [{
                points: 53,
                bonus: 15
            },
            {
                points: 51,
                bonus: 15
            }
        ]
    },
    {
        name: "Steve",
        age: 23,
        phone: {
            personal: "555-123-123",
            work: "555-456-456",
            ext: "8253"
        },
        privileges: "user",
        favorites: {
            artist: "Noguchi",
            food: "nougat"
        },
        finished: [14, 6],
        badges: ["orange"],
        points: [{
            points: 71,
            bonus: 20
        }]
    },
    {
        name: "Martin",
        age: 43,
        phone: {
            personal: "555-123-123",
            work: "555-456-456",
            ext: "5623"
        },
        privileges: "user",
        favorites: {
            food: "pizza",
            artist: "Picasso"
        },
        finished: [18, 12],
        badges: ["black", "blue"],
        points: [{
                points: 78,
                bonus: 8
            },
            {
                points: 57,
                bonus: 7
            }
        ]
    }
]);

//List all the users
db.randomUsers.find()

//Find the user with whose name is Steve
db.randomUsers.find( {"name": { $eq: "Steve" }}, {"name": 1, _id: 0} )

//Find all users whose age is greater than 30
db.randomUsers.find( {"age": { $gt: 30 }}, {"name": 1, _id: 0} )

//Find the user whose extension is 2143
db.randomUsers.find( {"phone.ext": { $eq: "2143" }}, {"name": 1, _id: 0} )


//update the user "Martin" with his new extension number
db.randomUsers.updateOne( { "name": "Martin" }, { $set: { "phone.ext": 1234}} )

//update the age of Sue to 20
db.randomUsers.updateOne( { "name": "Sue" }, { $set: { "age": 20}} )

//update all employees older than 30 so that their favourite writer is Cervantes
db.randomUsers.updateMany( {"age": { $gte: 30 }}, { $set: { "favorites.writer": "Cervantes" }} )


//replace user "Martin" for new user "Susan"
let susan = { 
    "name" : "Susan",
    "age" : 25,
    "phone" : { "personal" : "555-223-223", "work" : "555-421-426", "ext" : 4240 },
    "privileges" : "user",
  };

  db.randomUsers.replaceOne( { "name": "Martin" }, susan )


//delete ONE document
db.randomUsers.deleteOne( { "_id": ObjectId("583ea82c58613b64d5df8405") })

//delete ALL documents
db.randomUsers.deleteMany({})

//Removes the documents that match the filter criteria
db.randomUsers.deleteMany( { "age": { $gte: 30 }} )


//PRACTICE
//Find all users that are over 30.
db.randomUsers.find( {"age": { $gt: 30 }}, {"name": 1, _id: 0} )

//Find all users that are less than or equal to 30.
db.randomUsers.find( {"age": { $lte: 30 }}, {"name": 1, _id: 0} )

//Find all thl users whose favorite food is pizza.
db.randomUsers.find( {"favorites.food": { $eq: "pizza" }}, {"name": 1, _id: 0} )

//Change Willy’s personal phone number to “93-123-45-67”.
db.randomUsers.updateOne( {"name": "Willy"}, {$set: {"phone.personal": 93-123-45-67}} )

//Change Bob’s privilege to normal user.
db.randomUsers.updateOne( {"name": "Bob"}, {$set: {"privileges": "user"}} )

//Find all users whose favorite artist is equal to Picasso.
db.randomUsers.find( {"favorites.artist": "Picasso"}, {"name": 1, _id: 0} )

//Delete the user John.
db.randomUsers.deleteOne( { "_id": ObjectId("5e373fe9f7112f150ff3c474") })

//(EXTRA) Add a bonus of 15 to all those who have a bonus less than 10.
db.randomUsers.updateMany( {"points.bonus": {$lte: 10} }, {$set: {"points.bonus": 15} } )