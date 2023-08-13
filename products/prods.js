window.onload = async () => {
    const body = document.body;
    const ol = document.createElement('ol');

    const productList = await getProds();
    productList.forEach(p => {
        const li = document.createElement('li');
        li.innerText = p.title;
        ol.appendChild(li);
    });
    body.appendChild(ol);
}

async function getProds() {
    const baseURL = 'https://fakestoreapi.com/products';
    const res = await fetch(baseURL);
    const data = await res.json();
    return data;
}