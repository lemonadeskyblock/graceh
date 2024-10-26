 
function openCloseNavBar(openCloseNavBarText) {
    
    const navMenu = document.getElementById("navMenu");



    if (navMenu.style.display === "none") {
        navMenu.style.display = "block"

        let slideIn = KUTE.fromTo(navMenu,
            {left:'-250vw'},
            {left:'0vw'}
        );
        slideIn.start();

        openCloseNavBarText.style.color= "black";
         
         
    } else {
        let slideOut = KUTE.fromTo(navMenu,
            {left:'0vw'},
            {left:'-350vw'}
        );
        slideOut.start();
        const twoS = {
            waitTwoSeconds: function() {
               
              setTimeout(() => {
                navMenu.style.display="none";
                
              }, 1000);
            }
          };
          
          
        twoS.waitTwoSeconds();
        openCloseNavBarText.style.color= "white";
        
        
    }
     
}
/** can be changed to arrow function remember arrow an this are immediatly invoked */
document.addEventListener("DOMContentLoaded", function() {
    
    
    /**
     * 
     * openCloseNavBarText.addEventListener("click", function() {
        openCloseNavBar(openCloseNavBarText);
    })
     * 
     */
    

})