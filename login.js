<script>
  const data=[{username:'a@gmail.com',password:"123",passwordStatus:'true'},{username:'b@gmail.com',password:"23",passwordStatus:'false'},{username:'ac@gmail.com',password:"12453",passwordStatus:'false'}]
   function checkPassword() {
			const	Username = document.getElementById('username').value;
			const	password = document.getElementById('password').value;
        if (Username == '')
					alert ("Enter Username");
				
				else if (password == '')
					alert ("Enter password");
						
				else if (Username != password) {
					alert ("Password did not match: Please try again...");
         }
			}
</script>
