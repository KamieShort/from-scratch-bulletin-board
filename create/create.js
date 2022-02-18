import { checkAuth, createPost, logout } from '../fetch-utils.js';

// checkAuth();

const logoutBtn = document.getElementbyId('logout');
const createBtn = document.getElementById;

logoutBtn.addEventListener('click', async () => {
    await logout();
});
