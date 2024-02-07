async function register() {
  const userNameValue = document.getElementById('name').value
  const emailValue = document.getElementById('email').value
  const passwordValue = document.getElementById('password').value
  console.log(userNameValue, emailValue, passwordValue)

  try {
    const response1 = await fetch(
      'https://pantyhose-dugong.cyclic.app/signup',
      {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({
        name: userNameValue,
          email: emailValue,
          password: passwordValue,
        }),

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    )

    const data = await response1.json()
    console.log('data in register page', data)

    if(data){
      window.location.href='login.html'
    }
  } catch (error) {}
}
