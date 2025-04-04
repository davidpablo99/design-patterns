/*

repare como isso fere o princípio da inversão de dependências, pois estamos dependendo diretamente desses módulos. O que poderia dar errado? Bem, pode haver uma mudança no código de baixo nível e isso pode gerar uma cascata de modificações nos códigos de níveis superiores.

*/

class Main {
    private lowLevelModule: LowLevelModule

    doSomething() {
        // código de alto nível
        this.lowLevelModule.run()
    }
}

class LowLevelModule {
    run() {
        // código de baixo nível
    }
}