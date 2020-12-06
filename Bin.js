class Bin{
  constructor(x,y,width,height){
     this.bin=Bodies.rectangle(x,y,width,height,{isStatic:true});
     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;
     World.add(world,this.bin);
 }   
 
 
 display(){
    
     rectMode(CENTER);
     fill("red");
     rect(this.bin.position.x,this.bin.position.y,this.width,this.height);
 }
 }