var utilities = {
    getUrl: function(url) {
        request(baseUrl + url, function(error, response, body) {
            console.log(body);
        });
    }
};

module.exports = utilities;