const selectBL = document.getElementById('selectBoxLeft')
const selectBR = document.getElementById('selectBoxRight')
const btnMtR = document.getElementById('btnMoveRight')
const btnMtL = document.getElementById('btnMoveLeft')

function MoveToRightBox(e){
    
    selectBR.append(e.target)
}

function MoveToLeftBox(e){
    selectBL.append(e.target)
}

function btnMoveToRightBox(){
    selectBR.append(selectBL.options[selectBL.selectedIndex])
}

function btnMoveToLeftBox(){
    selectBL.append(selectBR.options[selectBR.selectedIndex])
}


selectBL.addEventListener('dblclick',MoveToRightBox)
selectBR.addEventListener('dblclick',MoveToLeftBox)
btnMtR.addEventListener('click',btnMoveToRightBox)
btnMtL.addEventListener('click',btnMoveToLeftBox)