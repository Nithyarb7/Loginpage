<script>
      function checkPassword() {
			const	password1 = document.getElementById('new-password').value;
			const	password2 = document.getElementById('password').value;

				if (password1 == '')
					alert ("Please enter Password");
				
				else if (password2 == '')
					alert ("Please confirm password");
						
				else if (password1 != password2) {
					alert ("Password did not match: Please try again...");
        }
				else{
					alert("Password Matched !")
				}
			}
</script>
