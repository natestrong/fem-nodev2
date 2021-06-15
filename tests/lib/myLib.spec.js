const {getNewUser} = require("./myLib");
const {mapObjectToArray} = require("./myLib");


describe('mapObjectToArray()', () => {
    const result = mapObjectToArray(
        {sophie: 10, Oliver: 1, Maxwell: 420},
        (k, v) => `${k}_${v}`
    );

    test('maps object to array using callback', () => {
        expect(result).toEqual(['sophie_10', 'Oliver_1', 'Maxwell_420']);
    });

    test('callback gets called', () => {
        const mockCb = jest.fn();
        const result = mapObjectToArray({1: 1, 2: 2}, mockCb);
        expect(mockCb.mock.calls.length).toBe(2);
    });
});

describe('getNewUser', () => {
    test('user does exist', async () => {
        const user = await getNewUser(1);

        expect(user).toBeTruthy();
        expect(user.verified).toBe(false);
    });

    test('user does not exist', async () => {
        expect.assertions(1);

        try {
            await getNewUser(3);
        } catch (e) {
            expect(e.message).toBe('User does not exist');
        }
    });
});
