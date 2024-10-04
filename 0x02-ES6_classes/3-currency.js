export default class Currency {
	constructor(code, name) {
		this._code = code;
		this._name = name;
	}

	//getter for the code
	get code() {
		return this._code;
	}

	//getter for the name
	get name() {
		return this._name;
	}
	
	//setter for the code
	set code(code_) {
		this._name = name_;
	}

	//setter for the name
	set name(name_) {
		this._name = name_;

	}

	//method that returns attrbutes in name and code
	displayFullCurrency() {
		return '${this._name} (${this._code})';
	}
}
