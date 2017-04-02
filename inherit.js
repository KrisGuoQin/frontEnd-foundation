//组合式类继承
function Animal(legNums) {
    this.legNums = legNums;
    this.colors = ["red", "grey"];
}
Animal.prototype.sayLegNums = function() {
    alert("I have " + this.legNums + " legs");
}
Animal.prototype.run = function() {
    alert("I am running");
}

function Bird(legNums, wingNums) {
    //此处借用超类（父类）构造函数，
    //使子类拥有了超类的属性
    Animal.call(this, legNums);
    this.wingNums = wingNums;
}

// Bird.prototype.fly = function() {
//     alert("I am flying");
// }
//我们不能在指定子类的原型对象为父类的实例
//之前，在子类的原型上定义任何方法，因为下面的
//语句相当于给子类的原型对象重新赋值，以前定义在
//子类原型上的方法都不存在了。

Bird.prototype = new Animal();

//修复构造函数丢失问题
Bird.prototype.constructor = Bird;


Bird.prototype.fly = function() {
    alert("I am flying");
}

var crow = new Bird(2, 2);
crow.colors.push("blue");
alert(crow.colors);
crow.sayLegNums();
crow.fly();