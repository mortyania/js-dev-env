//this checks if we are on a localhost project, because this means it is still in development.
//if it is still in development it responds with a url that points to our mock api

export default function getBaseUrl() {
	const inDevelopment = window.location.hostname === 'localhost';
	return inDevelopment ? 'http://localhost:3001/' : '/';
}
