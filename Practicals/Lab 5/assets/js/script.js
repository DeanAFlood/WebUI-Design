$(document).ready(function(){
    $('#checkbox').click(function(){
        var name = $('#email').val();
    $('#email').val('Hello, ' + name + '!');
    })
});