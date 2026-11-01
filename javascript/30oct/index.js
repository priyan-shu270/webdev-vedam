let canvas = document.querySelector('canvas')
let pen = canvas.getContext("2d")
// pen.fillStyle="green"
// pen.fillRect(500,200,50,50)
let arr = [[0,0]]
let cell = 50

function shape (){
    pen.clearRect(0,0,1200,600)
    for(let i of arr){
        pen.fillStyle="red"
        pen.fillRect(i[0],i[1],cell,cell)
    }
}

function update (){
    let headX = arr[arr.length-1][0]
    let headY = arr[arr.length-1][1]
    let newX = headX+cell
    let newY = headY
    arr.push([newX,newY])
    arr.shift()
}
setInterval(()=>{
    shape()
    update()
},200)