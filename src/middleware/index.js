const User = require("../models/User");

const middlewareObj = {};

middlewareObj.checkDoctorOwnership = function(req,res,next)
{
   if(req.isAuthenticated() && (req.user.isDoctor == true) )
   {
      res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
     next();
   }
   else
   {
    //   req.flash("error","You don't have permission to do that");
      res.redirect("/");
      console.log("you dont have permission to do that");
      console.log(err);

   }
}

middlewareObj.checkDoctorOwnership = function(req,res,next)
{
   if(req.isAuthenticated() && (req.user.isDoctor == false) )
   {
      res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
     next();
   }
   else
   {
    //   req.flash("error","You don't have permission to do that");
      res.redirect("/");
      console.log("you dont have permission to do that");
      console.log(err);

   }
}


middlewareObj.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated())
    {
       res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
         return next();
    }
    // req.flash("error","You need to login");
  console.log("you are not logged in");
    console.log(err);
    res.redirect("/login");

}

module.exports = middlewareObj;



