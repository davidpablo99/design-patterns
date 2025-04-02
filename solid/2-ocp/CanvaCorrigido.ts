class CanvasCorrigido {
    private currentTool: Tool
    public draw(){
        this.currentTool.draw()
    }
}

interface Tool{
    draw(): void
}

class PenTool implements Tool{
    draw(): void{
    console.log('Drawing with a pen...')
    }
}

class PencilTool implements Tool{
    draw(): void{
        console.log('Drawing with a pencil...')
    }
}