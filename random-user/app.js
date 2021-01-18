import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';
const URL = 'https://randomuser.me/api/';

const btn = get('.btn');

const showUser = async () => {
 // get user
 const person = await getUser()
 displayUser(person)
 // display user
}

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser)