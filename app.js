// import functions and grab DOM elements
import { fetchPosts } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

const postList = document.getElementById('post-container');
const signInBtn = document.getElementById('sign-in');
const createBtn = document.getElementById('create-post');

window.addEventListener('load', async () => {
    const posts = await fetchPosts();
    for (let post of posts) {
        console.log(post);
        const div = renderPosts(post);

        postList.append(div);
    }
});

signInBtn.addEventListener('click', () => {
    location.replace('/auth');
});

createBtn.addEventListener('click', () => {
    location.replace('/create');
});
