'use strict'

const model = {
    get: (user)=>{
        return {
            user: user,
            id: Math.round(Math.random() * 10000000000),
        }
    }
}

module.exports = model;