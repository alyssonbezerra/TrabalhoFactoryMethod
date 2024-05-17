import FabricaDeChocolate from "./classes/FabricaDeChocolate";
import FabricaDeMorango from "./classes/FabricaDeMorango";
import ISorvete from "./interfaces/ISorvete";


//Vamos instanciar nossas duas fábricas:
const fabricaSorveteChocolate = new FabricaDeChocolate();
const fabricaSorveteMorango = new FabricaDeMorango();

//Vamos criar uma variável ISorvete, que poderá receber qualquer objeto que implemente ISorvete
let sorvete: ISorvete;

//Agora vamos usar nossa fabrica de chocolate para criar um sorvete de chocolate e atribuí-lo a váriavel sorvete
sorvete = fabricaSorveteChocolate.FazerSorvete();

//vamos validar que sorvete, neste momento, é um sorvete de chocolote
sorvete.saborear();

//Agora vamos usar nossa fabrica de morango para criar um sorvete de morango e atribuí-lo a váriavel sorvete
sorvete = fabricaSorveteMorango.FazerSorvete();

//vamos validar que sorvete, neste momento, é um sorvete de morango
sorvete.saborear();