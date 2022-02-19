import { checkAuth, createPost, logout, redirectIfLoggedIn } from '../fetch-utils.js';

checkAuth();

const logoutBtn = document.getElementById('logout');
const createForm = document.getElementById('post-form');
const homeBtn = document.getElementById('home');

logoutBtn.addEventListener('click', () => {
    logout();
});

homeBtn.addEventListener('click', () => {
    location.replace('/');
});

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    const resp = await createPost(newPost);
    console.log(resp);
    redirectIfLoggedIn();
});
