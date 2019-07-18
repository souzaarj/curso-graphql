

const fetch = require('node-fetch');
const Bluebird = require('bluebird');
 
fetch.Promise = Bluebird;


fetch('https://api.cartolafc.globo.com/clubes')
.then(res => res.json())



let clubesTransformadosEmArray = [];
let clubes = {};
/*
client.get('/clubes', function (err, req, res, obj) {
  assert.ifError(err);
  // console.log('Server returned: %j', obj);
  clubes = obj;

  Object.keys(clubes).forEach(key => {

    let clubeMapeado = JSON.parse(JSON.stringify(clubes[key]));
   
    delete clubeMapeado.escudos['30x30'];
    delete clubeMapeado.escudos['45x45'];
    delete clubeMapeado.escudos['60x60'];

    clubeMapeado.escudos.pequeno =  clubes[key].escudos['30x30'];
    clubeMapeado.escudos.medio =  clubes[key].escudos['45x45'];
    clubeMapeado.escudos.grande =  clubes[key].escudos['60x60'];
  
    clubesTransformadosEmArray.push(clubeMapeado)

    //console.log(`${JSON.stringify(clubes[key].escudos['60x60'])}`);
  
  })
*/
  return clubesTransformadosEmArray

//});


module.exports = clubesTransformadosEmArray;