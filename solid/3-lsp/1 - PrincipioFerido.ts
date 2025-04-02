/*
- 
- Repare como o código abaixo fere o princípio da substituição de Liskov. A classe RubberDuck, que seria um pato de borracha, precisa sobrescrever métodos da superclasse Duck porque ele não nada de verdade, apenas flutua, e não voa. Com isso temos uma subclasse que não é intercambiável com sua superclasse:

*/

class Duck {
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

class RubberDuck extends Duck {
    swim(): void {
        console.log("Floating")
    }

    fly(): void {
        throw new Error("can't fly")
    }
}