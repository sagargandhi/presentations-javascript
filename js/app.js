class Employee {
    constructor(name, id){
        this.name= name;
        this.id = id;
    }
    printInfo() {
        return `Name : ${this.name} Id-${this.id}`;
    }
};


const array = new Array();
array.push(new Employee('Sagar', 1));
array.unshift(new Employee('Pramod',2));

const renderArray = function(array){

    document.querySelector("#app").innerHTML = '';
    array.forEach((employee, index)=>{
        const p = document.createElement('p');
        p.textContent = employee.printInfo();
        document.querySelector('#app').appendChild(p);
    });
};

renderArray(array);

document.querySelector('#addForm').addEventListener('submit', e =>{
    e.preventDefault();

    const textInput = e.target.elements.addName.value;
    e.target.elements.addName.value = "";
    console.log(textInput);

    array.push(new Employee(textInput, array.length +1));


    renderArray(array);
});
