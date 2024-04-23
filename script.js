gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#scroll"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();



function sap_trigger(){

var tl = gsap.timeline()

tl.from("#nav h3",{
    y:-50,
    delay:0.5,
    duration:0.6,
    opacity:0,
    stagger:0.3
})

tl.from("#main h1",{
    x:-500,
    duration:1,
    stagger:0.3,
    opacity:0,
})

tl.from("#main img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5
})

tl.to("#page2 h2",{
    transform:"translateX(-70%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#scroll",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})


var h1 = document.querySelectorAll("#page3 h2")

h1.forEach((h)=>{
    var clutter = ''
    var text = h.textContent
    var textSplit = text.split("")
    
    textSplit.forEach((letter)=>{
        clutter+=  `<span>${letter}</span>`
    })
    h.innerHTML = clutter
  
})  


tl.to("#page3 h2 span",{

    color:'#bf6519',
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page3 h2",
        scroller:"#scroll",
        start:"top 75%",
        end:"top 20%",
        // markers:true,
        scrub:1,
        
    }

})





}



sap_trigger()

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#scroll'),
//     smooth: true
// });




// gsap.to("#box",{
//     x:1450,
//     duration:2,
//     rotate:360,
//     delay:1,
//     backgroundColor:"blue",
// })



// gsap.from("#box",{
//     x:1500,
//     duration:2,
//     rotate:360,
//     delay:1,
//     backgroundColor:"blue",
// })

// var tl = gsap.timeline()
// tl.to('#box1',{

//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration:2,
  
// })

// tl.to('#box2',{

//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration:2,
    
// })
// tl.to('#box3',{

//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration:2,
    
// })