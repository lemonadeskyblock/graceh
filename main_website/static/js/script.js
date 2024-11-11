 
async function openCloseNavBar(openCloseNavBarText) {
    const navMenu = document.getElementById("navMenu");
    let navPos = navMenu.getBoundingClientRect();
    let navPosleft = - navPos.width;

    if (navPos.left === 0 || navPos.left === navPosleft) {    
        if (navMenu.style.display === "none") {
            navMenu.style.display = "block"
            navMenu.classList.add('in-progress');
            let slideIn = KUTE.fromTo(navMenu,
                {left:'-250vw'},
                {left:'0vw'},
                {
                duration: 500
                }
            );
            openCloseNavBarText.style.color= "black";
            awaitSlideIn = await slideIn.start();
            navMenu.classList.add('in-view');
            
        } else {
            
            
            let slideOut = KUTE.fromTo(navMenu,
                {left:'0vw'},
                {left: navPosleft},
                {
                    duration: 500
                    }
            );
            
            slideOutAwait = await slideOut.start();
            
            const twoS = {
                waitTwoSeconds: function() {
                setTimeout(() => {
                    navMenu.style.display="none"; 
                }, 500);
                }
            };
            twoS.waitTwoSeconds();
            navMenu.classList.remove('in-view');
            openCloseNavBarText.style.color = "white"; 
            
            
        } 
    }
}
/*https://wearetechwomen.com/inspirational-quotes-grace-hopper-computer-scientist-u-s-navy-rear-admiral/#:~:text=“Leadership%20is%20a%20two%2Dway,half%20empty%20nor%20half%20full.*/
var index = 0
var quotesArray = [];
async function loadQuotes() {
    const requestjson = new Request("quotes.json");
    fetch(requestjson)
        .then(response => response.json())
        .then((data) => {
            console.log(JSON.stringify(data));
             
            for (let i in data) {
                quotesArray.push(data[i]);
            }
            var quotesSpace  = document.getElementById("quotes");
            function fill ()    
            {
                if (index == 8) 
                    {
                    index = 0;
                    }
                console.log(`index: ${index}`);
                writeText(quotesSpace, quotesArray[index]);
                index++;
            }
            console.log(`time: ${quotesArray[index].length * 100}`)
            let lengthtxt = quotesArray[index].length 
            let calcwaitTime = (lengthtxt) => (lengthtxt < 100 ? lengthtxt * 120 / 1.5 : lengthtxt * 250);
            let waitingTime = calcwaitTime(lengthtxt);
            const fillQuoteSpace = setInterval(fill, waitingTime);
        })
        .catch(error => {
            console.log(error);
        })
}
function loadGlobal() {
    
     
        
     
}

function inView(element) {
    let rect = element.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight,window.innerHeight);
    
    if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
        
        return true
    } else {
        return false
    }
}

function blurContentAnimation(element) {
    if (!element.classList.contains('in-view')) {
        let BlurtoNormal = KUTE.fromTo(element,
            {opacity:'0'},
            {opacity:'1.0'},
            {
                
                duration: 5000
            }
        );
        BlurtoNormal.start();
         
        element.classList.add('in-view');
        console.log('blur content');
    }
}
 
let screenWidth = window.screen.width;

function growthAn(element) {
    
    if (!element.classList.contains('in-view')) {
        let growth = KUTE.fromTo(element,
            
            {width:'0'},
            {width: screenWidth},
            {
                delay: 1200,
                duration: 5000
            }
            

        );
        growth.start();
        element.classList.add('in-view');
    }  

}
function growthAnReversed(element) {
    if (element.classList.contains('in-view')) {
        let growthr = KUTE.fromTo(element,
            
            {width: screenWidth},
            {width: '0'},
            {
                delay: 0,
                duration: 3000
            }
            

        );
        growthr.start();
        element.classList.remove('in-view');

    }
}
function slideInAnimationRight(element) {
    if (!element.classList.contains('in-view')) {
        let slideInAn = KUTE.fromTo(element,
            {right:'480vw'},
            {right:'0vw'},
            {
                delay: 500,
                duration: 2000
            }
            

        );
        slideInAn.start();
        element.classList.add('in-view');
    }

}
async function loadsection2(imagebackground, textTitle, textContainer, toggleT) {
    if (!imagebackground.classList.contains('in-load')) {
            try {
                imagebackground.classList.add('in-load');
                blurContentAnimation(imagebackground);
                const a = await new Promise(resolve => setTimeout(resolve, 55));
                slideInAnimation(textTitle);
                textTitle.addEventListener("click", () => {
                    console.log("cliskc")
                    dropDown(toggleT, textContainer);
                })
                
            /*slideInAnimationRight(textContainer); */
            
            
        } catch (error) {
            reject(error);
        }
    }
    

}
function slideInAnimation(element) {
    if (!element.classList.contains('in-view')) {
        let slideInL = KUTE.fromTo(element,
            {left:'480vw'},
            {left:'0vw'},
            {
                delay: 500,
                duration: 2000
            }
            

        );
        slideInL.start();
        element.classList.add('in-view');
    }
}
async function writeText(TextElement, txt) {
    
    let stext = txt;
    let calcwaitTime = (stext) => (stext.length < 90 ? stext.length / 1.5 : stext.length);
    let waitTime = calcwaitTime(stext);
    TextElement.textContent = "";
    console.log(txt);
    
    console.log(typeof txt);
    console.log(stext.length);
    console.log(`waittime: ${calcwaitTime(stext)}`);
    console.log(`waittime: ${stext.length/1.5}`);
    for (let i = 0; i < txt.length; i++) {
        TextElement.textContent+= txt.charAt(i);
        
        
        await new Promise(resolve => setTimeout(resolve, 55));
         
    }
     
}

function dropDown(toggleElement, ElementToggled) {
    toggleElement.style.transform = 'rotate(0deg)';
    distanceUpDown = -toggleElement.getBoundingClientRect().height
    if (ElementToggled.style.display === 'block') {
        /* close dropdown*/
        let dropDownHideDropdown = KUTE.fromTo(ElementToggled,
            {top:'0px'},
            {top: distanceUpDown},
            {
                delay: 100,
                duration: 1000
            }
        );
        dropDownHideDropdown.start();  
         
        const twoS = {
            waitTwoSeconds: function() {
            setTimeout(() => {
                ElementToggled.style.display = 'none';
            }, 800);
            }
        };
        twoS.waitTwoSeconds();
         
         
    } else {
        /* Ideally get height of toggle elemet to make substraction */
        /* open dropdown*/

        toggleElement.style.transform = 'rotate(180deg)';
        
        let dropDownRevealDropdown = KUTE.fromTo(ElementToggled,
            {top: distanceUpDown },
            {top:'0px'},
            {
                duration: 1000
            }
        );
        dropDownRevealDropdown.start(); 
        ElementToggled.style.display = 'block';
         
        
         
        
    }

}
/** can be changed to arrow function remember arrow an this are immediatly invoked */
document.addEventListener("DOMContentLoaded", function() {
    
    


    /*openCloseNavBarText.addEventListener("click", function() {
        openCloseNavBar(openCloseNavBarText);
    */
    

})
function loadGlobal() {
    
    fetch("{% static 'img/GRACEhopper_long.jpg' %}")
    .then(response => response.text())
    .then(html => {
        document.getElementById("globalnav").innerHTML = html;
        console.log("result");
        return true
    })
    .then(success => {
        if (success) {
            openCloseNavBarText.addEventListener( "click", function() {
                openCloseNavBar(openCloseNavBarText);
            })
            loadQuotes();
        
        }
    })
    .catch((error) => {
        console.error(error)
    })
}

function scrollLeft(element, distance) {
    let scrollLeftcrossing = KUTE.fromTo(element,
    {left: 0},
    {left: distance},
    {
        
        duration: 100
    });
    scrollLeftcrossing.start();
}

function scrollRight(element, distance) {
    let scrollRightcrossing = KUTE.fromTo(element,
    {right: 0},
    {right:distance},
    {
        
        duration: 100
    });
    scrollRightcrossing.start();
}

function ScrollDown(currentScroll, lastscrollTop) {
    console.log(`currentScroll: ${currentScroll}, lastscrolltop ${lastscrollTop}`);
    if (currentScroll > lastscrollTop) {

        return true

    } else {

    return false

    }


}
function disableScroll() {
    var x = window.scrollX;
    var y = window.scrollY;
    console.log('disable scroll');
    window.onscroll = function(){window.scrollTo(x,y)}
}

function enableScrolling() {
    window.onscroll=function(){}
}