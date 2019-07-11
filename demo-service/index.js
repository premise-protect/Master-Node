const cote = require('cote');
const client = new cote.Requester({ name: 'Client' });

client.send({ type: 'auth' }, (time) => {
    console.log(time);
});