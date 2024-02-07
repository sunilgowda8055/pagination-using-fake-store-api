



async function login() {
  const emailValue = document.getElementById('username').value
  const passWordValue = document.getElementById('password').value

  console.log('Email:', emailValue)
  console.log('Password:', passWordValue)

  if (emailValue === '' || passWordValue === '') {
    document.getElementById('error-message1').textContent =
      'Please fill in all fields.'
    return
  }

  try {
    const response = await fetch('https://pantyhose-dugong.cyclic.app/login', {
      method: 'POST',
      body: JSON.stringify({
        email: emailValue,
        password: passWordValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()
    const token = data.data.data.token // Assuming the server sends back the token directly

    if (token) {
      localStorage.setItem('token', token)
      window.location.href = './main.html'
    } else {
      throw new Error('Token not received')
    }
  } catch (error) {
    console.error('Error:', error.message)
    document.getElementById('error-message1').textContent =
      'An error occurred. Please try again later.'
  }
}

function goToRegister() {
  window.location.href = './index.html'
}
