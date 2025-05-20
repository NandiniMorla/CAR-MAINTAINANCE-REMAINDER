document.getElementById("carForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("carName").value.trim();
  const lastDate = new Date(document.getElementById("lastService").value);
  const interval = parseInt(document.getElementById("interval").value);
  const resultBox = document.getElementById("resultBox");

  if (!name || isNaN(lastDate) || isNaN(interval) || interval < 1) {
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `<p style="color: red;">❌ Please fill out all fields correctly.</p>`;
    return;
  }

  const nextDate = new Date(lastDate.getTime() + interval * 24 * 60 * 60 * 1000);
  const today = new Date();
  const overdue = today > nextDate;

  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
    <h3>${name} 🚘</h3>
    <p>🗓️ Last Service: <strong>${lastDate.toDateString()}</strong></p>
    <p>⏭️ Next Due: <strong>${nextDate.toDateString()}</strong></p>
    ${overdue 
      ? `<p style="color:red;">⚠️ Service is overdue! Book it ASAP.</p>` 
      : `<p style="color:green;">✅ You're good! Set a reminder for this date.</p>`}
  `;
});
