//OPtion 2
//Create its router object
//if yu appliction have complex funtionality other you can put this section in the same ps

const express = require('express');
const router = express.Router();

//paths in this command are relative to the path was configured for the obejct in app.js
//GET /about/
router.get('/', (req, res, next) =>{
  
    //simulates going into the DB and getting a list of tools
    let toolset = [
      {
        'name' : 'Node'
      },
      {
          'name' : 'Express'
      },
      {
        'name': 'Handlebars'
      }
    ];
    //pass view name and optionally some information in the JSON format
    res.render('about',{
      title: 'About Me',
      tools: toolset
    });
});

module.exports = router;