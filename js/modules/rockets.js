export const getMasaRockets = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets")
    let data = await res.json();
    let listMasa = []; 

    data.forEach((val, id) => {
        listMasa.push(val.mass.kg);
    });
    
    listMasa.sort((a,b) => b - a)
    data.push({
        kg_max: listMasa.shift(), 
    });
    return data;
}

export const getRocketsPayLoadWeights = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets");
    let data = await res.json();
    let payLoadWeigth = [];

    data.forEach((val) =>{
        payLoadWeigth.push(...val.payload_weights)
    });

    payLoadWeigth.sort((a,b)=> b.kg - a.kg)
    data.push({
        payload_weights: payLoadWeigth.shift().kg,
    });
    return data;
}

export const getHeightRockets = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets");
    let data = await res.json();
    let heightRockets = [];

    data.forEach((val) =>{
        heightRockets.push(val.height)
    })

    heightRockets.sort((a,b) => b.meters - a.meters)
    data.push({
        height: heightRockets.shift().meters
    });
    return data;
}

export const getDiameterRockets = async()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets");
    let data = await res.json();
    let diameterRocket = [];

    data.forEach((val) =>{
        diameterRocket.push(val.diameter)
    });

    diameterRocket.sort((a,b) => b.meters - a.meters)
    data.push({
        diameter: diameterRocket.shift().meters
    })

    return data;
}

export const getDiameterCompositeRockets = async()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets")
    let data = await res.json();
    let listaDiameterComposite = [];

    data.forEach((val) =>{
        listaDiameterComposite.push(val.second_stage.payloads.composite_fairing.diameter)
    });
    listaDiameterComposite.sort((a,b) => b.meters - a.meters)
    data.push({
        composite_diameter: listaDiameterComposite.shift().meters
    });
    return data
}

export const getHeightCompositeRockets = async()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets")
    let data = await res.json();
    let listaHeightComposite = [];

    data.forEach((val) =>{
        listaHeightComposite.push(val.second_stage.payloads.composite_fairing.height)
    });
    listaHeightComposite.sort((a,b) => b.meters - a.meters)
    data.push({
        composite_height: listaHeightComposite.shift().meters
    });
    return data;
}