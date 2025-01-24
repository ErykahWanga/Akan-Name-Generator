document.getElementById('calculate-button').addEventListener('click', function () {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.getElementById('gender').value;

    if (!day || !month || !year || !gender) {
        alert('Please fill in all the fields.');
        return;
    }

    const CC = Math.floor(year / 100);
    const YY = year % 100;

    const d = Math.floor((CC / 4) - 2 * CC - 1) +
              Math.floor((5 * YY / 4)) +
              Math.floor((26 * (month + 1) / 10)) +
              day;

    const dayIndex = ((d % 7) + 7) % 7; // Ensures non-negative result

    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    const akanName = gender === 'male' ? maleNames[dayIndex] : femaleNames[dayIndex];

    document.getElementById('result').innerHTML = `<p>Your Akan name is: <strong>${akanName}</strong></p>`;
});
