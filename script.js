let date = new Date()
let dateY = date.getFullYear()
let dateM = date.getMonth()
let datBD = document.getElementById('dataBDAG')
let getStr = document.getElementById('getStrt')
let toSkil = document.getElementById('toSkills')
let toInte = document.getElementById('toInterests')
var y = window.scrollY
let BDAGLast = [2022, 2023, 2024]
let dict = {'2022':['1/6','2/6'], '2023':['3/6','4/6'],'2024':['5/6','6/6']}

for (var takeD in BDAGLast) {

    if (BDAGLast[takeD] == dateY) {

        dateY = dateY.toString()
        let defineP = dict[dateY]
        if (dateM <= 6) {

            datBD.innerText += ' - ' + defineP[0]

        } else {

            datBD.innerText += ' - ' + defineP[1]

        }

    }

}

if (window.scrollY) {

    window.scroll(0,0)

}

function scrl() {window.scroll(900,900)}
function scrl1() {window.scroll(2800,2800)}
function scrl2() {window.scroll(4400,4400)}
function toTop() {window.scroll(0,0)}