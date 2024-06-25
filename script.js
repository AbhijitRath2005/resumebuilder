function addnewqualification(){


let newNode=document.createElement('textarea')
newNode.classList.add('form-control')
newNode.classList.add('')
}
function generatecv(){
    // console.log("generating cv")
    let namefield= document.getElementById("namefield").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML= namefield;
    document.getElementById('nameT2').innerHTML=namefield
    document.getElementById('contactT').innerHTML= document.getElementById('contactfield').value
    document.getElementById('addressT').innerHTML=document.getElementById('addressfield').value
    document.getElementById('linkT').innerHTML=document.getElementById('linkdinfield').value
    document.getElementById('instaT').innerHTML=document.getElementById('instafield').value
    document.getElementById('fbT').innerHTML=document.getElementById('fbfield').value
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectivefield').value
    document.getElementById('aqT').innerHTML=document.getElementById('aqfield').value
    document.getElementById('weT').innerHTML=document.getElementById('wefield').value
    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display="block"

}
function printresume (){
    window.print()
}