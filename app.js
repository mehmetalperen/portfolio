const UIcontrol = (function() {


const DOMstrings = {

     sectionIntro : "#section-intro",//home page
     pushingManSlideContainer : ".pushing-man-slide-container",
     greedingContainer : ".greeding-container",
     ppImg : ".pp-img",
     greedingMessage : ".greeding-message",
     slide : ".slide",
     aboutPageBtn : ".about-page-btn",
     getToKnowMeP: ".getToKnowMe-p",
     pushingMan : ".pushingMan",
     aboutPage:"#about-page-btn",
     goToAboutMe: "#go-to-about-me",
     bioPageSection:"#about-me-section",//BIO Page
     extraInfoContainer:".extra-info-container",
     bioContainr:".bio-container",
     dateVal: ".date-val"//footer
}






return {
    getDOMstrings: function() {
        return DOMstrings;
    },
    loadingAnimation: function () {
    const tl = new TimelineMax();

    tl.fromTo(
    document.querySelector(DOMstrings.pushingManSlideContainer),
    3,
    {x: "0%",},
    {x: "200%",opacity: "10", ease: Power2.easeIn, display: "none"}
    ).fromTo(
    document.querySelector(DOMstrings.ppImg), 
    1, 
    {y: "-100%", opacity: "0"}, 
    {y: "0%",opacity: "10", ease: Power2.easeInOut}
    ).fromTo(
    document.querySelector(DOMstrings.aboutPageBtn),
    1,
    {y:"200%", opacity: "0"},
    {y:"0%",opacity: "10", ease: Power2.easeInOut}
    ).fromTo(
    document.querySelector(DOMstrings.greedingMessage),
    2,
    {opacity: "0"},
    {opacity: "10", ease: Power2.easeInOut}
    ).fromTo(
    document.querySelector('.let'),
    2,
    {opacity: "0"},
    {opacity: "10", ease: Power2.easeInOut},
    "-=0.1.1"
    ).fromTo(
    document.querySelector(DOMstrings.getToKnowMeP),
    2,
    {opacity: "0"},
    {opacity: "10", ease: Power2.easeInOut},
    "-=0.1.1"
    )
    }, 
    changeButtonVar: function() {
        document.querySelector(DOMstrings.getToKnowMeP).innerHTML = "true"
    }, 
    bioPageAnimation: function() {
        /*
        extraInfoContainer:".extra-info-container",
     bioContainr:".bio-container"*/
     const tl = new TimelineMax();

    tl.fromTo(
        document.querySelector(DOMstrings.bioContainr), 
        4, 
        {opacity: "0", height: "0"}, 
        {opacity: "10", height:"100%", ease: Power2.easeInOut}
    ).fromTo(
        document.querySelector(DOMstrings.extraInfoContainer), 
        3, 
        {x: "-100%", opacity: "0", height: "0"}, 
        {x: "0%",opacity: "10", height:"100%", ease: Power2.easeInOut},
        "-=0.1.1"
        )
        

    }
}
})();


const AppControl = (function(UIcntrl){

    const domStrings = UIcntrl.getDOMstrings();

    /*
    sectionIntro : ".section-intro",
     pushingManSlideContainer : ".pushing-man-slide-container",
     greedingContainer : ".greeding-container",
     ppImg : ".pp-img",
     greedingMessage : ".greeding-message",
     slide : ".slide",
     aboutPageBtn : ".about-page-btn",
     getToKnowMeP: ".getToKnowMe-p",
     pushingMan : ".pushingMan",
    */

    function setEventListeners() {


        //handle "get to know me button clicked" button click
        document.querySelector(domStrings.goToAboutMe).addEventListener('click', function(event) {
            event.preventDefault();
            UIcntrl.changeButtonVar();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            })
            UIcntrl.bioPageAnimation();
            document.querySelector("body").style.overflow = "visible";


        });

       
    }

    


    return {
        initial: function() {

            UIcntrl.loadingAnimation();
            setEventListeners();
            document.querySelector("body").style.overflow = "hidden";

            var date = new Date()
            date = date.getFullYear();
            document.querySelector(domStrings.dateVal).innerHTML = date
        }
    }
})(UIcontrol)

const startApp = (function() {
    AppControl.initial();
})();

