class Form{
    constructor(){
       
    }
    Hide(){

    }
    display(){
        title=createElement("h2");
        fill("white")
        title.html("Car Racing Game")
        title.position(200,-8)
         input=createInput("Name","text")
         input.size(150,30)
         buttun=createButton("OK")
         buttun.size(50,30)
        input.position(330,160)
        buttun.position(450,200)
        buttun.mousePressed(()=>{
            
           
           
            
            pcount+=1
    
            player.getName();
            player.updateName();
            
           playerCount+=1
            
            
            player.updateCount();
            
            
            gameState=INS
          
            
            
            
        })
    }

}