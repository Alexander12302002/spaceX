import { 
    getMasaRockets,
    getRocketsPayLoadWeights,
    getHeightRockets,
    getDiameterRockets,
    getDiameterCompositeRockets,
    getHeightCompositeRockets
} from "./modules/rockets.js";
import { 
    progressRocketWeight, 
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket
} from "./modulesComponents/progressBar.js";


let information__2 = document.querySelector("#information__2");
let dataMasaRockets = await getMasaRockets();
let dataRocketsPayLoadWeight = await getRocketsPayLoadWeights();
let dataHeightRockets = await getHeightRockets();
let dataDiameterRockest = await getDiameterRockets()
let dataDiameterCompositeRocket = await getDiameterCompositeRockets()
let dataHeightCompositeRockets = await getHeightCompositeRockets()


let TotalMasaRocket = dataMasaRockets.pop()
let TotalPayLoadWeight = dataRocketsPayLoadWeight.pop()
let TotalHeightRocket = dataHeightRockets.pop()
let TotalDiameterRockest = dataDiameterRockest.pop()
let TotalDiameterCompositeRockest = dataDiameterCompositeRocket.pop()
let TotalHeightCompositeRockets = dataHeightCompositeRockets.pop()

let [Rockets1, Rockets2, Rockets3, Rockets4] = dataMasaRockets; 


information__2.append(...progressRocketWeight(TotalMasaRocket.kg_max, Rockets3))
information__2.append(...progressPayloadWeights(TotalPayLoadWeight.payload_weights, Rockets3))
information__2.append(...progressHeightRocket(TotalHeightRocket.height, Rockets3))
information__2.append(...progressDiameterRocket(TotalDiameterRockest.diameter, Rockets3))
information__2.append(...progressSecondStageDiameterRocket(TotalDiameterCompositeRockest.composite_diameter, Rockets3))
information__2.append(...progressSecondStageHeightRocket(TotalHeightCompositeRockets.composite_height, Rockets3))
