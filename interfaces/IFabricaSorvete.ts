import ISorvete from "./ISorvete";

/*Quando qualquer classe assinar o contrato com essa interface, ela se torna uma fabrica de sorvete,
 *podendo fazer qualquer sorvete que assine ISorvete
*/
interface IFabricaSorvete {
    FazerSorvete(): ISorvete;
}

export default IFabricaSorvete;