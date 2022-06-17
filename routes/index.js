var express = require('express');
var router = express.Router(); //object that handles the rediredtional of requests

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JS Framework' });
});

// router.get('/about', (req, res, next) =>{

//   //simulates going into the DB and getting a list of tools
//   let toolset = [
//     {
//       'name' : 'Node'
//     },
//     {
//         'name' : 'Express'
//     },
//     {
//       'name': 'Handlebars'
//     }
//   ];
//   //pass view name and optionally some information in the JSON format
//   res.render('about',{
//     title: 'About Me',
//     tools: toolset
//   });
// });

module.exports = router;
