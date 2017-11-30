$(document).ready(function(){
    $("#new-products").click(function(){
		$("#static").hide();
        $.ajax({url: "MOCK_DATA.json",
		method:'GET',
         success: function(reponse){
            console.log(reponse);
            var dataObj = reponse;
			$("#dynamic").show();
			for(var i=0;i<dataObj.length;i++){
				
				$('#pull').append("<div class='product-container'><img src='"+dataObj[i].image_url+"' alt='XS'/><div class='best-content'><a href='#'><div class='product-title'>"+dataObj[i].product_name+"</div></a><div class='pound'><div class='product-price'> Price: $"+dataObj[i].price+"</div> <div class='save'>/SAVE £27.71</div></div></div></div>");
			}
        }
      });
    });

  });
