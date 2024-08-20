const UserModel = require('../models/userModel');
require('../dto/user-dto')
const {db} = require('../models/db');
const { error } = require('pg-monitor');
module.exports = {
  getUsers: (req, res) => {
  
    UserModel.getAllUsers()
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
  
  },

  createUser: (req, res) => {
    /*
    const { nom, age } = req.body;
    UserModel.createUser(nom, age)
      .then(() => res.status(200).json({ message: "User added successfully!" }))
      .catch(error => res.status(500).json(error));
      */
    //console.log(req.body);
    UserDTO = req.body;
    //console.log(UserDTO.firstname);

    UserModel.getAllUsers()
      .then(data => {
        
        data.forEach(element => {

          if(element['pseudo'] === UserDTO['pseudo']){
            console.log(element);
            console.log(element['pseudo']);
            //res.send({message: 'pseudo '+ UserDTO['pseudo']+' existe déjà en base'});
            res.status(400).json({message: "pseudo existe déjà en base"});
            throw new Error("Bad Request");
            
            // break;
          
          }
        })
          
        })
      .catch(
        e => res.status(500).json(e)
      );    
/*
    UserModel.createUser(UserDTO).then( () =>  res
    .status(200).json({message: "User added successfully!"}))
    .catch(e => res.status(500).json(e))
*/         

  },
  updateUser: (req, res) => {
    const { nom, age } = req.body;
    UserModel.updateUser(nom, age)
      .then(() => res.status(200).json({ message: "User updated successfully!" }))
      .catch(error => res.status(500).json(error));
  },
  deleteUser: (req, res) => {
    const { id } = req.params;
    UserModel.deleteUser(id)
      .then(() => res.status(200).json({ message: "User deleted successfully!" }))
      .catch(error => res.status(500).json(error));
  }
};
