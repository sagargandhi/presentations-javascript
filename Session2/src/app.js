import moment from 'moment';

const clearNodes = (root) => {
    while(root.lastChild){
        root.removeChild(root.lastChild);
    }
}

const render = () => {
 
    //28-05-2021 03:13:00 PM
    const displayDate = moment().format("DD-MM-YYYY HH:mm:ss a");

    const root = document.querySelector('#app');
    clearNodes(root)
    const h2 = document.createElement('h2');
    h2.textContent = displayDate;

    root.appendChild(h2);
}

render();

setInterval(render, 1000);



