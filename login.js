




async function login() {
  window.location.href='main.html'
  const emailValue = document.getElementById('username').value
  const passWordValue = document.getElementById('password').value

  console.log(emailValue, passWordValue)
  try {
    const response = await fetch(' https://pantyhose-dugong.cyclic.app/login', {
      method: 'POST',
      body: JSON.stringify({
        email: emailValue,
        password: passWordValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const userData = await response.json()
    localStorage.setItem('token', userData.data.data.token)

    if (localStorage.getItem('token')) {
      window.location.href = './main.html'
    }
  } catch (error) {
    console.log('Something Went Wrong')
  }
}
