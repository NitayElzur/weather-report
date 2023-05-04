let report;
const cityName = document.getElementById("city");
const date = document.getElementById("date");
const temp = document.getElementById("temperature");
const condition = document.getElementById("weather-condition");
const fluctuation = document.getElementById("fluctuation-temperature");
const langSelect = document.getElementById("selectLanguage");
let searchInput = {
    key: "3ea68bee82252b71bdf6e101e011401c",
    units: "metric",
    city: "tel-aviv",
    language: "en"
}
update();
document.body.addEventListener("keypress", (key) => {
    if (key.code === "Enter") {
        searchInput.city = document.getElementById("input").value;
        update();
    }
})
async function update() {
    try {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.city}&lang=${searchInput.language}&units=${searchInput.units}&appid=${searchInput.key}`)
            .then((res) => res.json())
            .then((json) => report = json);
        if(searchInput.language === "en") {
            cityName.innerText = report.name + ", " + report.sys.country;
            const currentDate = new Date().toString().split(" ");
            date.innerText = `${currentDate[0]} ${currentDate[1]} ${currentDate[2]} ${currentDate[3]}`;
        }
        else {
            cityName.innerText = report.name;
            const currentDate = new Date().toString().split(" ");
            date.innerText = `${currentDate[2]} ${currentDate[3]}`;
        }
        if (searchInput.units === "metric") {
            temp.innerText = Math.floor(report.main.temp) + "°C";
            fluctuation.innerText = Math.floor(report.main.temp_min) + "°C/ " + Math.floor(report.main.temp_min) + "°C";
        }
        else if (searchInput.units === "imperial") {
            temp.innerText = Math.floor(report.main.temp) + "°F";
            fluctuation.innerText = Math.floor(report.main.temp_min) + "°F/ " + Math.floor(report.main.temp_min) + "°F";
        }
        const currentCondition = report.weather[0].description;
        condition.innerText = currentCondition.charAt(0).toUpperCase() + currentCondition.slice(1);
        switch (report.weather[0].icon) {
            case ("01d"): {
                document.body.style.backgroundImage = 'url("https://media.istockphoto.com/id/162428248/photo/cloudscape.jpg?s=612x612&w=0&k=20&c=9yNkLzvPtJouuJw7XRuvKQ0rD9Dh_UksrKKlvtEpKMg=")'
            }break;
            case("01n"): {
                document.body.style.backgroundImage = 'url("https://media.istockphoto.com/id/162428248/photo/cloudscape.jpg?s=612x612&w=0&k=20&c=9yNkLzvPtJouuJw7XRuvKQ0rD9Dh_UksrKKlvtEpKMg=")'
            }break;
            case ("02d"): {
                document.body.style.backgroundImage = 'url("https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=")'
            } break;
            case ("02n"): {
                document.body.style.backgroundImage = 'url("https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=")'
            } break;
            case ("03d"): {
                document.body.style.backgroundImage = 'url("https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=")'
            } break;
            case ("03n"): {
                document.body.style.backgroundImage = 'url("https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=")'
            } break;
            case ("04d"): {
                document.body.style.backgroundImage = 'url("https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=")'
            } break;
            case ("04n"): {
                document.body.style.backgroundImage = 'url("https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=")'
            } break;
            case ("11d"): {
                document.body.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpjSAwW2zl1JLQ61z5krxfB6x_0vwwxel7A&usqp=CAU")'
            } break; 
            case ("09d"): {
                document.body.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBWbY1V5VFZ8RdqJAKK3L3aoMJWwfqlVV2Q&usqp=CAU")'
            } break;
            case ("09n"): {
                document.body.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBWbY1V5VFZ8RdqJAKK3L3aoMJWwfqlVV2Q&usqp=CAU")'
            } break;
            case ("10d"): {
                document.body.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBWbY1V5VFZ8RdqJAKK3L3aoMJWwfqlVV2Q&usqp=CAU")'
            } break;
            case ("10n"): {
                document.body.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBWbY1V5VFZ8RdqJAKK3L3aoMJWwfqlVV2Q&usqp=CAU")'
            } break;
            case ("13d"): {
                document.body.style.backgroundImage = 'url("https://ichef.bbci.co.uk/news/976/cpsprodpb/125B0/production/_128748157_gettyimages-1247431984.jpg")'
            }break;
            case ("13n"): {
                document.body.style.backgroundImage = 'url("https://ichef.bbci.co.uk/news/976/cpsprodpb/125B0/production/_128748157_gettyimages-1247431984.jpg")'
            }break; 
        }
        // console.log(report) 
    }
    catch (error) {
        cityName.innerText = "The city you entered does not exist, make sure you spelled it correctly";
        cityName.style.textAlign = "center";
        date.innerText = "";
        temp.innerText = "";
        condition.innerText = "";
        fluctuation.innerText = "";

    }
}
const tempChangeButton = document.getElementById("tempMeasureChange");
tempChangeButton.addEventListener("click", () => {
    if (tempChangeButton.innerText === "Switch to F°") {
        searchInput.units = "imperial";
        tempChangeButton.innerText = "Switch to C°";
        update();
    }
    else {
        searchInput.units = "metric";
        tempChangeButton.innerText = "Switch to F°";
        update();
    }
});
langSelect.addEventListener("change", () => {
    for (let i = 0; i < langSelect.childElementCount; i++) {
        if (langSelect.children.item(i).selected) {
            searchInput.language = langSelect.children.item(i).value;
        }
    }
    update();
    // console.log(searchInput.language)
});