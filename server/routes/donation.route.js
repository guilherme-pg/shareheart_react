const express = require('express');
const app = express();
const donationRoutes = express.Router();

let Donation = require('../model/Donation');

// api to add a donation
donationRoutes.route('/add').post((req, res) => {
    let donation = new Donation(req.body);
    donation.save()
        .then(donation => {
            res.status(200).json({'status': 'success','mssg': 'donation added successfully'}); 
        })
        .catch(err => {
            res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
        });
});

// api to get all donations
donationRoutes.route('/').get((req, res) => {
    Donation.find()
        .then(donations => {
            res.status(200).json({ 'status': 'success', 'donations': donations });
        })
        .catch(err => {
            res.status(400).send({ 'status': 'failure', 'message': 'Something went wrong' });
        });
});

// api to get donation by id
donationRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    Donation.findById(id)
        .then(donation => {
            res.status(200).json({'status': 'success', 'donation': donation});
        })
        .catch(err => {
            res.status(400).send({'status': 'failure', 'mssg': 'Something went wrong'});
        });
});

// api to update a donation by ID
donationRoutes.route('/update/:id').put((req, res) => {
    let id = req.params.id;
    Donation.findById(id)
        .then(donation => {
            donation.item = req.body.item;
            donation.hour = req.body.hour;
            donation.location = req.body.location;

            donation.save()
                    .then(donation => {
                        res.status(200).json({'status': 'success','mssg': 'Update complete'});;  
                    })
        })
        .catch(err => {
            res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
        });
});

// api for delete a donation
donationRoutes.route('/delete/:id').delete((req, res) => {
    let id = req.params.id;
    Donation.findOneAndDelete(id)
        .then(donation => {
            res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
        })
        .catch(err => {
            res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
        });
});
  
module.exports = donationRoutes;