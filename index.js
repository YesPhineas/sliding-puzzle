
//  \/  setup stuff  \/
for(let i = 1; i < 26; i++){
    if(i < 10){
        window['tile_0'+i] = document.getElementById(`tile-${i}`)
    }else{
        window['tile_'+i] = document.getElementById(`tile-${i}`)
    }

    if(i < 25){
        document.getElementById(`tile-${i}`).innerHTML = i
    }

    if(i < 6){
        document.getElementById(`tile-${i}`).style.marginTop = '0px'
        document.getElementById(`sp-${i}`).style.marginTop = '0px'
    }else if(i < 11){
        document.getElementById(`tile-${i}`).style.marginTop = '100px'
        document.getElementById(`sp-${i}`).style.marginTop = '100px'
    }else if(i < 16){
        document.getElementById(`tile-${i}`).style.marginTop = '200px'
        document.getElementById(`sp-${i}`).style.marginTop = '200px'
    }else if(i < 21){
        document.getElementById(`tile-${i}`).style.marginTop = '300px'
        document.getElementById(`sp-${i}`).style.marginTop = '300px'
    }else if(i < 25){
        document.getElementById(`tile-${i}`).style.marginTop = '400px'
        document.getElementById(`sp-${i}`).style.marginTop = '400px'
    }else if(i === 25){
        document.getElementById(`sp-${i}`).style.marginTop = '400px'
    }

    if(i === 1 || i === 6 || i === 11 || i === 16 || i === 21){
        document.getElementById(`tile-${i}`).style.marginLeft = '0px'
        document.getElementById(`sp-${i}`).style.marginLeft = '0px'
    }else if(i === 2 || i === 7 || i === 12 || i === 17 || i === 22){
        document.getElementById(`tile-${i}`).style.marginLeft = '100px'
        document.getElementById(`sp-${i}`).style.marginLeft = '100px'
    }else if(i === 3 || i === 8 || i === 13 || i === 18 || i === 23){
        document.getElementById(`tile-${i}`).style.marginLeft = '200px'
        document.getElementById(`sp-${i}`).style.marginLeft = '200px'
    }else if(i === 4 || i === 9 || i === 14 || i === 19 || i === 24){
        document.getElementById(`tile-${i}`).style.marginLeft = '300px'
        document.getElementById(`sp-${i}`).style.marginLeft = '300px'
    }else if(i === 5 || i === 10 || i === 15 || i === 20){
        document.getElementById(`tile-${i}`).style.marginLeft = '400px'
        document.getElementById(`sp-${i}`).style.marginLeft = '400px'
    }else if(i === 25){
        document.getElementById(`sp-${i}`).style.marginLeft = '400px'
    }
}
//  /\  setup stuff  /\


let move = (tile) => {
    document.getElementById(tile).style.marginTop = '400px'
}