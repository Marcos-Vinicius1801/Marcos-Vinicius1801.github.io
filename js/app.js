$('.personal-information #profile-picture')
      .mouseover(function(){
        $(this).addClass('animated shake');  
      })
      .mouseout(function(){
        $(this).removeClass('animated shake');  
      });

$('h5 img')
        .mouseover(function(){
        $(this).addClass('animated rubberBand');  
        })
        .mouseout(function(){
        $(this).removeClass('animated rubberBand');  
        });