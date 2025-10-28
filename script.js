
function checkGrade(){
    let osenka =prompt(`ваша отценка?`)
    if(osenka >=90){
        alert(`краш!🏆`)
    }else if (osenka>70){
        alert(`нормально!👍`)
    }else if (osenka>=50){
        alert(`молодец!🙂`)
    }else if(osenka<=20){
        alert(`неполучилось!😒`)
    }
}

checkGrade()