var rp = require('request-promise');

module.exports = function getById(providerId, tokenType, accessToken) {
    let xubioApi_providerEndpoint = process.env.XUBIO_API_URI + 'ProveedorBean/' + providerId;
    let headers = {
        'Authorization': tokenType + ' ' + accessToken
    };
    let options = {
        url: xubioApi_providerEndpoint,
        method: 'GET',
        headers: headers,
        json: true
    };
    return rp(options);
}