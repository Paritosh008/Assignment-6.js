#1.Perform the following operations to provide the implementation for aRectangle class. The operations are:
class Rectangle{
    constructor(length,breadth){
        this.length = length
        this.breadth = breadth
    }
    getArea(){
        area = this.length*this.breadth
        return area
    }
}

class Square extends Rectangle{
    constructor(length,breadth){
    super(length,breadth);
    }
}

let area = new Square(2,6)
console.log(area.getArea())
