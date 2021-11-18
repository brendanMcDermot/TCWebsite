var canvas = document.getElementById("home_canvas")

var mouse = {
    x: undefined,
    y: undefined,
    radius: 50
}

var c = canvas.getContext('2d');
var canvasController = new CanvasController(window.innerWidth, window.innerHeight, mouse, canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight + 40;


// event listeners
// find the cursor
window.addEventListener('mousemove', 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
        // console.log(`x: ${mouse.x} - y: ${mouse.y}`)
})

// resizing the window (responsive)
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasController.init(innerWidth, innerHeight)
})

// CBT
// canvas.addEventListener('mousedown', e => {
//     canvasController.mouseDown()
// });

// animation loop
function animate() {
    requestAnimationFrame(animate);
    canvasController.draw(c)
}

canvasController.init(innerWidth, innerHeight);
window.onload = animate();