class Box {
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        var options={
           restitution:0.8,
           density:1.0,
           friction:1.0
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
       World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}