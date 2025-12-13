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


//   nabra links underline code
$(document).ready(function () {


  $(".nav-link-custom").each(function () {
    let linkPage = $(this).attr("href");

    if (linkPage === currentPage) {
      $(this).addClass("active");
    }
  });

});
