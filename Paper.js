class Paper
{
    constructor(x,y,w)
    {
        this.x=x;
        this.y=y;
        this.w=w;
        this.options={
            density:1.2,
            isStatic:false,
            friction:0.5,
            restitution:0.3
        }
        this.body=Bodies.circle(this.x,this.y,this.w,this.options);
        console.log(this.body.position);
        World.add(world,this.body);
    }
    display()
    {
        //ellipseMode(RADIUS);
        fill("yellow");
        var pos=this.body.position;
        ellipse(pos.x,pos.y,this.w);
    }
}