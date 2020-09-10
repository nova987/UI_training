var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data=[{
    name:"navya",
    age:21,
    salary:1234
  },
  {
    name:"navy",
    age:1,
    salary:134
  }

]
  res.render('index', 
  { 
    title: 'Express' ,
    myName:"navya",
  users: data 
});
});

module.exports = router;
