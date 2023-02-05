
  let projectFront = document.querySelector(".projects-front");
  let projectBack = document.querySelector(".projects-back");
  let projectMobilie = document.querySelector(".projects-mobilie");

  let btn_top = document.querySelector(".to-top");

   showProject =(project)=>{

       if(project == "front"){
         alert("projetos frontEnd");
         projectFront.classList.add("projects-front-show");
         projectBack.classList.remove("projects-back-show");
         projectMobilie.classList.remove("projects-mobilie-show");
         btn_front.classList.add("active-btn");
         btn_back.classList.remove("active-btn");
         btn_mobilie.classList.remove("active-btn");
        }
       else if (project == "back"){
        alert("projetos backend");
        projectBack.classList.add("projects-back-show");
        projectFront.classList.remove("projects-front-show");
        projectMobilie.classList.remove("projects-mobilie-show");
        btn_front.classList.remove("active-btn");
        btn_back.classList.add("active-btn");
        btn_mobilie.classList.remove("active-btn");
       }
       else if (project == "mobilie"){
        alert("projetos mobilie"); 
        projectMobilie.classList.add("projects-mobilie-show");
        projectFront.classList.remove("projects-front-show");
        projectBack.classList.remove("projects-back-show");
        btn_front.classList.remove("active-btn");
        btn_back.classList.remove("active-btn");
        btn_mobilie.classList.add("active-btn");
       }
  }

   let btn_front = document.querySelector("#btn-front");
   let btn_back = document.querySelector("#btn-back");
   let btn_mobilie = document.querySelector("#btn-mobilie");

   

   btn_front.addEventListener("click",
   ()=>{
        showProject("front");
   });


   btn_back.addEventListener("click",
   ()=>{
        showProject("back");
   });

   btn_mobilie.addEventListener("click",
   ()=>{
        showProject("mobilie");
   });
       
   


   window.addEventListener("scroll",scrollFunction);
      
    function scrollFunction () {

        if(window.pageYOffset > 300){

           if(!btn_top.classList.contains("topEntrance")){
                             
               btn_top.classList.remove("topExit"); 
               btn_top.classList.add("topEntrance");  
               btn_top.style.display="flex";
               
                }

           
        }else{

         if(btn_top.classList.contains("topEntrance")){
            btn_top.classList.remove("topEntrance"); 
            btn_top.classList.add("topExit"); 
            setTimeout(()=>{
               btn_top.style.display="none";
            },250);
             

          }

        }
        
     }


   btn_top.addEventListener("click",backToTop);

    function backToTop(){
         window.scrollTo(0,0);
    }



   function getPhone(){
      alert(" meu telefone : (21) 99028-8543 ")
    }
    