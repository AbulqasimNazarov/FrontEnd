function createUserElement(user) {
    const userElement = document.createElement('div');
    userElement.style.border = '2px solid red';
    userElement.classList.add('user');
    userElement.innerHTML = `
        <div>ID: ${user.id}</div>
        <div>Name: ${user.name}</div>
        <div>Email: ${user.email}</div>
        <div>Address: ${JSON.stringify(user.address)}</div>
    `;
    userElement.addEventListener('click', () => {
        fetchUserPosts(user.id);
    });
    return userElement;
}


function displayUsers(users) {
    const usersContainer = document.getElementById('users');
    usersContainer.innerHTML = '';
    users.forEach(user => {
        const userElement = createUserElement(user);
        usersContainer.appendChild(userElement);
    });
}


function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            displayUsers(users);
            document.getElementById('loading').style.display = 'none';
        })
        .catch(error => console.error('Error fetching users:', error));
}


function displayUserPosts(posts) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}


const cachedPosts = {};


function fetchUserPosts(userId) {
    if (cachedPosts[userId]) {
        displayUserPosts(cachedPosts[userId]);
    } else {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(posts => {
                displayUserPosts(posts);
                cachedPosts[userId] = posts;
            })
            .catch(error => console.error(`Error fetching posts for user ${userId}:`, error));
    }
}

document.addEventListener('DOMContentLoaded', fetchUsers);