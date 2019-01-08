import config from "../config";

var rest = require('restler');

var RestRequest = function () {

    var Object = {
        result: "",
        response: ""
    };

    this.getAllFlowers = function () {
        let p = new Promise(function (resolve, reject) {
            rest.get(config.API_URL + 'flowers/', {
                headers: {'Authorization': config.AUTH_TOKEN, 'Content-Type': 'application/json'}
            }).on('complete', function (result, response) {
                Object.result=result;
                Object.response=response;

                if (result instanceof Error){
                    reject(Object.message);
                }
                else {
                    resolve(Object.result.flowers);
                }
            });
        });

        return p.then(res => {
            return res;
        });
    };
};

var request = new RestRequest();

it('Mapping test', async() => {
    let flowers = await request.getAllFlowers();
    flowers.forEach(function(flower, i) {
        expect(flower.latin_name).not.toEqual(null);
        expect(flower.name).not.toEqual(null);
        expect(flower.id).not.toEqual(null);
        expect(flower.sightings).not.toEqual(null);
        expect(flower.profile_picture).not.toEqual(null);
        expect(flower.favorite).not.toEqual(null);
    });
});
