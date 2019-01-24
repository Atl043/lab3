
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.userName;
  if (nameToShow == null){
    // if(!req.params.userName) // if no value then do below
    nameToShow = "World"
  }
  console.log("name is " + nameToShow);
  res.render('index', {
  	'name': nameToShow,
  });
};
