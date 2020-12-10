const api = {
    key: "4f5837f4a14a0e5c6840df1a05fe1a9b",
    baseurl: "http://api.openweathermap.org/data/2.5/weather?q="
}
let secondStr = '&appid=' + api.key;
render = (data) => {
    let out = document.getElementById('output')
    out.innerHTML = ' '
    let h1 = document.createElement('h1')
    h1.innerHTML = data.main.name
    let kelvin = document.createElement('p')
    let deg = document.createElement('p')
    kelvin.innerHTML = "Кельвин " + data.main.temp
    let d = data.main.temp - 273.15
    deg.innerHTML = "В городе " + data.name + " температура " + d.toFixed(2) + " градусов"
    h1.innerHTML = "Город: " + data.name
    out.appendChild(h1)
    out.appendChild(kelvin)
    out.appendChild(deg)

    getMap(data.coord)
}
getMap = (coord) => {
    let divMap = document.createElement("div")
    divMap.id = "map"
    divMap.style.width = "500px"
    divMap.style.height = "400px"
    let output = document.getElementById('output')
    output.appendChild(divMap)
    let map;
    DG.then(function () {
        map = DG.map('map', {
            center: [coord.lat, coord.lon],
            zoom: 13,
        });
    });

}



search = async () => {
    let input = document.getElementById("country")
    let city = input.value
    let url = api.baseurl + city + secondStr
    let resp = await fetch(url)
    let result = await resp.json()
    console.log(result)
    render(result)

}

