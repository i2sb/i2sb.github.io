function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //   tabcontent[i].style.display = "none";
    // }
    tabcontent1 = document.getElementById("Deblurring");
    tabcontent1.style.display = "none";
    tabcontent2 = document.getElementById("JPEG");
    tabcontent2.style.display = "none";
    tabcontent3 = document.getElementById("Inpainting");
    tabcontent3.style.display = "none";
    tabcontent4 = document.getElementById("Super-resolution");
    tabcontent4.style.display = "none";

    // Get all elements with class="tablinks" and remove the class "active"
    tablink1 = document.getElementById("defaultOpen");
    tablink1.className = tablink1.className.replace(" active", "");
    tablink2 = document.getElementById("tablink-inpaint");
    tablink2.className = tablink2.className.replace(" active", "");
    tablink3 = document.getElementById("tablink-jpeg");
    tablink3.className = tablink3.className.replace(" active", "");
    tablink4 = document.getElementById("tablink-deblur");
    tablink4.className = tablink4.className.replace(" active", "");

    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function openTab2(evt, tabName) {
    // Declare all variables
    // var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent1 = document.getElementById("NFE-inpf20");
    tabcontent1.style.display = "none";
    tabcontent2 = document.getElementById("NFE-inpc");
    tabcontent2.style.display = "none";
    tabcontent3 = document.getElementById("NFE-deblur");
    tabcontent3.style.display = "none";

    // Get all elements with class="tablinks" and remove the class "active"
    tablink1 = document.getElementById("defaultOpen2");
    tablink1.className = tablink1.className.replace(" active", "");
    tablink2 = document.getElementById("tablink-nfe-inpc");
    tablink2.className = tablink2.className.replace(" active", "");
    tablink3 = document.getElementById("tablink-nfe-deblur");
    tablink3.className = tablink3.className.replace(" active", "");

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }