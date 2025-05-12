document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const firstname = form.elements.firstname.value;
    const lastname = form.elements.lastname.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    form.elements.firstname.value=''
    form.elements.lastname.value=''
    form.elements.email.value=''
    form.elements.password.value=''
    form.elements.confirmPassword.value=''

    let users=JSON.parse(localStorage.getItem('users'))
    users=users==null?[]:users
    users.push({firstname,lastname,email,password})
    localStorage.setItem('users',JSON.stringify(users))
    alert('user created!')


    
  });