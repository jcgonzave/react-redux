const sortAttendees = (attendees, ascending) => {
	return attendees.sort((a, b) => {return ascending ? (a.name < b.name ? 1 : -1) : (a.name > b.name ? 1 : -1)})
};

const initialState = {
	loading: true,
	attendees: [],
	ascending: true
};

export default function attendees (state = initialState, action) {
	switch (action.type) {
		case 'TOGGLE_SORT':
			return Object.assign({}, state, {
				ascending: !state.ascending,
				attendees: sortAttendees([...state.attendees], !state.ascending)
			});
		case 'ADD_ATTENDEE':
			// Return a new array with old state and added attendee.
			return Object.assign({}, state, {
				attendees: sortAttendees([{
					name: action.name,
					color: action.color
				},
				...state.attendees
				], state.ascending)
			});
		case 'REMOVE_ATTENDEE':
			let newAttendees = [...state.attendees];
			newAttendees.splice(action.index, 1);
			return Object.assign({}, state, {
				attendees: newAttendees
			});
		case 'RECEIVE_LIST':
			return Object.assign({}, state, {
				loading: false,
				attendees: [
					...state.attendees,
					...action.list
				]
			});
		default:
			return state;
	}
}
