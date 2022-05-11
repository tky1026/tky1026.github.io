let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

let subtitle = document.querySelectorAll(".iocn-link a");
for (var i = 0; i < subtitle.length; i++) {
  subtitle[i].addEventListener("click", (e)=>{
    let subtitleParent = e.target.parentElement.parentElement.parentElement;//selecting main parent of arrow

    if (sidebar.classList.contains("close")) {
      if (!subtitleParent.classList.contains("showMenu")) {
        subtitleParent.classList.toggle("showMenu");
      }
    }
    else {
      subtitleParent.classList.toggle("showMenu");
    }

    if (sidebar.classList.contains("close")) {
      sidebar.classList.toggle("close");
    }
  });
}

let title = document.querySelectorAll(".sub-menu .link_name");
for (var i = 0; i < title.length; i++) {
  title[i].addEventListener("click", (e)=>{
    let titleParent = e.target.parentElement.parentElement.parentElement//selecting main parent of arrow
    if (!titleParent.classList.contains("showMenu")){
      titleParent.classList.toggle("showMenu");
    }
    if (sidebar.classList.contains("close")) {
      sidebar.classList.toggle("close");
    }
  })
}