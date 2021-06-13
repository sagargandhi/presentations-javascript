import {add} from './helpers/math';

const root = document.querySelector('#math');

root.addEventListener('submit', e => {
    e.preventDefault();
    const oper1 = Number.parseInt(e.target.elements.operandOne.value);
    const oper2 = Number.parseInt(e.target.elements.operandTwo.value);

    e.target.elements.result.value = add(oper1, oper2);
    e.target.elements.operandOne.value = "";
    e.target.elements.operandTwo.value = "";
});