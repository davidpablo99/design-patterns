/*
Repare como essa implementação fere o princípio da segregação de interfaces ao conter métodos que, em determinados objetos, poderão nunca ser utilizados:

*/


interface TransactionRequest{
    handleDeposit: () => void
    handleWithdraw: () => void
    handleLoan: () => void
}

class IncomesController {
    private request: TransactionRequest

    deposit() {
        this.request.handleDeposit()
    }
}

class ExpensesController {
    private request: TransactionRequest

    withdraw() {
        this.request.handleWithdraw()
    }
}