interface IncomesRequest {
    handleDeposit: () => void
}

interface LoanRequest{
    handleLoan: () => void
}

interface ExpensesRequest{
    handleWithdraw: () => void
}

class IncomesController {
    private request: IncomesRequest

    deposit() {
        this.request.handleDeposit()
    }
}

class ExpensesController {
    private request: ExpensesRequest

    withdraw() {
        this.request.handleWithdraw()
    }
}