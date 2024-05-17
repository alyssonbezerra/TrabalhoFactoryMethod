import IFabricaSorvete from "../interfaces/IFabricaSorvete";
import ISorvete from "../interfaces/ISorvete";
import SorveteDeChocolate from "./SorveteDeChocolate";

/*Fábrica de sorvete de chocolate, ela implementa IFabricaSorvete
 *e retorna o objeto SorveteDeChocolate que por sua vez é uma implementação de ISorvete
*/
class FabricaDeChocolate implements IFabricaSorvete{
    FazerSorvete(): ISorvete {
        const sorvete = new SorveteDeChocolate();
        return sorvete;
    }

}

export default FabricaDeChocolate;