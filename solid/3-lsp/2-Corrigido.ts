interface Quacker{
    quack():void
}

interface Swimmer{
    swim():void
}

interface Flyer{
    fly():void
}

class Duck2 {
    quack() {
        console.log("Quacking")
    }

    swim() {
        console.log("Swimming")
    }

    fly() {
        console.log("Flying")
    }
}

class RubberDuck2 implements Quacker, Swimmer {
    quack(): void {
        console.log("Quacking")
    }
    
    swim(): void {
        console.log("Floating")
    }
}