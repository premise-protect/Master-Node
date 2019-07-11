import { Responder } from 'cote'

const authService = new Responder({name: 'Authentication Service'});

authService.on('authenticate', (req, cb) => {
    cb(null, {firstName: 'Ryan', lastName: 'Griffin'})
});