!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/math.js\nconst add = (a, b) => a + b;\r\n\r\nconst substract = (a,b) => a - b;\r\n\r\nconst multiply = (a, b) => a * b;\r\n\r\nconst divide = (a, b) => a / b;\r\n\r\n\n// CONCATENATED MODULE: ./src/app.js\n\r\n\r\nconst root = document.querySelector('#math');\r\n\r\nroot.addEventListener('submit', e => {\r\n    e.preventDefault();\r\n    const oper1 = Number.parseInt(e.target.elements.operandOne.value);\r\n    const oper2 = Number.parseInt(e.target.elements.operandTwo.value);\r\n\r\n    e.target.elements.result.value = add(oper1, oper2);\r\n    e.target.elements.operandOne.value = \"\";\r\n    e.target.elements.operandTwo.value = \"\";\r\n});\n\n//# sourceURL=webpack:///./src/app.js_+_1_modules?")}]);