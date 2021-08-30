
        

async function covid(){
    // let countryName = window.localStorage.getItem ("countryName")
    let countryName = window.localStorage.getItem ("countryName")
    // console.log(countryName)
    const apis = await fetch("https://covid-api.mmediagroup.fr/v1/cases")
    const datas = await apis.json();
    const data1=(Object.values(datas))

console.log(data1)
    // console.log(data1.forEach((element)=>console.log(element.All.country)))
    try{
        data1.forEach((value)=>{
            if(countryName == value.All.country){
               (forloop(value))
            }
        })
    }catch{
        return ("sorry")
    }
  
}

//  covid();


function search(){
    let searchName = document.querySelector(".searchtext").value
    let cases = searchName.slice(0,1).toUpperCase();
    let restNameCase = searchName.slice(1,searchName.length).toLowerCase();
    let concatFull = cases + restNameCase
    window.localStorage.setItem ("countryName" , concatFull )
}

function forloop(value){

     document.querySelector(".numbers1").innerHTML = `
     <h1 class="statsvalue">CONFIRMED</h1>
     <i class="fas fa-check-double fa-3x icon-1"></i>
     <p class="digit"> ${value.All.confirmed}</p>
     `

     document.querySelector(".numbers2").innerHTML = `
     <h1 class="statsvalue">DEATHS</h1>
     <i class="fas fa-skull-crossbones fa-3x icon-2"></i>
     <p class="digit"> ${value.All.deaths}</p>
     `
     document.querySelector(".numbers3").innerHTML = `
     <h1 class="statsvalue">RECOVERY</h1>
     <i class="fas fa-procedures fa-3x icon-3"></i>
     <p class="digit"> ${value.All.life_expectancy} / 100</p>
     `   
            
}


async function covid2(){
   

    const apis = await fetch("https://covid-api.mmediagroup.fr/v1/cases")
    const datas = await apis.json();
    const data1=(Object.values(datas))

    let black1 = document.createElement("div")
    black1.setAttribute("class","numbers1")
    black1.innerHTML=`
    <h1 class="statsvalue">WORLD CASES</h1>
    <i class="fas fa-check-double fa-3x icon-1"></i>
    <p class="digit"> ${datas.Global.All.confirmed}</p> 
    `
    let black2 = document.createElement("div")
    black2.setAttribute("class","numbers2")
    black2.innerHTML=`
    <h1 class="statsvalue">DEATHS</h1>
    <i class="fas fa-skull-crossbones fa-3x icon-2"></i>
    <p class="digit">${datas.Global.All.deaths}</p> 
    `
    let black3 = document.createElement("div")
    black3.setAttribute("class","numbers3")
    black3.innerHTML=`
    <h1 class="statsvalue">POPULATION</h1>
    <i class="fas fa-user-friends fa-3x icon-3"></i>
    <p class="digit"> ${datas.Global.All.population}</p> 
    `
    let appendingTo = document.querySelector(".statistics")
    appendingTo.append(black1,black2,black3)

    let footer = document.createElement("div")
    footer.setAttribute("class","last")
    footer.innerHTML = `
    <p id="date"> Updated : ${new Date().toLocaleDateString()}</p>
    `
    document.querySelector(".parent").append(footer)
}

covid2()


