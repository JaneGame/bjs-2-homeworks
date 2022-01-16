//Задача 1

function parseCount(number){
    if (Number.parseInt(number, 10) == NaN) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(number, 10);
    
}

function validateCount(number){
    try{
        return parseCount(number);
    }catch(err){
        return 'Внимание! Произошла страшная ошибка!';
    }
}

//Задача 2
class Triangle{
    constructor(side1, side2, side3){
    /*    if (side1<(side2+side3)&&side2<(side1+side3)&&side3<(side1+side2)) {
        throw new Error("Треугольник с такими сторонами не существует");
    }*/
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        
    }

    
    

    getPerimeter(){
        return this.side1+this.side2+this.side3;
    }

    getArea(){
        let area = Math.sqrt(this.getPerimeter()/2*(this.getPerimeter()/2-this.side1)*(this.getPerimeter()/2-this.side2)*(this.getPerimeter()/2-this.side3));
        return Number(area.toFixed(3)); 
    }
}