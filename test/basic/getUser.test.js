let getUser = require('../../app/getUser');

test('User id is correct', () =>{
    let id = getUser('name').id;
    expect(id).toBe('456');
});