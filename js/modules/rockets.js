export const getAllRockets = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets")
    let data = await res.json();
    return data;
}

export const getAllRocketsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
    let data = await res.json();
    return data;
}
export const getMasaRockets = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options":{
                "select":{
                    "name": 1,
                    "mass": 1
                },
            "sort":{
                "mass.kg": "desc"
            },
            "limit": 1
            }
        })

    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{mass} = maxMassRocket]} = await res.json();
    return mass;
}

export const getRocketsPayLoadWeights = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
        
            "options": {
                "select": {
                    "name": 1,
                    "payload_weights": 1
                },
                "sort":{
                    "payload_weights.kg": "desc"
                },
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs} = await res.json();
    let data = []
    docs.forEach(val => data.push(...val.payload_weights))
    data.sort((a,b) => b.kg - a.kg)
    let [maxPayloadWeightsRocket] = data;
    return maxPayloadWeightsRocket;
}

export const getHeightRockets = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options":{
                "select":{
                    "name": 1,
                    "height": 1
                },
                "sort":{
                    "height.meters": "desc"
                }
            }
        })
    }

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{height} = maxHeightRocket]} = await res.json();
    return height;
}

export const getDiameterRockets = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options":{
                "select":{
                    "name": 1,
                    "diameter": 1
                },
            "sort":{
                "diameter.meters": "desc"
            }
            }
        })
    }

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config)
    let {docs:[{diameter} = maxdiameterRocket]} = await res.json();
    return diameter;
}
export const getDiameterCompositeRockets = async()=>{     
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "second_stage.payloads.composite_fairing.diameter": 1
                },
                "sort": {
                    "second_stage.payloads.composite_fairing.diameter": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[maxDiameterCompositeFairingRocket ]} = await res.json();
    let {second_stage: {payloads: {composite_fairing: {diameter}}}} = maxDiameterCompositeFairingRocket
    return diameter;
}

export const getHeightCompositeRockets = async()=>{     
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select":{
                    "name": 1,
                    "second_stage": 1
                }
            },
            "sort":{
                "second_stage.payloads.composite_fairing.height.meters": "desc"
            }
        })
    }

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config)
    let {docs:[maxHeightCompositeFairingRocket ]} = await res.json();
    let {second_stage: {payloads: {composite_fairing: {height}}}} = maxHeightCompositeFairingRocket
    return height;
}
export const getAllRocketEngineTotal = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select":{
                    "engines": 1,
                }
            },
            "sort":{
                "engines.thrust_sea_level": "desc"
            }
        })
    }

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[{engines} = maxEnginesRocket]} = await res.json();
    return engines.thrust_sea_level;
}
export const getAllRocketEngineThrustVacuumTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "engines": 1
                },
                "sort": {
                    "engines.thrust_vacuum": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[{engines} = maxEnginesRocket]} = await res.json();
    return engines.thrust_vacuum;
}

export const getAllRocketFirstStageThrustVacuumTotal = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "first_stage": 1
                },
                "sort": {
                    "first_stage.thrust_vacuum.kN": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{first_stage} = maxEnginesRocket]} = await res.json();
    return first_stage.thrust_vacuum;
}

export const getAllRocketFirstStageThrustSeaLevelTotal = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "first_stage": 1
                },
                "sort": {
                    "first_stage.thrust_sea_level.kN": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{first_stage} = maxEnginesRocket]} = await res.json();
    return first_stage.thrust_sea_level;
}


export const getAllRocketSecondStageThrust = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "second_stage": 1
                },
                "sort": {
                    "second_stage.thrust.kN": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{second_stage} = maxEnginesRocket]} = await res.json();
    return second_stage.thrust;
}

export const getAllRocketsFuelAmountTons = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "first_stage": 1
                },
                "sort": {
                    "first_stage.fuel_amount_tons": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{first_stage} = maxEnginesRocket]} = await res.json();
    return first_stage.fuel_amount_tons;
}

export const getAllRocketsSecondStageFuelAmountTons = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "second_stage": 1
                },
                "sort": {
                    "second_stage.fuel_amount_tons": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{second_stage} = maxEnginesRocket]} = await res.json();
    return second_stage.fuel_amount_tons;
}