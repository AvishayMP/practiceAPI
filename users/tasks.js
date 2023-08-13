window.onload = () => {
    const btnGet1U = document.createElement('button');
    btnGet1U.innerText = 'Get User';
    btnGet1U.onclick = async () => {
        const response = await fetch('https://randomuser.me/api');
        if (response.ok) {
            const user = await response.json();
            showUser(user.results[0]);
        }
    }

    const btnGet5U = document.createElement('button');
    btnGet5U.innerText = 'Get 5 Users';
    btnGet5U.onclick = async () => {
        const response = await fetch('https://randomuser.me/api?results=5&gender=male');
        if (response.ok) {
            const user = await response.json();
            user.results.forEach(u => {
                showUser(u);
            });
        }
    }
    document.body.append(btnGet1U, btnGet5U);
}

function showUser(user) {
    const container = document.getElementsByClassName('users-container')[0];
    const card = document.createElement('div');
    card.classList.add('card');
    card.onclick = () => {
        card.classList.toggle('chosen');
    }
    //setting the users title:

    const userTitle = document.createElement('div');
    userTitle.classList.add('userTitle');

    const userImage = document.createElement('img');
    userImage.classList.add('userImage');
    userImage.src = user.picture.medium;

    const userName = createHeader(`${user.name.title} ${user.name.first} ${user.name.last}`, 'h2');

    userTitle.append(userImage, userName);

    const mailTitle = createHeader('e-Mail:', 'h3');
    const btnSetEmail = createButton('Set e-Mail', 'normal', () => { });
    const emailP = createHeader(user.email, 'p')

    const addressTitle = createHeader('Full address:', 'h3');
    const address = createHeader(formatAddress(user.location), 'p');

    card.append(userTitle, mailTitle,
        btnSetEmail, emailP,
        addressTitle, address,
    );
    container.appendChild(card)
}

function createHeader(text, type = 'p') {
    const header = document.createElement(type);
    header.innerText = text;

    return header;
}
function createButton(text, size = 'normal', func) {
    const btn = document.createElement('button');
    btn.classList.add(size);
    btn.innerText = text;
    btn.onclick = () => func();

    return btn;
}
function formatAddress(addObj) {
    return `${addObj.street.number} ${addObj.street.name} Street, ${addObj.city}, ${addObj.country}`;
}