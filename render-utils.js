export function renderPosts(post) {
    // const div = document.createElement('div');
    const postdiv = document.createElement('div');
    const title = document.createElement('p');
    const description = document.createElement('p');
    const contact = document.createElement('p');
    // const image = document.createElement('img');

    postdiv.classList.add('postdiv');
    title.textContent = post.title;
    title.classList.add('title');
    description.textContent = post.description;
    description.classList.add('description');
    contact.textContent = post.contact;
    contact.classList.add('contact');
    // image.src = './assets/post.png';

    postdiv.append(title, description, contact);
    return postdiv;
}
