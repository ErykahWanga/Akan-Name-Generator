document.getElementById('akan-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const century = Math.floor(year / 100);
    const yearOfCentury = year % 100;

    // Formula to calculate day of the week
    const d = Math.floor(((century / 4) - 2 * century - 1 + (5 * yearOfCentury / 4) + (26 * (month + 1) / 10) + day) % 7);

    const dayOfWeek = (d + 7) % 7; // Ensure positive result for mod

    const akanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const result = document.getElementById('result');
    result.innerHTML = `You were born on a ${days[dayOfWeek]}, and your Akan name is ${akanNames[dayOfWeek]}.`;
});
