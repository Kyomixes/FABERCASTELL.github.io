const menuTrigger = document.querySelector('.menu-trigger');
        const megaMenu = document.querySelector('.mega-menu');
        
        menuTrigger.addEventListener('click', () => {
          megaMenu.classList.toggle('open');
        });
        $(document).ready(function () {
            $(".product-card1").on("click", function () {
              const productId = $(this).data("product-id");
              const popup = $('<div class="popup" id="popup-' + productId + '"></div>');
              const popupContent = $('<div class="popup-content"></div>');
              const closeButton = $('<button class="close-btn">Close</button>');
              const yesButton = $('<button class="yes-btn">Yes</button>');
              const noButton = $('<button class="no-btn">No</button>');
          
              popupContent.append('<p>Do you want to add this product to the cart?</p>');
              popupContent.append(closeButton);
              popupContent.append(yesButton);
              popupContent.append(noButton);
              popup.append(popupContent);
              $(".popup-container").append(popup);
              popup.fadeIn();
          
              closeButton.on("click", function () {
                popup.fadeOut();
              });
          
              yesButton.on("click", function () {
                // Handle the "Yes" button click event
                console.log("Product added to cart");
                popup.fadeOut();
              });
          
              noButton.on("click", function () {
                // Handle the "No" button click event
                console.log("Product not added to cart");
                popup.fadeOut();
              });
            });
          
            $(".popup").on("click", function (event) {
              if (event.target === this) {
                $(this).fadeOut();
              }
            });
          
            $(".yes-btn, .no-btn, .close-btn").on("click", function () {
              const popupId = $(this).closest(".popup").attr("id");
              $(`#${popupId}`).fadeOut();
            });
          });
          function goToCart() {
            window.location.href = "shopping-cart.html";
          }
          $( function() {
            $( "#accordion" ).accordion();
          } );
          
  function toggleNav(event) {
    const target = event.currentTarget.querySelector('ul');
    const navItems = document.querySelectorAll('footer ul');

    navItems.forEach((item) => {
      if (item !== target) {
        item.classList.remove('nav-visible');
        item.classList.add('nav-hidden');
      }
    });

    target.classList.toggle('nav-visible');
    target.classList.toggle('nav-hidden');
  }


  const footerSections = document.querySelectorAll('footer .footer-section');
  footerSections.forEach((section) => {
    section.addEventListener('click', toggleNav);
  });
