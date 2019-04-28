const db = require('../../../src/server/database/db');
const model = require('../../../src/server/database/model');

const user = 'johny test';

test('database save user', ()=>{
    let databaseResponse = db.save(user);

    expect(databaseResponse.data.user).toBe('johny test');
});

test('Model module is called with Johny Test name', ()=>{
    model.get = jest.fn();
    db.save('johny test');

    expect(model.get).toHaveBeenCalledWith('johny test');
})