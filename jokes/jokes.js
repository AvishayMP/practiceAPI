const baseURL = 'https://api.humorapi.com/jokes/random?api-key=955f137eb1e04eedbe4e17e335182b98';

async function getJoke() {
    const res = await fetch(baseURL);
    console.log(res);
    if (res.ok) {
        const joke = await res.json();
        return joke;
    } else {
        throw new Error('Joke not found...');
    }
}
window.onload = async () => {
    try {
        const joke = await getJoke();
        document.body.innerText = joke;
    } catch (err) {
        document.body.innerText = err.message;
    }
}