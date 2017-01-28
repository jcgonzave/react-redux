import uuid from 'uuid';
import Data from '../data/data';

function fetchList () {
	return new Promise((resolve) => {
      setTimeout(() => {
          resolve(Data);
      }, 3000);
  });
}

const receiveList = (attendeeList) => {
	return {
		type: 'RECEIVE_LIST',
		list: attendeeList
	}
};

const requestList = () => {
	return {
		type: 'REQUEST_LIST'
	}
};

export const addListAttendees = () => (dispatch) =>  {
	dispatch(requestList());
  fetchList().then((data) => {
		dispatch(receiveList(data))
	})
};

export const addAttendee = (name, color) => {
	return {
		type: 'ADD_ATTENDEE',
		id: uuid.v4(),
		name: name,
		color: color
	}
};

export const removeAttendee = (index) => {
	return {
		type: 'REMOVE_ATTENDEE',
		index: index
	}
};

export const toggleSort = () => {
	return {
		type: 'TOGGLE_SORT'
	}
};
