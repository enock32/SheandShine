var optionsOpen = document.getElementById("optionsOpen")
var optionsClose = document.getElementById("optionsClose")
var menuSlider = document.getElementById("menuSlider")
var makeup = document.getElementById("makeup")
var hairstyle = document.getElementById("hairstyle")
var manicure = document.getElementById("manicure")
optionsOpen.onclick = function openMenu() {
    menuSlider.style.left = 0+"%"
}
optionsClose.onclick = function openMenu() {
    menuSlider.style.left = "-"+60+"%"
}

window.addEventListener("scroll",()=>{
    var makeupTop = makeup.getBoundingClientRect().top;
    var hairstyleTop = hairstyle.getBoundingClientRect().top;
    var manicureTop = manicure.getBoundingClientRect().top;
    const screenHeight = window.innerHeight

    if(makeupTop < screenHeight - 50){
        makeup.classList.add("show")
    }
    if(hairstyleTop < screenHeight - 50){
        hairstyle.classList.add("show")
    }
    if(manicureTop < screenHeight - 50){
        manicure.classList.add("show")
    }
})