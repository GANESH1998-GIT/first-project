var tl = gsap.timeline()

tl.to('#full',{
    right:0,
    duration:0.5
})

tl.from("#full h4",{
    x:200,
    // duration:0.3,
    stagger:0.2,
    opacity:0
})

tl.from("#full i",{
    opacity:0
})

tl.pause()

function aaa(){
    tl.play()
}
function bbb(){
    tl.reverse()
}