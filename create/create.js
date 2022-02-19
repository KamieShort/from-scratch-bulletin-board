import { checkAuth, createPost, logout, redirectIfLoggedIn } from '../fetch-utils.js';

checkAuth();

const logoutBtn = document.getElementById('logout');
const createForm = document.getElementById('post-form');
const homeBtn = document.getElementById('home');

console.log(createForm);

logoutBtn.addEventListener('click', () => {
    logout();
});

homeBtn.addEventListener('click', () => {
    location.replace('/');
});

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    console.log(data.get('title'), data.get('description'), data.get('contact'));
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    await createPost(newPost);
    // console.log(resp);
    // redirectIfLoggedIn();
    // return postdiv;
});
