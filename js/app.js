$('.personal-information #profile-picture')
      .mouseenter(function(){
        $(this).addClass('animated shake');  
      })
      .mouseout(function(){
        $(this).removeClass('animated shake');  
      });

$('h5 img')
        .mouseenter(function(){
        $(this).addClass('animated rubberBand');  
        })
        .mouseout(function(){
        $(this).removeClass('animated rubberBand');  
        });