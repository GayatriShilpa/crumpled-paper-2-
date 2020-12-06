class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.8
        }
        
       this.body=Bodies.circle(x,y,radius,options);
       this.x=x;
       this.y=y;
       this.radius=20;
       this.image=loadImage("paper.png")
      

       World.add(world,this.body);
       }   
   
   
   display(){
      
       push ();
       translate(this.body.position.x,this.body.position.y);
       imageMode(CENTER);
       image(this.image,0,0,50,50);
       pop ();
   }
   }