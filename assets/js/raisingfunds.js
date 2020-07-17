$(document).ready(function () {
  $("#link_header").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_nomination").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_benefits").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_features").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_evaluation").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_customer").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_question").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_message").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_company").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_contact").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_headerr").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_nominationn").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_benefitss").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_featuress").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_evaluationn").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_customerr").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_questionn").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_messagee").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_companyy").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("#link_contactt").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
});

const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const body = document.getElementById("body-area");
const navcolored = document.getElementsByClassName("navcolored");

menuIcon.addEventListener("click", function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = "0";
    slideoutMenu.style.pointerEvents = "none";
    // navcolored.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.5)";
    body.style.overflow = "auto";

    $(".hamburger").toggleClass("is-active");
  } else {
    slideoutMenu.style.opacity = "1";
    slideoutMenu.style.pointerEvents = "auto";
    body.style.overflow = "hidden";
    // navcolored.style.boxShadow = "none";
    $(".hamburger").toggleClass("is-active");
  }
});

(function () {
  $(".menu-lists").on("click", function () {
    $(".hamburger").toggleClass("is-active");
  });
})();

function closeNavSp() {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = "0";
    slideoutMenu.style.pointerEvents = "none";
    body.style.overflow = "auto";
    $(".hamburger").toggleClass("is-active");
  } else {
    slideoutMenu.style.opacity = "1";
    slideoutMenu.style.pointerEvents = "auto";
    $(".hamburger").toggleClass("is-active");
    body.style.overflow = "hidden";
  }
}

function tapClick(elem) {
  var a = document.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    a[i].classList.remove("active");
  }
  elem.classList.add("active");
}

// $('input.checks').on('change', function () {

//   if ($('input.checks:checked')) {
//     $('#lab').addClass('checked');
//   } else {
//     $('#lab').removeClass('checked');
//   }
// });

// function statecheck(layer) {

//   var myLayer = document.getElementById(layer);
//   var input = myLayer.getElementsByTagName('input')[0];

//   //myLayer.style.backgroundColor = "#bff0a1";
//   if (input.checked == true) {
//     myLayer.style.background = "#fffad3";
//     myLayer.style.border = "1px solid #ffe000 ";
//   } else {
//     myLayer.style.background = "white";
//     myLayer.style.border = "1px solid #707070 ";
//   };
// }

$(".checkname").click(function () {
  if ($(".checkname").is(':checked')) {
    $(".checkname2").prop("checked", false)
    $("#lab").addClass("checked");
    $("#lab2").removeClass("checked2");
  } else {
    $("#lab2").removeClass("checked2");
    $("#lab").removeClass("checked");
  }
});

$(".checkname2").click(function () {
  if ($(".checkname2").is(':checked')) {
    $(".checkname").prop("checked", false);
    $("#lab2").addClass("checked2");
    $("#lab").removeClass("checked");
  } else {
    $("#lab2").removeClass("checked2");
    $("#lab").removeClass("checked");
  }
});
// function onlyOne(checkbox) {
//   var checkboxes = document.getElementsByName("selected");
//   checkboxes.forEach((item) => {
//     if (item !== checkbox) item.checked = false;
//   });
// }

// $("#showMenuQa22").click(function () {
//   $("#menuQa22").slideToggle("fast");
//   if ($("#picQa22").attr("src") ===
//     "images/ic_minus_black.svg") {
//     $("#picQa22").attr(
//       "src",
//       "images/ic_plus_black.svg"
//     );
//   } else {
//     $("#picQa22").attr(
//       "src",
//       "images/ic_minus_black.svg"
//     );
//   }
// });

// $("#check").click(function () {
//   $("#lab").addClass("checked");
//   $("#lab2").removeClass("checked2");
// });
// $("#check2").click(function () {
//   $("#lab2").addClass("checked2");
//   $("#lab").removeClass("checked");
// });