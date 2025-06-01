const baseUrl = 'https://dt207g-moment-4.onrender.com/api';

// Registrering
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('register-username').value.trim();
  const password = document.getElementById('register-password').value.trim();

  try {
    const res = await fetch(`${baseUrl}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!res.ok) throw new Error('Registrering misslyckades');
    alert('Registrering lyckades! Du kan nu logga in.');
    e.target.reset();
  } catch (err) {
    alert(err.message);
  }
});

// Inloggning
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  try {
    const res = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!res.ok) throw new Error('Inloggning misslyckades');
    const data = await res.json();
    sessionStorage.setItem('jwt', data.token);
    alert('Inloggning lyckades!');
    window.location.href = 'protected.html';
  } catch (err) {
    alert(err.message);
  }
});
