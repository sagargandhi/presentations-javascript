console.log("App js")

const id = 11;

const xhr = new XMLHttpRequest();
xhr.open("GET", `https://reqres.in/api/users/${id}`)

xhr.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200){
        const response = JSON.parse(e.target.responseText);
        console.log(`${response.data.first_name} ${response.data.last_name}`);
    } else if (e.target.readyState === 4){
        console.log(`Error status code - ${e.target.status}`);
    }
});

xhr.send();