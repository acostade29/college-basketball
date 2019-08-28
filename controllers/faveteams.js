var User = require('../models/user');
var mongoose = require('mongoose');

module.exports = {
    createTeam,
    createPlayer,
    deleteTeam

}

function createTeam(req, res) {
    User.findById(req.params.id, function(err, user) {
        user.faveteams.push(req.body);
        user.save(function(err) {
            res.redirect(`/users/${user._id}`);
        });
    });
}

function createPlayer(req, res) {
    User.findById(req.params.id, function(err, user) {
        user.faveplayers.push(req.body);
        user.save(function(err) {
            res.redirect(`/users/${user._id}`);
        });
    });
}

function deleteTeam(req, res) {
    User.findById(req.params.id, function(err, user) {
         user.faveteams.splice(req.params.teamid, 1);
         user.save(function(err) {
             res.redirect(`/users/${user._id}`);
         });
     });
}



// function deleteTeam (req, res) {
//     var temp_id = new mongoose.mongo.ObjectID(req.params.teamid)
//     User.findByIdAndDelete(temp_id, (error, data)=>{
//         if(error){
//             console.log("Could not delete");
//             throw error;
//         } else {
//             console.log(req.params.id);
//             console.log(req.params.teamid);
//             console.log("Deletion complete", data);
//             res.status(204);
//         }
//     });
// };

