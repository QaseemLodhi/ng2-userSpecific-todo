import User from '../models/user';
import * as crypto from 'crypto';
import config from '../config';
import { createToken } from '../service/verify';

// Get all
export function index(req, res) {
    res.send('User api is working now');
}
// Get single
export function show(req, res) {

}
// Post/Create
export function create(req, res) {
    User.findOne({ email: req.body.email })
        .exec((err, userObj) => {
            if (err) {
                return res.json({ success: false, data: null, error: 'Contact support' });
            }
            else if (userObj == null) {
                let pwHash = crypto.createHmac('sha1', config.salt).update(req.body.password).digest('hex');
                let user = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: pwHash
                };
                User.create(user)
                    .then(user => {
                        return res.json({ success: true, data: 'User created', error: null });
                    })
                    .catch(err => {
                        console.error('err', err);
                        return res.json({ success: false, data: null, error: 'Contact support' });
                    });
            }
            else {
                return res.json({ success: false, data: 'User already exists', error: null });
            }
        });
}
// login
export function login(req, res) {
    console.log(req.body);
    User.findOne({ email: req.body.email })
        .exec((err, userObj) => {
            console.log("userObj1", userObj);
            if (err) {
                console.error('err', err);
                return res.json({ success: false, data: null, error: err });
            }
            else if (!userObj) {
                return res.json({ success: false, data: null, error: 'Email address not found' });
            }
            let hash = crypto.createHmac('sha1', config.salt).update(req.body.password).digest('hex');
            if (hash == userObj['password']) {
                console.log("userObj", userObj);
                let currentUser = {
                    id: userObj._id,
                    firstName: userObj['firstName'],
                    lastName: userObj['lastName'],
                    email: userObj['email'],
                }
                let token = createToken(currentUser);
                currentUser['token'] = token;
                return res.json({ success: true, data: currentUser, error: null });
            }
            else {
                return res.json({ success: false, data: null, error: 'Incorrect Password!' });
            }
        });
}
