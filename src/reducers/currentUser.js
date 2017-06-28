export default function currentUser(state = {}, action) {
    switch (action.type) {
        case 'message/status':
            return {...state, status: action.data};
        case 'message/chipId':
            return Object.assign({}, state, {chipId: action.data});
        case 'currentUser/resetCurrentUserChipId':
            return Object.assign({}, state, {chipId: ''});
        case 'currentUser/resetCurrentUser':
            return {};
        case 'currentUser/saveCurrentUser':
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};


