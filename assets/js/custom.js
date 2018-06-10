window.onscroll = function() {
  growShrinkLogo()
};

function growShrinkLogo() {
  var Logo = document.getElementById("nav-logo")
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    Logo.style.width = '70px';
  } else {
    Logo.style.width = '90px';
  }
};