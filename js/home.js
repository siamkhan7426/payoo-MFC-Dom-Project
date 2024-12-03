// step - 1 event kaj korta gela button ta key agie dorbo tar vitor kaj korbo bakai sob
// step - 2 preventDefault madddoma page relaod problem solve korbo
// step - 3 input gulo dora ney asa 
// step - 4 validation korbo if()

const butotnAddMoney = document.getElementById('btn-money')
butotnAddMoney.addEventListener('click', function (event){
    // web page realod problem
    event.preventDefault()
    //console.log("hello money")
    // 
    const inputAddAmount = document.getElementById('add-amount').value = "";
    const inputYourPin = document.getElementById('your-pin').value = "";
    console.log(inputAddAmount, inputYourPin)

    if(inputYourPin === '1234'){
        alert("successful your money add")
    }else{
        alert('wrong.!')
    }
})