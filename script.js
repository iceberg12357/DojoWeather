let celcius = [24,18,27,19,21,16,26,21]
let fahrenheit = [75,65,80,66,69,61,78,70]

function toCelcius() {
    alert("celcius")
}

function toFahrenheit() {
    alert(`fahrenheit`)
}

function blah(v) {
    let values = celcius.slice()
    if (v == "F"){
        values = fahrenheit.slice()
    }
    for (i=0; i<celcius.length; i++){
        document.getElementById(`temp${i}`).innerHTML = `${values[i]}&#176;`
    }
    console.log(values)
}
function agree(){
    document.getElementById('cookies').remove()
}