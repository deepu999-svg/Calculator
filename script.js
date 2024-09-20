function calc() {
    const dob = new Date(document.getElementById('dob').value);
    const tob = document.getElementById('tob').value.split(':');
    dob.setHours(tob[0], tob[1]);

    const now = new Date();
    const ageinseconds = now - dob;

    const years = Math.floor(ageinseconds / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((ageinseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((ageinseconds % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ageinseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ageinseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ageinseconds % (1000 * 60)) / 1000);

    document.getElementById('result').innerHTML = `You are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds old.`;

    setTimeout(calc, 1000);
}
