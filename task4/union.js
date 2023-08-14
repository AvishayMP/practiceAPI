const baseURL = 'https://jsonplaceholder.typicode.com';
async function f1() {
    let users;

    users = await asyncGetData(baseURL + '/users');

    users = users.map(async user => {
        let todos;
        let posts;
        const resTodo = await asyncGetData(baseURL + '/users/' + user.id + '/todos');
        todos = resTodo.map(({ id, title, completed }) => { return { id, title, completed } });

        const resPost = await asyncGetData(baseURL + '/users/' + user.id + '/posts');
        posts = resPost.map(({ id, title, body }) => { return { id, title, body } });

        return {
            ...user,
            todos,
            posts
        };
    });

    users = await Promise.allSettled(users);
    console.log(JSON.stringify(users,null,4));
}

async function asyncGetData(URL) {
    const res = await fetch(URL);
    let data;
    if (res.ok) {
        data = await res.json();
    } else {
        throw new Error('Request denied!');
    }
    return data;
}

f1();