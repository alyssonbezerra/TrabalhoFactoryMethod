import ISorvete from "../interfaces/ISorvete";


class SorveteDeMorango implements ISorvete{
    constructor(){
        this._sabor = "Morango";
    }

    private _sabor: String;
    saborear(): void {
        console.log(`Sorvete de ${this._sabor} foi saboreado`);
    }

}

export default SorveteDeMorango