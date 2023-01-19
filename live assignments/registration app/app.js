cities = {0:'hyderabad',1:'delhi',2:'mumbai',3:'bangalore',4:'agra'}
btn = document.getElementById('btn')
btn.addEventListener('click',addParticipant);
function addParticipant(e){
    rand = Math.floor(Math.random(1) * 5)
    e.preventDefault();
    pname = document.getElementById('name').value 
    email = document.getElementById('email').value 
    age = document.getElementById('age').value
    output = document.getElementById('out-h1')
    if (parseInt(age)>=18 && parseInt(age) <= 24){
        text = "student with name " + pname + " and email " + email + " has been given the center : " + cities[rand]; 
        output.innerHTML = text; 
    }
    else{
        alert('Please enter valid age(18 to 24) ');
    }
    parray = [];
}