let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.menu-navbar')
menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const nav = document.querySelector(".menu-navbar"),
      navlist = nav.querySelectorAll("li"),
      totalnavlist = navlist.length,
      allsection = document.querySelectorAll(".section"),
      totalsection = allsection.length;
      for(let i = 0 ; i<totalnavlist;i++)
        {
            const a = navlist[i].querySelector("a");
            a.addEventListener("click",function()
            {
                removebacksection();   
                for(let j =0;j<totalnavlist;j++){
                    if (navlist[j].querySelector("a").classList.contains("active")){
                        addbacksection(j);                       
                       // allsection[j].classList.add("back-section");
                    }
                    navlist[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active");
                showSection(this);
                if(window.innerWidth < 1200){
                    asidesectiontogglerbtn();
                }
            })
        }
      function removebacksection(){
        for(let i=0; i<totalsection;i++){
            allsection[i].classList.remove("back-section");
        }
      }
      function addbacksection(num){
        allsection[num].classList.add("back-section");
      }
      function showSection(element){
        for(let i=0; i<totalsection;i++){
            allsection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector( "#" + target ).classList.add("active");
      }
      function updateNav(element){
        for(let i =0;i<totalnavlist;i++){
            navlist[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if ( target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
                navlist[i].querySelector("a").classList.add("active");
            }
        }
      }
      document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionindex = this.getAttribute("data-section-index");
        // console.log(sectionindex);
        showSection(this);
        updateNav(this);
        removebacksection();
        addbacksection();
      })