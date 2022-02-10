 document.getElementById('login').addEventListener('click', function(){
      const emailField = document.getElementById('user-email')
      const userEmail = emailField.value

      const passwordField = document.getElementById('user-password')
      const userPassword = passwordField.value

       if( userEmail == 'hasibul@gmail.com' && userPassword == '40420'){
          window.location.href = 'index2.html'
       }
    
 })