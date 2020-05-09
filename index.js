
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

//  \/  movement  \/
let move = (tile) => {
    tile = document.getElementById(tile)

    let y = tile.style.marginTop
    y = y.split('')
    y.pop()
    y.pop()
    y = y.join('')
    yplus = +y+100+'px'
    yminus = +y-100+'px'

    let x = tile.style.marginLeft
    x = x.split('')
    x.pop()
    x.pop()
    x = x.join('')
    xplus = +x+100+'px'
    xminus = +x-100+'px'

    let right = true
    let left = true
    let up = true
    let down = true
    let bright = false
    let bleft = false
    let bup = false
    let bdown = false
    for(let i = 1; i < 26; i++){
        for(let j = 1; j < 25; j++){
            if(xplus === document.getElementById(`sp-${i}`).style.marginLeft  && 
            tile.style.marginTop === document.getElementById(`sp-${i}`).style.marginTop){
                bright = true
                if(document.getElementById(`sp-${i}`).style.marginLeft === document.getElementById(`tile-${j}`).style.marginLeft && 
                document.getElementById(`sp-${i}`).style.marginTop === document.getElementById(`tile-${j}`).style.marginTop){
                    right = false
                }
            }

            if(xminus === document.getElementById(`sp-${i}`).style.marginLeft  && 
            tile.style.marginTop === document.getElementById(`sp-${i}`).style.marginTop){
                bleft = true
                if(document.getElementById(`sp-${i}`).style.marginLeft === document.getElementById(`tile-${j}`).style.marginLeft && 
                document.getElementById(`sp-${i}`).style.marginTop === document.getElementById(`tile-${j}`).style.marginTop){
                    left = false
                }
            }

            if(tile.style.marginLeft === document.getElementById(`sp-${i}`).style.marginLeft  && 
            yplus === document.getElementById(`sp-${i}`).style.marginTop){
                bdown = true
                if(document.getElementById(`sp-${i}`).style.marginLeft === document.getElementById(`tile-${j}`).style.marginLeft && 
                document.getElementById(`sp-${i}`).style.marginTop === document.getElementById(`tile-${j}`).style.marginTop){
                    down = false
                }
            }

            if(tile.style.marginLeft === document.getElementById(`sp-${i}`).style.marginLeft  && 
            yminus === document.getElementById(`sp-${i}`).style.marginTop){
                bup = true
                if(document.getElementById(`sp-${i}`).style.marginLeft === document.getElementById(`tile-${j}`).style.marginLeft && 
                document.getElementById(`sp-${i}`).style.marginTop === document.getElementById(`tile-${j}`).style.marginTop){
                    up = false
                }
            }
        }
    }

    if(up && bup){
        tile.style.marginTop = yminus
    }
    if(down && bdown){
        tile.style.marginTop = yplus
    }
    if(left && bleft){
        tile.style.marginLeft = xminus
    }
    if(right && bright){
        tile.style.marginLeft = xplus
    }
}
//  /\  movement  /\

//  \/  shuffle  \/
let shuffle = (x) =>{
    for(let a = 0; a < x; a++){
        //  \/  check for free space  \/
        for(let i = 1; i < 26; i++){
            let occupied = false
            for(let j = 1; j < 25; j++){
                if(document.getElementById(`sp-${i}`).style.marginTop === document.getElementById(`tile-${j}`).style.marginTop && 
                document.getElementById(`sp-${i}`).style.marginLeft === document.getElementById(`tile-${j}`).style.marginLeft){
                    occupied = true
                }
            }
            if(occupied === false){
                let space = document.getElementById(`sp-${i}`)
                console.log(`sp-${i}`)
            }
        }
        //  /\  check for free space  /\

        // for(let i = 1; i < 26; i++){
        //     for(let j = 1; j < 25; j++){

        //     }
        // }
    }
}
//  /\  shuffle  /\