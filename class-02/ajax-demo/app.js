'use strict';

function Dog(name, image_url) {
    this.name = name;
    this.image_url = image_url;
}

Dog.prototype.render = function() {
    let dogSection = $('#dog-template').clone();
    $('main').append(dogSection);
    dogSection.find('h2').text(this.name);
    dogSection.find('img').attr('src', this.image_url);
    dogSection.removeAttr('id');
}

function getDogsData() {

    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    }
    console.log("I will use the ajax ..")
    // get data from backend file data.json from server
    $.ajax('data.json', ajaxSettings).then(data=> {
        console.log("we got the data!!")
        console.log(data);
        console.log(typeof data);
        data.forEach(element=> {
            let dogObj = new Dog(element.name, element.image);
            dogObj.render();
        });
        // loop through dogs using forEach
        //create a new instance from Dog, then render it
    })
}


$('document').ready(getDogsData);

