//serach: form submit reloading the page


const loginBtn = document.getElementById('button-login')

loginBtn.addEventListener('click', function (event){
    // website reload problem solve
    event.preventDefault();
    //console.log("login button click")
    const inputNumber = document.getElementById('inpt-number').value = "";
    const inputPassword = document.getElementById('inpt-pass').value = "";
    console.log(inputNumber,inputPassword)
    inputNumber.value = ''
    inputPassword.value = ''
    // vailded check ?
    if(inputNumber === '017' && inputPassword === '1234'){
        alert("Your Login Successfull");
        // js file maddoma onno html file jaw jonno amra ata use korta parbo 
        window.location.href = './home.html'
    }else{
        alert('wrong phone number and Pin')
    }
})