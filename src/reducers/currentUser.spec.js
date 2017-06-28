import currentUser from './currentUser';

const mockUser = {
    timestamp: {time: new Date(), status: 'COME'},
    timeSpent: 14000,
    name: "Tristan Teufel",
    chipId: "1234567890"
};

describe('currentUser reducer', () => {
    it('should handle initial state', () => {
        expect(
            currentUser(undefined, {})
        ).toEqual({})
    });

    it('should reset ChipId', () => {
        expect(
            currentUser(mockUser, {type: 'currentUser/resetCurrentUserChipId'}).chipId
        ).toEqual('')
    });

    it('should reset CurrentUser', () => {
        expect(
            currentUser(mockUser, {type: 'currentUser/resetCurrentUser'})
        ).toEqual({})
    });

    it('should save CurrentUser', () => {
        expect(
            currentUser({}, {type: 'currentUser/saveCurrentUser', data: {currentUser: mockUser}})
        ).toEqual(mockUser)
    });

    it('should save Status', () => {
        expect(
            currentUser(mockUser, {type: 'message/status', data: {status: 'SUCCESS'}}).status
        ).toEqual('SUCCESS')
    });
})