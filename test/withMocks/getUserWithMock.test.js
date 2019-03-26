/* We need to declare the mocks elements before importing the modules who depends on it
In this case we declare getUserID mock before importing getUser */

jest.mock('../../app/getUserID', () =>{
    return jest.fn(() => '123');
});

let getUser = require('../../app/getUser');

test('User id is correct', () =>{
    let id = getUser('name').id;
    expect(id).toBe('123');
});