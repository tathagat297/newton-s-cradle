class String{
    constructor(body1,body2,offsetX,offsetY)
      {
            this.offsetX =offsetX 
            this.offsetY =offsetY
            var options={
                bodyA:body1,
                bodyB:body2,
                pointB:{
                    x:this.offsetX,y:this.offsetY
                }
            }
            this.string=Constraint.create(options)
                World.add(world,this.string)
      }
    display(){
        var pointA = this.string.bodyA.position;
         var pointB = this.string.bodyB.position;
    strokeWeight(4);
    stroke("blue")
     line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
         }
}