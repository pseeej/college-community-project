const app = require('./app.js');
const port = 3006;

app.listen( port, function(){
    console.log('Express listening on port', port);
});