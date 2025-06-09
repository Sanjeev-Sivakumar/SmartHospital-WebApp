const users = [
    {username: 'sam',password: '1234',role: 'doctor'},
    {username: 'sri',password: '4567',role: 'doctor'}
];

function login(){
    const username = document.getElementById('un').value;
    const password = document.getElementById('pwd').value;
    const errormessage = document.getElementById('error-message');

    const user = users.find(u => u.username === username && u.password === password);
    if(user){
        window.location.href='DoctorMain.html';
    }else{
        errormessage.style.display='block';
    }
}