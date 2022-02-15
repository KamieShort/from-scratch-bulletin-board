// import functions and grab DOM elements
import { fetchPosts } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

const postList = document.getElementById('post-container');
// set event listeners

window.addEventListener('load', async () => {
    const posts = await fetchPosts();
    const postDetails = renderPosts();
    console.log(posts);

    postList.append(postDetails);
});
// get user input
// use user input to update state
// update DOM to reflect the new state
