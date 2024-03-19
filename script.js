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

tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5
})







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