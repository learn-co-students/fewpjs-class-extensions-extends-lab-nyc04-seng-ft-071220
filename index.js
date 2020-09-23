// Your code here
class Polygon {
    constructor(arr){
        this.arr = arr;
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter(){
       return this.arr.reduce((accumulator,currentValue) =>accumulator + currentValue);
    }
}

class Triangle extends Polygon{
    get isValid(){
        const a = this.arr[0];
        const b = this.arr[1];
        const c = this.arr[2];
        if(a+b<c || b+c<a || a+c<b){
            return false;
        }else{
            return true;
        }
    }
}

class Square extends Polygon{
    get isValid(){
        const a =this.arr[0];
        const itIsVaild = (side) => side ===a;
       return this.arr.every(itIsVaild);
    }

    get area(){
        const a = this.arr[0];
        const b = this.arr[1];
        let area;
        return area = a * b;
    }
}
