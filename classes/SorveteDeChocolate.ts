import ISorvete from "../interfaces/ISorvete";

class SorveteDeChocolate implements ISorvete{
    constructor(){
        this._sabor = "Chocolate";
    }

    private _sabor: String;
    saborear(): void {
        console.log(`Sorvete de ${this._sabor} foi saboreado`);
    }
}

export default SorveteDeChocolate;