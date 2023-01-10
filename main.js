$(document).ready(function(){
    $(".addBtn").click(function(){
        $("ul").append('<li>'+ $('.input').val() +'<i class="fa-solid fa-check"></i> <i class="fa-regular fa-trash-can"></i> </li>');
        $(".input").val("");            //Reset the input form
    })
    $('ul').on('click','.fa-trash-can',function(){
        $(this).parent('li').fadeOut(150);
    });
    $('ul').on('click','.fa-check',function(){
        $(this).parent('li').toggleClass('checked');
    });
});