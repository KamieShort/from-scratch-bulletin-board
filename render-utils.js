export function renderPosts() {
    // const div = document.createElement('div');
    const post = document.createElement('div');
    const title = document.createElement('p');
    const description = document.createElement('p');
    const contact = document.createElement('p');
    const image = document.createElement('img');

    title.textContent = post.title;
    description.textContent = post.description;
    contact.textContent = post.contact;
    image.src = `../assets/${post.img}.jpeg`;

    post.append(title, description, contact, image);
    return post;
}
