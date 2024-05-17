import IFabricaSorvete from "../interfaces/IFabricaSorvete";
import ISorvete from "../interfaces/ISorvete";
import SorveteDeMorango from "./SorveteDeMorango";

/*Fábrica de sorvete de morango, ela implementa IFabricaSorvete
 *e retorna o objeto SorveteDeMorango que por sua vez é uma implementação de ISorvete
*/
class FabricaDeMorango implements IFabricaSorvete{
    FazerSorvete(): ISorvete {
        const sorvete = new SorveteDeMorango();
        return sorvete;
    }

}

export default FabricaDeMorango;