// Write your script here
const form=document.getElementById('name')
const passwordForm=document.getElementById('passwordForm')
const logout=document.getElementById('logout')

const firstname=document.getElementById('firstname')
const lastname=document.getElementById('lastname')

let user=JSON.parse(localStorage.getItem('user'))


if(user==null){
   // alert('please signin to access profile')  
   // window.location.href='../login/index.html'
    user={}
     
}

firstname.value=user.firstname
lastname.value=user.lastname

form.addEventListener('submit', function(event){
    event.preventDefault();
    //console.log(event.target.elements.firstname.value)
    //console.log(event.target.elements.lastname.value)
    const users=JSON.parse(localStorage.getItem('users'))
    let user=JSON.parse(localStorage.getItem('user'))
    user.firstname=event.target.elements.firstname.value
    user.lastname=event.target.elements.lastname.value
    users[user.index]={...user}
    localStorage.setItem('user',JSON.stringify(user))
   
   
    localStorage.setItem('users',JSON.stringify(users))
    user=JSON.parse(localStorage.getItem('user'))
    event.target.elements.firstname.value=user.firstname
    event.target.elements.lastname.value=user.lastname
    alert('name changed!')
})

passwordForm.addEventListener('submit' ,function(event){
    event.preventDefault()
    const user=JSON.parse(localStorage.getItem('user'))
    const users=JSON.parse(localStorage.getItem('users'))
    if(event.target.elements.oldPassword.value==user.password){
        user.password=event.target.elements.newPassword.value
        users[user.index]={...user}  
        localStorage.setItem('user',JSON.stringify(user))
        
        localStorage.setItem('users',JSON.stringify(users))
        event.target.elements.oldPassword.value=''
        event.target.elements.newPassword.value=''
        event.target.elements.confirmPassword.value=''
       
        alert("password changed!")
    }
   else{
      alert("old password doesn't match")
   }
    
})

logout.addEventListener('click',function(){  
    const users=JSON.parse(localStorage.getItem('users'))
    const user=JSON.parse(localStorage.getItem('user'))
    users[user.index]={...user}
    localStorage.removeItem('cartItems')
    localStorage.removeItem('user')
    localStorage.setItem('users',JSON.stringify(users))
    window.location.href='../index.html'
 })

