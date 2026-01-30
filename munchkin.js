function decrement(id) {
    value = Number(document.getElementById(id).innerText);
    if (id == 'level' && value > 1 || id == 'bonus' && value > 0) {
        value--
        document.getElementById(id).innerText = value;
        document.getElementById(id + '-invert').innerText = value;

        updateStrength();
    }
}

function increment(id) {
    value = Number(document.getElementById(id).innerText);
    value++
    document.getElementById(id).innerText = value;
    document.getElementById(id + '-invert').innerText = value;

    updateStrength();
}

function updateStrength() {
    level = Number(document.getElementById('level').innerText);
    bonus = Number(document.getElementById('bonus').innerText);
    strength = level + bonus

    document.getElementById('strength').innerText = strength;
    document.getElementById('strength-invert').innerText = strength;

    saveValues(level, bonus);
}

function saveValues(level, bonus) {
    localStorage.setItem('level', level);
    localStorage.setItem('bonus', bonus);

    console.log('Level: ' + level);
}

function onLoad() {
    console.log('Getting values from localStorage...');
    level = Number(localStorage.getItem('level'));
    bonus = Number(localStorage.getItem('bonus'));

    document.getElementById('level').innerText = level;
    document.getElementById('level-invert').innerText = level;
    document.getElementById('bonus').innerText = bonus;
    document.getElementById('bonus-invert').innerText = bonus;

    strength = level + bonus;
    document.getElementById('strength').innerText = strength;
    document.getElementById('strength-invert').innerText = strength;
}

onLoad();