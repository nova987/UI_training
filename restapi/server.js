const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const { ROUTE_CONTSTANTS } = require('./helpers/route_constants');
//route, callback function.
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post(ROUTE_CONTSTANTS.POST_REGISTER,function(req,res){
    console.log(req.body);
    res.send("succesfully regsitered")
});

app.get(ROUTE_CONTSTANTS.DEFAULT, function (req, res) {

    res.send("<h1>Welcome to Pega");

});



app.get(ROUTE_CONTSTANTS.GET_LOGIN, function (req, res) {

    res.sendFile(__dirname + '/pages/login.html')

});

app.post(ROUTE_CONTSTANTS.POST_LOGIN,function(req,res){
    console.log(req.body);
    res.send("succesfully login")
});



app.get(ROUTE_CONTSTANTS.GET_REGISTER, function (req, res) {

    res.sendFile(__dirname + '/pages/register.html')

});



app.get(ROUTE_CONTSTANTS.GET_PRODUCTS, function (req, res) {

    const productData = [
        {
            "_id": "5f5861e23b4714ba048f7ded",
            "index": 0,
            "guid": "b3ed2030-cce6-48b2-8048-b2b61ec61cd0",
            "isActive": false,
            "balance": "$2,233.90",
            "picture": "http://placehold.it/32x32",
            "age": 32,
            "eyeColor": "green",
            "name": "Reed Kent",
            "gender": "male",
            "company": "BIFLEX",
            "email": "reedkent@biflex.com",
            "phone": "+1 (917) 470-3192",
            "address": "692 Baycliff Terrace, Deputy, Mississippi, 8753",
            "about": "Labore eu ipsum in velit mollit eu esse dolore fugiat laboris aliqua fugiat reprehenderit excepteur. Cillum reprehenderit culpa mollit ut. Incididunt excepteur reprehenderit in ea id nisi quis ea incididunt dolore est cupidatat id ipsum. Excepteur adipisicing do id ea enim officia. Sit dolore pariatur anim do voluptate ex veniam sit nulla duis non nulla. Occaecat officia pariatur do voluptate officia aute.\r\n",
            "registered": "2014-03-21T03:15:32 -06:-30",
            "latitude": 25.044294,
            "longitude": -5.955929,
            "tags": [
                "eiusmod",
                "proident",
                "adipisicing",
                "ullamco",
                "veniam",
                "deserunt",
                "velit"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Singleton English"
                },
                {
                    "id": 1,
                    "name": "Underwood Mckee"
                },
                {
                    "id": 2,
                    "name": "Goff Chang"
                }
            ],
            "greeting": "Hello, Reed Kent! You have 5 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "5f5861e2d821824da5476db1",
            "index": 1,
            "guid": "cee6a8eb-6a2e-4399-91f4-9e2e1a6c3d03",
            "isActive": false,
            "balance": "$2,109.81",
            "picture": "http://placehold.it/32x32",
            "age": 31,
            "eyeColor": "brown",
            "name": "Roberta Garcia",
            "gender": "female",
            "company": "EVENTAGE",
            "email": "robertagarcia@eventage.com",
            "phone": "+1 (818) 574-3888",
            "address": "860 Aster Court, Lutsen, Hawaii, 7756",
            "about": "Consequat pariatur deserunt anim nisi dolore et do commodo ea aliqua. Adipisicing mollit cillum in anim ipsum sint voluptate id voluptate reprehenderit dolore sit veniam. Qui excepteur proident consequat eiusmod consequat eu voluptate in cillum ipsum. Cillum id sit sunt laboris nulla nulla adipisicing elit. Ipsum cupidatat sint reprehenderit commodo esse officia eiusmod proident.\r\n",
            "registered": "2015-05-20T06:03:31 -06:-30",
            "latitude": 75.34218,
            "longitude": 127.066413,
            "tags": [
                "occaecat",
                "qui",
                "officia",
                "irure",
                "ad",
                "consequat",
                "cupidatat"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Brown Finch"
                },
                {
                    "id": 1,
                    "name": "Pearson Park"
                },
                {
                    "id": 2,
                    "name": "Lily Powell"
                }
            ],
            "greeting": "Hello, Roberta Garcia! You have 6 unread messages.",
            "favoriteFruit": "strawberry"
        },
        {
            "_id": "5f5861e2dc8a566393f23b59",
            "index": 2,
            "guid": "89b3691d-5acd-4b3e-b18a-f7239cadc2cc",
            "isActive": false,
            "balance": "$3,361.30",
            "picture": "http://placehold.it/32x32",
            "age": 30,
            "eyeColor": "blue",
            "name": "Finch Beasley",
            "gender": "male",
            "company": "KONGLE",
            "email": "finchbeasley@kongle.com",
            "phone": "+1 (913) 572-3529",
            "address": "562 Bartlett Street, Munjor, Nebraska, 1687",
            "about": "Aliqua in sint aute occaecat amet irure sint reprehenderit nisi Lorem do veniam. Nulla labore enim sint commodo veniam non tempor veniam non. Et pariatur elit laborum amet in tempor. Officia laboris aute ex consectetur incididunt exercitation nostrud labore culpa in velit enim cupidatat dolor. Dolor velit ipsum ut laborum aliqua do ex.\r\n",
            "registered": "2018-04-09T11:33:44 -06:-30",
            "latitude": 52.596725,
            "longitude": 29.659909,
            "tags": [
                "Lorem",
                "id",
                "laboris",
                "mollit",
                "eiusmod",
                "veniam",
                "in"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Baxter Baldwin"
                },
                {
                    "id": 1,
                    "name": "Blackwell Colon"
                },
                {
                    "id": 2,
                    "name": "Terry Dickson"
                }
            ],
            "greeting": "Hello, Finch Beasley! You have 2 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "5f5861e27fbd4e42e9c1d18e",
            "index": 3,
            "guid": "5dd3233b-95d9-4436-a4a9-ca60f2491f24",
            "isActive": true,
            "balance": "$1,262.50",
            "picture": "http://placehold.it/32x32",
            "age": 30,
            "eyeColor": "green",
            "name": "Hobbs Rutledge",
            "gender": "male",
            "company": "KEGULAR",
            "email": "hobbsrutledge@kegular.com",
            "phone": "+1 (856) 525-3315",
            "address": "777 Harrison Place, Tooleville, Arizona, 6372",
            "about": "Consectetur cupidatat ipsum duis magna veniam mollit excepteur duis eu aute ad sint proident consequat. Amet dolore exercitation ad non ea commodo voluptate. Ullamco ea minim minim et mollit ut duis ad velit Lorem non irure officia dolore.\r\n",
            "registered": "2016-02-09T09:52:23 -06:-30",
            "latitude": -25.111801,
            "longitude": 80.674826,
            "tags": [
                "id",
                "duis",
                "enim",
                "aliqua",
                "proident",
                "excepteur",
                "culpa"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Gale Pate"
                },
                {
                    "id": 1,
                    "name": "Colleen Bullock"
                },
                {
                    "id": 2,
                    "name": "Sargent Houston"
                }
            ],
            "greeting": "Hello, Hobbs Rutledge! You have 7 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "5f5861e2222f40aba0c3afba",
            "index": 4,
            "guid": "9ec72cec-f0f4-4b24-a72a-dd2c285a0328",
            "isActive": true,
            "balance": "$1,491.19",
            "picture": "http://placehold.it/32x32",
            "age": 37,
            "eyeColor": "brown",
            "name": "Kathie Webster",
            "gender": "female",
            "company": "STOCKPOST",
            "email": "kathiewebster@stockpost.com",
            "phone": "+1 (910) 597-3500",
            "address": "565 Elliott Walk, Ola, Marshall Islands, 3185",
            "about": "Adipisicing sunt ea cupidatat sit eu tempor laboris ullamco duis laborum irure dolor fugiat minim. Nulla magna est in cillum reprehenderit velit magna magna laboris culpa occaecat reprehenderit laborum ipsum. Enim nostrud ut velit velit aliqua do sint consectetur consectetur. Nostrud Lorem cillum quis commodo aliquip in occaecat adipisicing ex cupidatat sunt labore id.\r\n",
            "registered": "2016-11-10T11:30:18 -06:-30",
            "latitude": -62.408756,
            "longitude": -15.329265,
            "tags": [
                "proident",
                "fugiat",
                "aliquip",
                "laboris",
                "laboris",
                "dolore",
                "duis"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Greer Rios"
                },
                {
                    "id": 1,
                    "name": "Mandy Guerrero"
                },
                {
                    "id": 2,
                    "name": "Magdalena Norman"
                }
            ],
            "greeting": "Hello, Kathie Webster! You have 4 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "5f5861e2d4eccc742f174294",
            "index": 5,
            "guid": "bad2db10-4b59-4fd9-a629-411456ea4bc0",
            "isActive": false,
            "balance": "$2,485.43",
            "picture": "http://placehold.it/32x32",
            "age": 21,
            "eyeColor": "brown",
            "name": "Gomez England",
            "gender": "male",
            "company": "NAVIR",
            "email": "gomezengland@navir.com",
            "phone": "+1 (987) 521-3431",
            "address": "712 Duryea Court, Glidden, Rhode Island, 7001",
            "about": "Sint id irure id aliquip consectetur deserunt. Duis ad deserunt tempor id ad sunt commodo. Laboris et aute et tempor duis in labore. Dolore Lorem labore eiusmod qui et commodo dolore voluptate ex pariatur officia irure ut fugiat.\r\n",
            "registered": "2016-01-29T07:22:55 -06:-30",
            "latitude": 24.659427,
            "longitude": -119.736997,
            "tags": [
                "et",
                "dolor",
                "nisi",
                "exercitation",
                "consectetur",
                "laboris",
                "magna"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Robles Kim"
                },
                {
                    "id": 1,
                    "name": "Juarez Guy"
                },
                {
                    "id": 2,
                    "name": "Jannie Banks"
                }
            ],
            "greeting": "Hello, Gomez England! You have 1 unread messages.",
            "favoriteFruit": "strawberry"
        },
        {
            "_id": "5f5861e21c3c26fc154d4719",
            "index": 6,
            "guid": "c8951b00-83f7-4c97-97f6-2e620e5772ca",
            "isActive": true,
            "balance": "$2,277.04",
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "eyeColor": "brown",
            "name": "Russo Waller",
            "gender": "male",
            "company": "ZENTHALL",
            "email": "russowaller@zenthall.com",
            "phone": "+1 (998) 478-2980",
            "address": "105 Morton Street, Golconda, Kentucky, 9582",
            "about": "Quis et enim magna laboris mollit. Anim do aliqua irure amet deserunt aute quis laboris ipsum et cupidatat incididunt anim. Reprehenderit aliquip aute quis non est magna ex veniam consectetur minim.\r\n",
            "registered": "2019-06-03T07:46:37 -06:-30",
            "latitude": -37.280386,
            "longitude": -8.389392,
            "tags": [
                "labore",
                "do",
                "eu",
                "eu",
                "enim",
                "pariatur",
                "sit"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Janine Barry"
                },
                {
                    "id": 1,
                    "name": "Kaitlin Talley"
                },
                {
                    "id": 2,
                    "name": "Tamara Keller"
                }
            ],
            "greeting": "Hello, Russo Waller! You have 7 unread messages.",
            "favoriteFruit": "strawberry"
        }
    ]
    res.json(productData);

});

app.get(ROUTE_CONTSTANTS.GET_FILE, function (req, res) {

    res.sendFile(__dirname + "/files/demo.pdf");
});


app.listen(3000);