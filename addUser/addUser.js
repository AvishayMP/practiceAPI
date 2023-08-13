async function sendData() {
    const fName = document.getElementsByName('fName')[0].value;
    const lName = document.getElementsByName('lName')[0].value;
    const mail = document.getElementsByName('mail')[0].value;
    const age = document.getElementsByName('age')[0].value;

    const postObj = {
        'name': `${fName} ${lName}`,
        age,
        'email': mail
    };

    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(postObj)
    });
    if (res.ok) {
        console.log(res);
        document.body.append('Success');
    } else {
        document.body.append('Fail!!');
    }
}