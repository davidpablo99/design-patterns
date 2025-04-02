class Customer {
    public getAge() {
        // calcula e retorna a idade do cliente
    }

    public save() {
        // salva um cliente no banco de dados
    }

    public display() {
        // exibe os dados do cliente na tela
    }

    public generateReport() {
        // gera um pdf com os dados do cliente
    }
}

/*- 

Podemos ver que ela tem muitas responsabilidades (ou “motivos para mudar”). Uma forma como podemos corrigir isso criando classes separadas para cada um desses métodos:
    
Obs.: Aqui estou mantendo tudo em um único arquivo e com métodos fictícios apenas para ilustrar o problema e a solução. Obviamente, em cenários reais esse processo seria mais complexo. 

*/

// Como podemos corrigir esse codigo?? >>

class Customer2 {
    public getAge() {
        // calcula e retorna a idade do cliente
    }
}

class CustumerRepository {
    private custumer: Customer
    public save() {
        // salva um cliente no banco de dados
    }
}

class CustumerView{
    public display() {
        // exibe os dados do cliente na tela
    }
}

class CustumerReportGenerator{
    public generateReport() {
        // gera um pdf com os dados do cliente
    }
}