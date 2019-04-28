const model = require('./model');

const db = {
    save: (user) => {
        userModel = model.get(user);
        return {
            status: 'ok',
            data: userModel,
        }
    }
}

module.exports = db;