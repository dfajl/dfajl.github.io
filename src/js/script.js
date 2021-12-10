// require('es6-promise').polyfill(); // для перевода промисов в старый формат. сам babel-loader без этой команды не справится. так мы устанавливали полифилы для промисов вручную. есть вариант подключить их через плагин  npm i babel-plugin-es6-promise --save-dev
<<<<<<< HEAD
require("@babel/polyfill");
=======

>>>>>>> 189b7c2051d7e0cbdc5fcf9b8fe4ec7f0258d4d1
require('nodelist-foreach-polyfill'); // полифил для forEach
require('formdata-polyfill'); // полифил для formData

window.addEventListener('DOMContentLoaded', function () {
    "use strict";

    let form = require('./parts/form.js'),
        calculate = require('./parts/calculate.js'),
        modal = require('./parts/modal.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js');

    
    calculate();
    form();
    modal();
    slider();
    tabs();
    timer();
});

// браузерифай заработал только тогда, когда в require('parts/form.js') я прописал следующее: form = require('./parts/form.js')
// webpack работал без этого 