const data_mon = document.querySelector("#data_mon")
const data_tue = document.querySelector("#data_tue")
const data_wed = document.querySelector("#data_wed")
const data_thu = document.querySelector("#data_thu")
const data_fri = document.querySelector("#data_fri")
const data_sat = document.querySelector("#data_sat")
const data_sun = document.querySelector("#data_sun")

const price_mon = document.querySelector("#price_day_mon")
const price_tue = document.querySelector("#price_day_tue")
const price_wed = document.querySelector("#price_day_wed")
const price_thu = document.querySelector("#price_day_thu")
const price_fri = document.querySelector("#price_day_fri")
const price_sat = document.querySelector("#price_day_sat")
const price_sun = document.querySelector("#price_day_sun")

data_mon.addEventListener('click', function(){
    if (price_mon.style.opacity == "1"){
        price_mon.style.opacity = "0"
    }else{
        price_mon.style.opacity = "1"
}
})

data_tue.addEventListener('click', function(){
    if (price_tue.style.opacity == "1"){
        price_tue.style.opacity = "0"
    }else{
        price_tue.style.opacity = "1"
}
})

data_wed.addEventListener('click', function(){
    if (price_wed.style.opacity == "1"){
        price_wed.style.opacity = "0"
    }else{
        price_wed.style.opacity = "1"
}
})

data_thu.addEventListener('click', function(){
    if (price_thu.style.opacity == "1"){
        price_thu.style.opacity = "0"
    }else{
        price_thu.style.opacity = "1"
}
})

data_fri.addEventListener('click', function(){
    if (price_fri.style.opacity == "1"){
        price_fri.style.opacity = "0"
    }else{
        price_fri.style.opacity = "1"
}
})

data_sat.addEventListener('click', function(){
    if (price_sat.style.opacity == "1"){
        price_sat.style.opacity = "0"
    }else{
        price_sat.style.opacity = "1"
}
})

data_sun.addEventListener('click', function(){
    if (price_sun.style.opacity == "1"){
        price_sun.style.opacity = "0"
    }else{
        price_sun.style.opacity = "1"
}
})
