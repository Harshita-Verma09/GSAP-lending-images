var tl = gsap.timeline({
    repeat:-1,
})

tl.to(".imgContainer",{
    ease: Expo.easeInOut,
    width: "100%",
    duration:2,
    stagger:2,
   
},"a")
.to(".text h1",{
    ease: Expo.easeInOut,
    stagger:2,
    top: "0",
   

},"a")
.to(".text h1",{
    ease: Expo.easeInOut,
    stagger:2,
    top: "-100",
    delay: 2,
    
    

},"a")


const images = document.querySelectorAll('img');
images.forEach(img => {
    img.style.width = '95%'; // Set the desired width
});