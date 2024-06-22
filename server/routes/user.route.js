const express = require('express');
const app = express();
const userRoutes = express.Router();


let User = require('../model/User');



// api to add user
userRoutes.route('/add').post((req, res) => {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'status': 'success','mssg': 'user added successfully'});      
        })
        .catch(err => {
            res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});        
        });
});



// api to get all users
userRoutes.route('/').get((req, res) => {
    User.find()
        .then(users => {
            res.status(200).json({ 'status': 'success', 'users': users });
        })
        .catch(err => {
            res.status(400).send({ 'status': 'failure', 'message': 'Something went wrong' });
        });
});



// api to get user by id
userRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    User.findById(id)
        .then(user => {
            res.status(200).json({'status': 'success', 'user': user});
        })
        .catch(err => {
            res.status(400).send({'status': 'failure', 'mssg': 'Something went wrong'});
        });
});



// api to update user by ID
userRoutes.route('/update/:id').put((req, res) => {
    let id = req.params.id;
    User.findById(id)
        .then(user => {
            user.name = req.body.name;
            user.cpf = req.body.cpf;
            user.telephone = req.body.telephone;
            user.birthday = req.body.birthday;
            user.address = req.body.address;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save()
                .then(user => {
                    res.status(200).json({'status': 'success','mssg': 'Update completed succesfully'});
                })
        })
        .catch(err => {
            res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
        });
});



// api for delete a user
userRoutes.route('/delete/:id').delete((req, res) => {
    let id = req.params.id;
    User.findOneAndDelete(id)
        .then(user => {
            res.status(200).json({'status': 'success','mssg': 'User deleted successfully'});
        })
        .catch(err => {
            res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
        });
});



module.exports = userRoutes;
