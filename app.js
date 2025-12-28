//  Home Page Code
 const texts = [
    "PC Centre",
    "Your Trusted IT Partner",
    "Best Computer Products & Services",
  ];

  let i = 0;
  let j = 0;
  let isDeleting = false;

  function typeLoop() {
    const current = texts[i];
    const typingText = $("#typing-text");

    if (!isDeleting) {
      typingText.text(current.substring(0, j + 1));
      j++;
    } else {
      typingText.text(current.substring(0, j - 1));
      j--;
    }

    let speed = isDeleting ? 50 : 120;

    
    if (!isDeleting && j === current.length) {
      speed = 1000;
      isDeleting = true;
    }

    
    else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
      speed = 500;
    }

    setTimeout(typeLoop, speed);
  }

  
  $(document).ready(function () {
    typeLoop();
  });


// Form jQuery
$(".iinput").focus(function () {
    $(this).css({
      "border": "2px solid blue",
      "background-color": "#eef"
    });
  });

  $(".iinput").blur(function () {
    $(this).css({
      "border": "1px solid #ccc",
      "background-color": "white"
    });
  });

$(document).ready(function(){
  $(".iinput").blur(function(){
    if ($(this).val().trim() === ""){
      $(this).css("border", "2px solid red",)
    }else{
      $(this).css("border", "2px solid green",)
    }
  })
})



 let cart = [];

      $(".addToCart").click(function() {
          let card = $(this).closest(".product-card");
          let name = card.find(".product-name").text();
          let price = parseFloat(card.find(".product-price").data("price"));
          let qty = parseInt(card.find(".quantity-box").val());
          let img = card.find(".product-img").attr("src");

          // Check if item already in cart
          let existing = cart.find(item => item.name === name);
          if(existing){
              existing.qty += qty;
          } else {
              cart.push({name, price, qty, img});
          }

          updateCart();
      });

      function updateCart() {
          let totalCount = 0;
          let totalPrice = 0;
          $("#cartItems").empty();

          cart.forEach(item => {
              totalCount += item.qty;
              totalPrice += item.price * item.qty;
              $("#cartItems").append(`
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                      <img src="${item.img}" style="width:50px;height:50px;margin-right:10px;">
                      <div>${item.name} x ${item.qty}</div>
                      <span>$${(item.price*item.qty).toFixed(2)}</span>
                  </li>
              `);
          });

          $("#cartCount").text(totalCount);
          $("#cartTotal").text(totalPrice.toFixed(2));
      }