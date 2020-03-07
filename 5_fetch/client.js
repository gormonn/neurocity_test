// Таблица совместимости async/await, fetch:
// https://caniuse.com/#search=async
// https://caniuse.com/#search=await
// https://caniuse.com/#search=fetch
document.addEventListener("DOMContentLoaded", init);
async function init(){
    let json = await getJson();
    drawJson(json);
}
async function getJson(){
    let url = 'http://localhost:3000/getData';
    let response = await fetch(url, {mode: 'cors'});
    
    if (response.ok) {
        let json = await response.json();
        return json;
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}
function drawJson(json){
    renderjson.set_icons('+', '-');
    document.getElementById("output").appendChild(renderjson(json));
}