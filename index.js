let board = (board) => {
    window.boardList = ['board5x5', 'board3x3']
    for(let i = 0; i < boardList.length; i++){
        if(boardList[i] === board){
            document.getElementById(boardList[i]).style.visibility = 'visible'
        }else{
            document.getElementById(boardList[i]).style.visibility = 'hidden'
        }
    }
    //  \/  setup stuff  \/
    //  \/  5x5 board setup  \/
    for(let i = 1; i < 26; i++){

        if(i < 25){
            document.getElementById(`tile-5-${i}`).innerHTML = i
        }

        if(i < 6){
            document.getElementById(`tile-5-${i}`).style.marginTop = '0px'
            document.getElementById(`sp-5-${i}`).style.marginTop = '0px'
        }else if(i < 11){
            document.getElementById(`tile-5-${i}`).style.marginTop = '100px'
            document.getElementById(`sp-5-${i}`).style.marginTop = '100px'
        }else if(i < 16){
            document.getElementById(`tile-5-${i}`).style.marginTop = '200px'
            document.getElementById(`sp-5-${i}`).style.marginTop = '200px'
        }else if(i < 21){
            document.getElementById(`tile-5-${i}`).style.marginTop = '300px'
            document.getElementById(`sp-5-${i}`).style.marginTop = '300px'
        }else if(i < 25){
            document.getElementById(`tile-5-${i}`).style.marginTop = '400px'
            document.getElementById(`sp-5-${i}`).style.marginTop = '400px'
        }else if(i === 25){
            document.getElementById(`sp-5-${i}`).style.marginTop = '400px'
        }

        if(i === 1 || i === 6 || i === 11 || i === 16 || i === 21){
            document.getElementById(`tile-5-${i}`).style.marginLeft = '0px'
            document.getElementById(`sp-5-${i}`).style.marginLeft = '0px'
        }else if(i === 2 || i === 7 || i === 12 || i === 17 || i === 22){
            document.getElementById(`tile-5-${i}`).style.marginLeft = '100px'
            document.getElementById(`sp-5-${i}`).style.marginLeft = '100px'
        }else if(i === 3 || i === 8 || i === 13 || i === 18 || i === 23){
            document.getElementById(`tile-5-${i}`).style.marginLeft = '200px'
            document.getElementById(`sp-5-${i}`).style.marginLeft = '200px'
        }else if(i === 4 || i === 9 || i === 14 || i === 19 || i === 24){
            document.getElementById(`tile-5-${i}`).style.marginLeft = '300px'
            document.getElementById(`sp-5-${i}`).style.marginLeft = '300px'
        }else if(i === 5 || i === 10 || i === 15 || i === 20){
            document.getElementById(`tile-5-${i}`).style.marginLeft = '400px'
            document.getElementById(`sp-5-${i}`).style.marginLeft = '400px'
        }else if(i === 25){
            document.getElementById(`sp-5-${i}`).style.marginLeft = '400px'
        }
    }
    //  /\  5x5 board setup  /\
    //  \/  3x3 board setup  \/
    for(let i = 1; i < 10; i++){

        if(i < 9){
            document.getElementById(`tile-3-${i}`).innerHTML = i
        }

        if(i < 4){
            console.log('sup')
            document.getElementById(`tile-3-${i}`).style.marginTop = '0px'
            document.getElementById(`sp-3-${i}`).style.marginTop = '0px'
        }else if(i < 7){
            document.getElementById(`tile-3-${i}`).style.marginTop = '100px'
            document.getElementById(`sp-3-${i}`).style.marginTop = '100px'
        }else if(i < 9){
            document.getElementById(`tile-3-${i}`).style.marginTop = '200px'
            document.getElementById(`sp-3-${i}`).style.marginTop = '200px'
        }

        if(i === 1 || i === 4 || i === 7){
            document.getElementById(`tile-3-${i}`).style.marginLeft = '0px'
            document.getElementById(`sp-3-${i}`).style.marginLeft = '0px'
        }else if(i === 2 || i === 5 || i === 8){
            document.getElementById(`tile-3-${i}`).style.marginLeft = '100px'
            document.getElementById(`sp-3-${i}`).style.marginLeft = '100px'
        }else if(i === 3 || i === 6){
            document.getElementById(`tile-3-${i}`).style.marginLeft = '200px'
            document.getElementById(`sp-3-${i}`).style.marginLeft = '200px'
        }else if(i === 9){
            document.getElementById(`sp-3-${i}`).style.marginLeft = '200px'
        }
    }
    //  /\  3x3 board setup  /\
    //  /\  setup stuff  /\
}






//  \/  movement  \/
let move = (tile, spnum, sp, id) => {
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
    for(let i = 1; i < spnum+1; i++){
        for(let j = 1; j < spnum; j++){
            if(xplus === document.getElementById(sp+i).style.marginLeft  && 
            tile.style.marginTop === document.getElementById(sp+i).style.marginTop){
                bright = true
                if(document.getElementById(sp+i).style.marginLeft === document.getElementById(id+j).style.marginLeft && 
                document.getElementById(sp+i).style.marginTop === document.getElementById(id+j).style.marginTop){
                    right = false
                }
            }

            if(xminus === document.getElementById(sp+i).style.marginLeft  && 
            tile.style.marginTop === document.getElementById(sp+i).style.marginTop){
                bleft = true
                if(document.getElementById(sp+i).style.marginLeft === document.getElementById(id+j).style.marginLeft && 
                document.getElementById(sp+i).style.marginTop === document.getElementById(id+j).style.marginTop){
                    left = false
                }
            }

            if(tile.style.marginLeft === document.getElementById(sp+i).style.marginLeft  && 
            yplus === document.getElementById(sp+i).style.marginTop){
                bdown = true
                if(document.getElementById(sp+i).style.marginLeft === document.getElementById(id+j).style.marginLeft && 
                document.getElementById(sp+i).style.marginTop === document.getElementById(id+j).style.marginTop){
                    down = false
                }
            }

            if(tile.style.marginLeft === document.getElementById(sp+i).style.marginLeft  && 
            yminus === document.getElementById(sp+i).style.marginTop){
                bup = true
                if(document.getElementById(sp+i).style.marginLeft === document.getElementById(id+j).style.marginLeft && 
                document.getElementById(sp+i).style.marginTop === document.getElementById(id+j).style.marginTop){
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
    for(let i = 0; i< boardList.length-1; i++){
        if(document.getElementById(boardList[i]).style.visibility === 'visible'){
            window.map = boardList[i]
        }
    }
    if(map === 'board5x5'){
        window.sspnum = 25
        window.ssp = 'sp-5-'
        window.sid = 'tile-5-'
    }else if(map === 'board3x3'){
        window.sspnum = 9
        window.ssp = 'sp-3-'
        window.sid = 'tile-3-'
    }
    for(let a = 0; a < x; a++){
        setTimeout(function(){
            //  \/  check for free space  \/
            for(let i = 1; i < sspnum+1; i++){
                let occupied = false
                for(let j = 1; j < 25; j++){
                    if(document.getElementById(ssp+i).style.marginTop === document.getElementById(sid+j).style.marginTop && 
                    document.getElementById(ssp+i).style.marginLeft === document.getElementById(sid+j).style.marginLeft){
                        occupied = true
                    }
                }
                if(occupied === false){
                    window.space = document.getElementById(ssp+i)
                }
            }
            //  /\  check for free space  /\

            let ydir = space.style.marginTop
            let y = space.style.marginTop
            y = y.split('')
            y.pop()
            y.pop()
            y = y.join('')
            yplus = +y+100+'px'
            yminus = +y-100+'px'


            let xdir = space.style.marginLeft
            let x = space.style.marginLeft
            x = x.split('')
            x.pop()
            x.pop()
            x = x.join('')
            xplus = +x+100+'px'
            xminus = +x-100+'px'

            //  \/  locate tiles around space  \/
            let dir = []
            for(let j = 1; j < sspnum; j++){
                if(yminus === document.getElementById(sid+j).style.marginTop && space.style.marginLeft === document.getElementById(sid+j).style.marginLeft){
                    dir.push('up')
                }
                if(yplus === document.getElementById(sid+j).style.marginTop && space.style.marginLeft === document.getElementById(sid+j).style.marginLeft){
                    dir.push('down')
                }
                if(xplus === document.getElementById(sid+j).style.marginLeft && space.style.marginTop === document.getElementById(sid+j).style.marginTop){
                    dir.push('right')
                }
                if(xminus === document.getElementById(sid+j).style.marginLeft && space.style.marginTop === document.getElementById(sid+j).style.marginTop){
                    dir.push('left')
                }
            }
            //  /\  locate tiles around space  /\

            //  \/  select and move tile  \/
            num = Math.floor(Math.random()*dir.length)
            for(let j = 1; j < sspnum; j++){
                if(dir[num] === 'up'){
                    if(yminus === document.getElementById(sid+j).style.marginTop && space.style.marginLeft === document.getElementById(sid+j).style.marginLeft){
                        document.getElementById(sid+j).style.marginTop = ydir
                    }
                }
                if(dir[num] === 'down'){
                    if(yplus === document.getElementById(sid+j).style.marginTop && space.style.marginLeft === document.getElementById(sid+j).style.marginLeft){
                        document.getElementById(sid+j).style.marginTop = ydir
                    }
                }
                if(dir[num] === 'left'){
                    if(xminus === document.getElementById(sid+j).style.marginLeft && space.style.marginTop === document.getElementById(sid+j).style.marginTop){
                        document.getElementById(sid+j).style.marginLeft = xdir
                    }
                }
                if(dir[num] === 'right'){
                    if(xplus === document.getElementById(sid+j).style.marginLeft && space.style.marginTop === document.getElementById(sid+j).style.marginTop){
                        document.getElementById(sid+j).style.marginLeft = xdir
                    }
                }
            }
            //  /\  select and move tile  /\
        }, a*2)
    }
}
//  /\  shuffle  /\

