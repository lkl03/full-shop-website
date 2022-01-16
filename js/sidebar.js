function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  document.getElementById("closebtn").addEventListener("click", closeNav)
  document.getElementById("openbtn").addEventListener("click", openNav)