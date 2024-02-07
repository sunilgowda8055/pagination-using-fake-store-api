async function register() {
  const userNameValue = document.getElementById('name').value
  const emailValue = document.getElementById('email').value
  const passwordValue = document.getElementById('password').value

  console.log(userNameValue, emailValue, passwordValue)

  if (userNameValue === '' || emailValue === '' || passwordValue === '') {
    document.getElementById('error-message').textContent =
      'Please fill in all fields.'
    return
  }

  try {
    const response = await fetch('https://pantyhose-dugong.cyclic.app/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: userNameValue,
        email: emailValue,
        password: passwordValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to register')
    }

    const data = await response.json()
    const token = data.token // Assuming the server sends back the token directly

    if (token) {
      localStorage.setItem('token', token)
      window.location.href = 'login.html'
    } else {
      throw new Error('Token not received')
    }
  } catch (error) {
    console.error('Error:', error.message)
    // Handle error (display error message, redirect, etc.)
  }
}

function goToLogin() {
  window.location.href = './login.html'
}
