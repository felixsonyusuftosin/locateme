var previous;
var next;

$(document).ready(function(){	
	callmap();		
});

function callmap(){
    window.location.href = "../index.html";
    $(document).on('click','.next',function(){
    var item = $(this).attr('data-item');
    previous = '#'+$(this).parents().find('.bd').attr('id');
      $(this).parents().find('.bd').hide('fade',100,function(){
          $(this).css('display', 'none');
          $('#'+item).show('slide',{'direction':'right'},300, function(){
               next = '#'+item;
          })
      })
    });
    $(document).on('click','.previous',function(){
    console.log(next); 
      console.log(previous); 
         $(next).hide('fade',100,function(){
             $(previous).show('slide',{'direction':'right'},200, function(){ 
                 $(this).css('display', 'block');            
          });
         })
    });
    
}