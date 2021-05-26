// another way to do constructor
function Neighborhood(dataObj) {
   for (let key in dataObj) { // ES6 feature
        this[key]= dataObj[key];
   }
}
// 1st version
/*Neighborhood.prototype.toHtml = function() {
    let container = $('<div></div>');
    container.append(`<h2>${this.name}</h2><p>${this.city}</p>`)
    return container;
}*/

// 2nd version
/*
Neighborhood.prototype.toHtml = function() {
    let container = $('.template').clone();
    container.removeClass('template');
    container.find('.name').text(this.name);
    container.find('.city').text(this.city);
    container.find('.population').text(this.population);
    return container;
}
*/

//3rd version: Mustache
Neighborhood.prototype.toHtml = function() {
    // 1.Get the template from the HTML document
    let template = $('#mustache-template').html();
    console.log(template);
    //2. use Mustache to render new html .render method
    let html = Mustache.render(template, this);
    //3.return the html
    return html;
}

// create an array of objects using constructor.
neighborhoodDataSet.forEach(obj=> {
    let neighborhoodObj = new Neighborhood(obj);
    $('#neighborhoods').append(neighborhoodObj.toHtml());
});


