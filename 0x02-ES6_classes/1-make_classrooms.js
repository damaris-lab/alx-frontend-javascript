import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
	const array = [19, 20, 34];
	const newArray = [];
	for (const i of array) {
		newArray.push(new ClassRoom(i));
	}
	return newArray;
}
