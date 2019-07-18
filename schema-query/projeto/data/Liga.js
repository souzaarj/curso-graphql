

const fetch = require('node-fetch');
const Bluebird = require('bluebird');

fetch.Promise = Bluebird;






    var timesDaLiga = []

    const server = 'https://api.cartolafc.globo.com/auth/liga/premiers-league-2019'
    const options = {
        method: 'GET', headers: {
            "X-GLB-Token": "1ecc2f988134a2805c79a84d8899b526e55304963495948493976635072776759383274716637356c625251567057795a37324577753972346e6c78754b415436694a517163527a354845325a52532d736a7431775974385837625461633332554e4e2d556f773d3d3a303a736f757a615f61726a2e32303135"
        }
    }



    // arrow function
    const getLiga = async () => {
        const response = await fetch(server, options);
        return await response.json();
    };



    // getLiga()
    //     .then(lig => console.log(lig));


    // var ligaRetornada = {}

    // fetch(server, options)
    //     .then(res => res.json())
    //     .then(json => {
    //         const retorno = json
    //         ligaRetornada = retorno;
    //         timesDaLiga.push({ "teste": "erro" });
    //         // console.log(timesDaLiga);
    //     })

    // console.log(timesDaLiga);

   // return timesDaLiga;


module.exports = getLiga(); 