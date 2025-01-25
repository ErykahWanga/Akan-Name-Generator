function generateAkanName() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const date = document.getElementById("date").value;
    const gender = document.getElementById("gender").value;
  
    if (!year || !month || !date || !gender) {
      document.getElementById("result").textContent = "Please fill in all fields.";
      return;
    }
  
    // Parse the date inputs
    const CC = Math.floor(year / 100); // Century
    const YY = year % 100; // Year within the century
    const MM = parseInt(month); // Month
    const DD = parseInt(date); // Date
  
    // Formula to calculate the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = Math.floor(( (CC / 4) - (2 * CC) - 1 + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD ) % 7);
  
    // Akan names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afia", "Ama"];
  
    // Get the corresponding Akan name based on gender and day of the week
    let akanName = "";
    if (gender === "male") {
      akanName = maleNames[dayOfWeek];
    } else if (gender === "female") {
      akanName = femaleNames[dayOfWeek];
    }
  
    // Output the result
    document.getElementById("result").textContent = `Your Akan name is: ${akanName}`;
  }
  