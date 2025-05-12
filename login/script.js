document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    
    let users=JSON.parse(localStorage.getItem('users'))
    
    users=(users==null?[]:users)
    let user=undefined
    users.forEach((e,index) => {
      if(e.email==email && e.password==password){
        user={...e}
        user['index']=index
        
      }

    });
    if(user==undefined){
      alert('no such user!')
      return  
    }
    localStorage.setItem('user',JSON.stringify(user))
    window.location.href='../shop/index.html'

  });

/*
if(JSON.parse(localStorage.getItem('user'))!=null){
  alert('logout to access log in')
  window.history.back();
}  
  */