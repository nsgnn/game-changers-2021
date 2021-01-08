const axios = require('axios');

// eslint-disable-next-line no-unused-vars
function getFromURL(url) {
    try {
        axios.get(url).then(resp => {

            return resp.data;
        });
    } catch (e){
        return '';
    }
};