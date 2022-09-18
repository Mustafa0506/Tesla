// Image


let door = document.querySelector('.door')
let car = document.querySelector('.car')
let door_inside = document.querySelector('.door_inside')


function carView() {

}

door.onclick = () => {
    car.style.backgroundImage = `url("./img/interior.png")`
}

door_inside.onclick = () => {
    car.style.backgroundImage = `url("./img/tesla.png")`
}




// speed


let speed_arrow_top = document.querySelector('.speed_arrow_top')
let speed_arrow_bottom = document.querySelector('.speed_arrow_bottom')
let val = document.querySelector('.value')
let km = +val.getAttribute('data-speed')

// kilometrs

let kilometrs = document.querySelector('.kilometrs')
let dis = +kilometrs.getAttribute('data-km')

speed_arrow_top.onclick = () => {
    km += 5
    dis -= 10

    if (km >= 100) {
        val.innerHTML = '100 км/ч'
        km = 100
        dis = 670
    } else {
        val.innerHTML = `${km} км/ч`
        kilometrs.innerHTML = `${dis} км`
    }


}

speed_arrow_bottom.onclick = () => {
    km -= 5
    dis += 10
    if (km <= 30) {
        val.innerHTML = '30 км/ч'
        km = 30
        dis = 810

    } else {
        val.innerHTML = `${km} км/ч`
        kilometrs.innerHTML = `${dis}км`
    }
}


// wheel

let wheel_arrow_top = document.querySelector('.wheel_arrow_top')
let wheel_arrow_bottom = document.querySelector('.wheel_arrow_bottom')
let wheel_value = document.querySelector('.wheel_value')
let rd = +wheel_value.getAttribute('data-wheel')

wheel_arrow_top.onclick = () => {
    rd++

    if (rd >= 21) {
        wheel_value.innerHTML = 21
        rd = 21
    } else {
        wheel_value.innerHTML = rd

    }
}

wheel_arrow_bottom.onclick = () => {
    rd--

    if (rd <= 18) {
        wheel_value.innerHTML = 18
        rd = 18
    } else {
        wheel_value.innerHTML = rd
    }
}

// temperature

let temperature_arrow_top = document.querySelector('.temperature_arrow_top')
let temperature_arrow_bottom = document.querySelector('.temperature_arrow_bottom')
let temVal = document.querySelector('.temperature_value')
let deg = +temVal.getAttribute('data-tem')

function turnOn() {
    temperature_arrow_top.onclick = () => {
        deg++
        dis--


        if (deg >= 30) {
            deg = 30
            temVal.innerHTML = `30°`
        } else {
            temVal.innerHTML = `${deg}°`
            kilometrs.innerHTML = `${dis} км`

        }
    }

    temperature_arrow_bottom.onclick = () => {
        deg--
        dis--

        if (deg <= 10) {
            deg = 10
            temVal.innerHTML = `10°`
        } else {
            temVal.innerHTML = `${deg}°`
            kilometrs.innerHTML = `${dis} км`

        }
    }

}

function turnOff() {
    temVal.innerHTML = `20°`
    kilometrs.innerHTML = `750км`
    dis = 750
}

// ac

let swich_off = document.querySelector('.swich_off')

swich_off.onclick = () => {
    swich_off.classList.toggle('ac_swich_on')

    if (swich_off.classList.contains('ac_swich_on')) {
        turnOn()
    } else {
        turnOff()
    }
}


// long_range

let swich_off_one = document.querySelector('.swich_off_one')
let interier_types = document.querySelector('.interier_types')
let equipment = document.querySelector('.equipment')
let vid = document.querySelector('.view')

swich_off_one.onclick = () => {
    swich_off_one.classList.toggle('ac_swich_on')
}

// view

let swich_on = document.querySelector('.swich_on')

swich_on.onclick = () => {

    swich_on.classList.toggle('swicher_off')

    if (swich_on.classList.contains('swicher_off')) {
        interier_types.style.display = "block"
        equipment.style.display = "none"
        car.style.backgroundImage = `url("./img/interior.png")`
        vid.style.right = '700px'
        vid.style.top = '915px'

    } else {
        interier_types.style.display = "none"
        equipment.style.display = "flex"
        car.style.backgroundImage = `url("./img/tesla.png")`
        vid.style.right = '100px'
        vid.style.top = '925px'
    }
}


// color

let black = document.querySelector('.black')
let white = document.querySelector('.white')
let gold = document.querySelector('.gold')

black.onclick = () => {
    car.style.backgroundImage = `url("./img/interior.png")`
}
white.onclick = () => {
    car.style.backgroundImage = `url("./img/white.png")`

}
gold.onclick = () => {
    car.style.backgroundImage = `url("./img/gold.png")`

}