class Partical{
    constructor(xPos){
        this.xPos = xPos

        // changeable variables
        this.fieldOfEffect = 20
        this.opacity = 0.1 
        this.speed = 1
        this.minWidth = 3
        this.maxWidth = 12
        this.opacityChangeRateIncrease = 0.05
        this.opacityChangeRateDecrease = 0.005
        this.maxOpacity = 0.7
        this.minOpacity = 0.03
        this.color = '0, 156, 173'
        this.respawn = 400


        this.dir = ((Math.random() - 0.3) * this.speed)
        this.width = ((Math.random() * (this.maxWidth - this.minWidth)) + this.minWidth)


    }

    move(){
        if((this.xPos > 0) && (this.xPos < 1400)){
            // console.log("greater")
            this.xPos += (this.dir * this.speed)
        }else{
            this.xPos = this.respawn
        }
    }

    checkMouseProximity(x){
        if(Math.sqrt((this.xPos - x) * (this.xPos - x)) < this.fieldOfEffect){
            if(this.opacity < this.maxOpacity){
                this.opacity += this.opacityChangeRateIncrease
            }
        }else{
            if (this.opacity > this.minOpacity){
                this.opacity -= this.opacityChangeRateDecrease
            }  
        }
    }
}