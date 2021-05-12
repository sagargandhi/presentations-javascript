'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = function () {
    function Employee(name, id) {
        _classCallCheck(this, Employee);

        this.name = name;
        this.id = id;
    }

    _createClass(Employee, [{
        key: 'printInfo',
        value: function printInfo() {
            return 'Name : ' + this.name + ' Id-' + this.id;
        }
    }]);

    return Employee;
}();

;

var array = new Array();
array.push(new Employee('Sagar', 1));
array.unshift(new Employee('Pramod', 2));

var renderArray = function renderArray(array) {

    document.querySelector("#app").innerHTML = '';
    array.forEach(function (employee, index) {
        var p = document.createElement('p');
        p.textContent = employee.printInfo();
        document.querySelector('#app').appendChild(p);
    });
};

renderArray(array);

document.querySelector('#addForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var textInput = e.target.elements.addName.value;
    e.target.elements.addName.value = "";
    console.log(textInput);

    array.push(new Employee(textInput, array.length + 1));

    renderArray(array);
});
