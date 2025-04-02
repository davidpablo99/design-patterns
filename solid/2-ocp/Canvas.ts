class Canvas {
    private currentTool: string

    public draw() {
        if (this.currentTool === 'pen') {
            console.log('Drawing with a pen...')
        } else if (this.currentTool === 'pencil') {
            console.log('Drawing with a pencil...')
        }
    }
}
/*
Podemos seguir o princípio open-closed ao adicionar uma interface para permitir que nosso código em Canvas nunca precise ser modificado. Depois nós criamos implementações concretas dessa interface para cada ferramenta que tivermos. Com isso, se quisermos implementar novas ferramentas, não precisamos tocar em um linha do código já existente, basta implementar a interface:
No proximo arquivo
*/