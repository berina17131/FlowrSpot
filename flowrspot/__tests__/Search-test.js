import config from "../config";

var rest = require('restler');

const searchTerm = "Li";

var RestRequest = function () {

    var Object = {
        result: "",
        response: ""
    };

    this.searchFlowers = function (searchTerm) {
        let p = new Promise(function (resolve, reject) {
            rest.get(config.API_URL + 'flowers/search?query=' + searchTerm, {
                headers: {'Authorization': config.AUTH_TOKEN, 'Content-Type': 'application/json'}
            }).on('complete', function (result, response) {
                Object.result=result;
                Object.response=response;

                if (result instanceof Error)
                {
                    reject(Object.message);

                } else
                {
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

it('Search test - flower name', async() => {
    let flowers = await request.searchFlowers(searchTerm);
    flowers.forEach(function(flower, i) {
        expect(flower.name.toLowerCase()).toContain(searchTerm.toLowerCase());
    });
});

it('Search test - flower latin name', async() => {
    let flowers = await request.searchFlowers(searchTerm);
    flowers.forEach(function(flower, i) {
        expect(flower.latin_name.toLowerCase()).toContain(searchTerm.toLowerCase());
    });
});



