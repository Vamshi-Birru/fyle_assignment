// Input focus
const focus_fun = ({ id, focus, value = "" }) => {
    const element = document.getElementById(id);
    if (focus) {
      element.style.position = "relative";
    } else {
      if (value.length === 0) {
        element.style.position = "absolute";
      }
    }
  };
  
  // Show contact us form
  const show_contact_us_form_fun = () => {
    $("#contact_us_form").removeClass("d-none");
  };
  
  // Hide contact us form
  const close_contact_us_form_fun = () => {
    $("#contact_us_form").addClass("d-none");
  };
  
  // Close popup
  const close_popup = () => {
    $("#popup").removeClass("d-grid").addClass("d-none");
  };
  
  // Open popup
  const open_popup = () => {
    $("#popup").removeClass("d-none").addClass("d-grid");
  };
  
  // Project changing buttons and functionality
  const prjct_changing_btns = document.querySelectorAll(".project_changing_btns li");
  const project_img = document.querySelectorAll(".project_section img");
  
  prjct_changing_btns.forEach((btn, i) => {
    $(btn).on("click", function() {
      $(".project_changing_btns li").removeClass("active_project");
      $(".project_changing_btns li").children().removeClass("project_active_text").css("color", "");
      $(".project_section img").removeClass("project_active_img");
  
      $(this).addClass("active_project");
      $(this).children().css("color", "white");
      $(project_img[i]).addClass("project_active_img");
    });
  });
  
  // Service scroller and indicators
  document.addEventListener("DOMContentLoaded", () => {
    const scrollImagesContainer = document.getElementById("scroll-images");
    const scrollIndicatorContainer = document.getElementById("scroll-indicator");

    // Get the total number of images
    if (!scrollImagesContainer || !scrollIndicatorContainer) {
      console.error("Required elements not found!");
      return;
  }
    const totalImages = scrollImagesContainer.children.length;
    //  console.log(totalImages);
    // Create indicators
    const indicatorsCount = Math.ceil(totalImages /16 );
    for (let i = 0; i < indicatorsCount; i++) {
        const indicator = document.createElement("li");
        indicator.addEventListener("click", () => {
            // Scroll to the corresponding image
            scrollImagesContainer.scrollTo({
                left: i * scrollImagesContainer.clientWidth,
                behavior: "smooth"
            });

            // Set active class on the clicked indicator
            document.querySelector(".active_service").classList.remove("active_service");
            indicator.classList.add("active_service");
        });

        scrollIndicatorContainer.appendChild(indicator);
    }

    // Set the first indicator as active
    scrollIndicatorContainer.children[0].classList.add("active_service");

    // Update the active indicator on scroll
    scrollImagesContainer.addEventListener("scroll", () => {
        const currentIndex = Math.round(scrollImagesContainer.scrollLeft / scrollImagesContainer.clientWidth);
        document.querySelector(".active_service").classList.remove("active_service");
        scrollIndicatorContainer.children[currentIndex].classList.add("active_service");
    });
});



  
  // Form submission with Ajax
  $("#ajaxForm").submit(function(e) {
    e.preventDefault();
    var action = $(this).attr("action");
    $.ajax({
      type: "POST",
      url: action,
      crossDomain: true,
      data: new FormData(this),
      dataType: "json",
      processData: false,
      contentType: false,
      headers: {
        Accept: "application/json"
      }
    })
      .done(function() {
        alert("The form was submitted successfully.");
      })
      .fail(function() {
        alert("An error occurred! Please try again later.");
      });
  });
  
  // Input handler function
  function input_handler(e) {
    const { name, value } = e;
  
    if (name === "tnc") {
      form.tnc = e.checked ? "yes" : "no";
    }
   
  }
  