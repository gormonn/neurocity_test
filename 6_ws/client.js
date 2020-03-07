'use strict'

document.addEventListener("DOMContentLoaded", connectWs);
async function init(){
    connectWs();
}

function connectWs(){
    let url = 'ws://localhost:3000/6_ws'
    let ws = new WebSocket(url)

    ws.onopen = function (){
        console.log('WS connection is opened')
    }
    ws.onerror = function (err){
        console.log('WS connection error', err)
    }
    ws.onclose = function (){
        console.log('WS connection is closed')
    }
    ws.onmessage = function ({data}){
        console.log('WS message', data)
        let json = JSON.parse(data);
        drawJson(json);
    }
}

function drawJson(json){
    renderjson.set_icons('+', '-');
    document.getElementById("output").appendChild(renderjson(json));
}