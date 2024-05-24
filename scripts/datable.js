

const jogost = [
    {time1:"time1", time2: "time2", rounds1: 12, rounds2:10, stats:[
            {nome:"Zks", K:12, D:10, A:5, KD:1.80, ADR:111, HS: 0.79, KAST: 0.79, Rating: 1.64},
            {nome:"Allan", K:12, D:10, A:5, KD:1.80, ADR:118, HS: 0.80, KAST:0.79, Rating: 1.80},
            {nome:"Jimmy", K:12, D:10, A:5, KD:1.80, ADR:125, HS: 0.65, KAST: 0.79, Rating: 1.64}
        ]
    },
    {time1:"time2", time2: "time4", rounds1: 9, rounds2:12, stats:[
            {nome:"Zks", K:12, D:10, A:5, KD:1.80, ADR:111,  HS: 0.45, KAST: 0.79, Rating: 1.64},
            {nome:"Allan", K:12, D:10, A:5, KD:1.80, ADR:118, HS: 0.79, KAST:0.72, Rating: 1.80},
            {nome:"Jimmy", K:12, D:10, A:5, KD:1.80, ADR:125, HS: 0.75, KAST: 0.72, Rating: 1.64}
        ]
    },
];

/// mapper para facilitar a soma de valores dos arrays

let geralzaomap = {};
geralzaomap['Zks'] = { K:0, D:0, A:0, KD:0, ADR:0, HS: 0, KAST: 0, Rating: 0}
geralzaomap['Allan'] = { K:0, D:0, A:0, KD:0, ADR:0, HS: 0, KAST: 0, Rating: 0}
geralzaomap['Jimmy'] = { K:0, D:0, A:0, KD:0, ADR:0, HS: 0, KAST: 0, Rating: 0}

jogost.forEach((jogo) => {
    jogo.stats.forEach((player) => {
        geralzaomap[player.nome].K += player.K;
        geralzaomap[player.nome].A += player.A;
        geralzaomap[player.nome].D += player.D; 
        geralzaomap[player.nome].KD += player.KD;
        geralzaomap[player.nome].ADR += player.ADR;
        geralzaomap[player.nome].HS += player.HS;
        geralzaomap[player.nome].KAST += player.KAST;
        geralzaomap[player.nome].Rating += player.Rating;
    })
})


/// conversao pra array pra facilitar ordenacao e renderizacao

let geralzaoarray = [];

for (let ite in geralzaomap) {
    geralzaoarray.push({
        nome : ite,
        K : geralzaomap[ite].K,
        A : geralzaomap[ite].A,
        D : geralzaomap[ite].D, 
        KD : geralzaomap[ite].KD,
        ADR : geralzaomap[ite].ADR,
        HS : geralzaomap[ite].HS,
        KAST : geralzaomap[ite].KAST,
        Rating : geralzaomap[ite].Rating
    })
}


let Rating = geralzaoarray.sort(function(a, b){return a.Rating < b.Rating;});
let ADR = geralzaoarray.sort(function(a, b){return a.ADR < b.ADR;});
let KAST = geralzaoarray.sort(function(a, b){return a.KAST < b.KAST;});


let tableLine = document.getElementById("tablePlayer");

geralzaoarray.forEach((element, index) => {
    let tr = document.createElement("tr");
    for (let i in element) {
        let td = document.createElement("td");
        const newContent = document.createTextNode(element[i]);
        td.appendChild(newContent);
        tr.appendChild(td);
    }
    tableLine.appendChild(tr);
})
