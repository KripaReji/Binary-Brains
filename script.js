document.getElementById('agree').addEventListener('change', function() {
    document.getElementById('continue-btn').disabled = !this.checked;
});

document.getElementById('continue-btn').addEventListener('click', function() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
});

document.getElementById('matrimony-btn').addEventListener('click', function() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('matrimony-form').style.display = 'block';
});

document.getElementById('dating-btn').addEventListener('click', function() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('dating-form').style.display = 'block';
});

document.getElementById('submit-matrimony').addEventListener('click', function() {
    const age = document.getElementById('age').value;
    if (age < 20) {
        alert("This app is not for you, go and study kid.");
        return;
    } else {
        document.getElementById('matrimony-form').style.display = 'none';
        document.getElementById('personality-form').style.display = 'block';
    }
});

document.getElementById('continue-personality').addEventListener('click', function() {
    document.getElementById('personality-form').style.display = 'none';
    document.getElementById('ideal-form').style.display = 'block';
});

document.getElementById('submit-ideal').addEventListener('click', function() {
    document.getElementById('ideal-form').style.display = 'none';
    document.getElementById('match-result').style.display = 'block';
    const randomMatch = Math.floor(Math.random() * 101);
    document.getElementById('match-message').innerHTML = `Your match: ${randomMatch}% compatibility.`;
});

document.getElementById('enter-btn').addEventListener('click', function() {
    alert("No match found, we will notify you when we find the right match. 😊");
});

document.getElementById('submit-dating').addEventListener('click', function() {
    document.getElementById('dating-form').style.display = 'none';
    document.getElementById('profile-display').style.display = 'block';
});
