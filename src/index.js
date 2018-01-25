import './index.css';
import {getUsers} from './api/userApi';

const albums = {
	slantedAndEnchanted : 1,
	CrookedRain : 2,
	WoweeZowee : 3,
	BrightenTheCorners : 4,
	TerrorTwilight : 5
}

var total = 0;

for (var n in albums){
	total = total + albums[n];
}

//populate table of users via API call
getUsers().then(result => {
	let usersBody = "";

	result.forEach(user => {
		usersBody+= `<tr>
			<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
			<td>${user.id}</td>
			<td>${user.firstName}</td>
			<td>${user.lastName}</td>
			<td>${user.email}</td>
			</tr>`
	});

	global.document.getElementById('users').innerHTML = usersBody;
})

export { total }
