let userId = require('./getUserID');

const user = (name) => {
    const userData = {
        "name": name,
        "lastName" : "Cueto",
        "id": userId()
    };

    return userData;
};

module.exports = user;