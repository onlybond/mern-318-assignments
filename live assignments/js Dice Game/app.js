btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
    dice =  document.getElementById('container');
    dice.classList.add('rotate');
    let dice_sound = new Audio('dice.wav')
    dice_sound.play();
    setTimeout(() => {
        dice_face  = Math.floor((Math.random() *6) + 1);
        face = dice.appendChild(document.createElement('p'));
        face.classList.add('face');
        face.innerHTML = dice_face;
        dice.classList.remove('rotate');
        console.log(face.innerHTML);
    }, 5000);
    face.innerHTML = '';
    face.classList.remove('face');
});
