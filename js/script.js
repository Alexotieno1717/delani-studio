$(document).ready(function(){
    //Design on click text Appear
    $('#design').click(function(){
        $('#design').slideToggle();
        $('#design-text').slideToggle();
    });
    $('#design-text').click(function(){
        $('#design').slideToggle();
        $('#design-text').slideToggle();
    });

    //Developement on click text appear
    $('#developement').click(function(){
        $('#developement').slideToggle();
        $('#developement-text').slideToggle();
    });
    $('#developement-text').click(function(){
        $('#developement').slideToggle();
        $('#developement-text').slideToggle();
    })

    //Product on click text appear
    $('#product').click(function(){
        $('#product').slideToggle();
        $('#product-text').slideToggle();
    });
    $('#product-text').click(function(){
        $('#product').slideToggle();
        $('#product-text').slideToggle();
    });

    //Submit button - should alert a message
    $('#submit').submit(function(){
        alert('Your message was well receive thank you for contacting us');
    });
});