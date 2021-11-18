class CanvasController{
    constructor(width, height, mouse, canvas){
        this.innerWidth = width
        this.innerHeight = height
        this.mouse = mouse
        this.c = canvas
        this.allMyLines = []
        this.noOfLines = 100
    }

    init(innerWidth, innerHeight){
        this.innerWidth = innerWidth
        this.innerHeight = innerHeight
        for(let i = 0; i < this.noOfLines; i++){
            let line = new Partical((Math.random() * 1000))
            this.allMyLines.push(line)
        }
        console.log(-20 * -20)
        console.log(Math.sqrt(400))
    }

    draw(c){
        c.clearRect(0, 0, this.innerWidth, this.innerHeight);
        // console.log("draw")
        // console.log(this.allMyLines[0].xPos)
        for(let i = 0; i < this.allMyLines.length; i++){
            let p = this.allMyLines[i]
            p.move()
            p.checkMouseProximity(this.mouse.x)
            c.beginPath()
            c.moveTo(p.xPos, 0);
            c.lineWidth = p.width
            c.lineTo(p.xPos, 1000);
            c.strokeStyle = `rgba(${p.color}, ${p.opacity})`;
            c.stroke();          
        }
    }

    mouseDown(){
        console.log("mouse was clicked")
    }

}