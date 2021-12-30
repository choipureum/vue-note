export function validateEmail(email) {
	var re =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
	return re.test(String(email).toLowerCase());
}
export function validatePassword(value) {
	return value.length >= 8;
}
