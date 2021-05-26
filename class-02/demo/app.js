'use strict';


// let counter = 0;

// when the document is ready, add these event listeners
$(document).ready(function() {

    const buttonElement = $('button');
    console.log(buttonElement);
    console.log("asdasas")

    $('button').on('click', function() {
        // counter++;
        // console.log("button is clicked!! counter: ", counter);
        // use toggleClass function to add/remove a specific class;
        // console.log(this); <button ..></button>
        // console.log($(this));
        $(this).siblings('ul').toggleClass('on');
        // or I can use this $('ul').toggleClass('on');
    });
});


// $('#btn-id').on('click', function() { }