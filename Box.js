class Box
{
    constructor(x,y,width,height)
    {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.options={
            isStatic:true
        }
        this.boxBody=Bodies.rectangle(this.x,this.y,this.width,this.height,this.options);
        World.add(world,this.boxBody);
    }
    display()
    {
        fill("red");
        var pos=this.boxBody.position;
        rect(pos.x-20,pos.y-20,this.width,this.height);
    }
}