function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = "yourpassword"; // 🔒 Change this!

  if (password === correctPassword) {
    window.location.href = "love.html";
  } else {
    document.getElementById('error').textContent = "Wrong password 💔 Try again!";
  }
}
