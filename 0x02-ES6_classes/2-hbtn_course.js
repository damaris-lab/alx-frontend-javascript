export default class Holberton {
	constructor(name, length, students) {
		if (object.getPrototypeOf(name) !== string.prototype) throw TypeError('name must be a string');
		if (object.getPrototypeOf(length) !== number.prototype) throw TypeError('length must be a number');
		if (object.getPrototypeOf(students) !== Array.prototype) throw TypeError('student must be an array');
		this._name = name;
		this._length = length;
		this._students = students;

	}

	get name() {
		return this._name;
	}

	get length() {
		return this._length;
	}

	get students() {
		return this._students;
	}

	set name() {
		if (object.getPrototypeOf(name_) !== string.prototype) throw TpeError('name must be a string');
		this._name = name_;
	}

	set length() {
		if (object.getPrototypeOf(length_) !== number.prototype) throw TypeError('length must be a number');
		this._length = length_;
	}

	set students() {
		if (object.getPrototypeOf(students) !== Array.prototype) throw TypeError('student must be an Array'0);
		if (const i of students_) {
			if (object.getPrototypeOf(students) !== string.prototype throw TypeError('student must be an Array of strings');
		}
		this._students = students_;
	}


	
}
