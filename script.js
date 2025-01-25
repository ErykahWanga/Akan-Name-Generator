document.getElementById('akanForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const birthDate = document.getElementById('birthDate').value;

    if (!gender || !birthDate) {
      alert('Please fill in all fields.');
      return;
    }

    const date = new Date(birthDate);
    const CC = Math.floor(date.getFullYear() / 100);
    const YY = date.getFullYear() % 100;
    const MM = date.getMonth() + 1;
    const DD = date.getDate();

    const dayOfWeek = Math.floor(((CC / 4) - 2 * CC - 1 + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7);
    const dayIndex = (dayOfWeek + 7) % 7; // Ensure positive index

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afia", "Ama"];

    const akanName = gender === 'male' ? maleNames[dayIndex] : femaleNames[dayIndex];

    document.getElementById('result').textContent = `Your Akan name is ${akanName}.`;
  });