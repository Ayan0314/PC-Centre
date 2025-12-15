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
      $(this).css(
        "border", "2px solid red",
      )
    }else{
      $(this).css(
        "border", "2px solid green",
      )
    }
  })
})