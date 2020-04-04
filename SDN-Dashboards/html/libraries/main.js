$(document).ready(function() {
  //  start open and close menu

  $(".open").click(function() {
    document.getElementById("Sidenav").style.width = "100%";
    // document.body.style.overflowX = "hidden";
  });
  $(".closebtn").click(function() {
    document.getElementById("Sidenav").style.width = "0";
  });

  //    end menu
  //  start scroll top
  var scrool = $("#scroll-up");
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 700) {
      scrool.show();
    } else {
      scrool.hide();
    }
  });
  scrool.click(function() {
    $("html,body").animate({ scrollTop: 0 }, 900);
  });
  //  end scroll top
  // style header boxShadow when  the scroll == 1000

  var header = $("header");

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 80) {
      $(header).addClass("fixed-top");
      header.css('boxShadow',' var(--boxShadow)');
    } else {
      $(header).removeClass("fixed-top");
      header.css('boxShadow',' none');
    }
  });
  //   style header boxShadow when  the scroll == 1000

  //    color active

  $("header .navmenu .linknav  a").click(function() {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
  });

  $(" .nav-menu .link-nav  a").click(function() {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
  });
  // end color active

  //  dark mode

  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');
  if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);
    if(currentTheme === 'dark'){
      toggleSwitch.checked = true;
    }
  }
  function switchTheme(e){

    if(e.target.checked){
      document.documentElement.setAttribute('data-theme','dark');
      localStorage.setItem('theme','dark');
    }
    else{
      document.documentElement.setAttribute('data-theme','light');
      localStorage.setItem('theme','light');
    }
  }
  toggleSwitch.addEventListener('change',switchTheme,false);

});
