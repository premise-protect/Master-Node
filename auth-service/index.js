const cote = require('cote');
const timeService = new cote.Responder({ name: 'Time Service' });

timeService.on('auth', (req, cb) => {
    cb('Authorized');
});