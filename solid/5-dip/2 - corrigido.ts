class Main {
    private lowLevelModule: ModuleInterface

    doSomething() {
        // código de alto nível
        this.lowLevelModule.run()
    }
}

interface ModuleInterface{
    run() : void
}

class LowLevelModule implements ModuleInterface{
    run() {
        // código de baixo nível
    }
}

class AnotherLowLevelModule implements ModuleInterface {
    run() {
        // código de baixo nível
    }
}