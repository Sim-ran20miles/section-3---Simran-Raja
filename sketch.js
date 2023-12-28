var splashscreen,background
var gameState="wait"
var playButton,aboutButton



function  preload() {
// splashscreen= loadImage("assets/splash.gif")    
// background = loadImage("assets/background.png")
bglevel1= loadImage("assets/level1bg.jpeg")


}

function setup(){
createCanvas(windowWidth,windowHeight)

// playButton = createImg("assets/playButton.png")

aboutButton = createImg("assets/settingsButton.png")
aboutButton.position(width/2.25,height-height/2.8)
aboutButton.size(100,100)

}

function draw(){
if(gameState=="wait"){
    // background(splashscreen)
    background("cyan")
    playButton.show()
    aboutButton.show()
}


aboutButton.mousePressed(()=>{
    background("blue")
    about()
    // playButton.hide()
    aboutButton.hide()
})

if(gameState=="play"){
    background(bglevel1)

}

}




function about() {
    swal({
        title: "HOW TO PLAY THE GAME !!!",
        text: "Go to a landmark by clicking on it. Each landmark has a different quest.",
        // imageUrl: "assets/splash.gif",
        // imageSize: "200x200",
        confirmButtonText: "LET THE QUEST BEGIN!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "wait"
        }
    )


}