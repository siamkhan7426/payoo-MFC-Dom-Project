// step - 1 event kaj korta gela button ta key agie dorbo tar vitor kaj korbo bakai sob
// step - 2 preventDefault madddoma page relaod problem solve korbo
// step - 3 input gulo dora ney asa 
// step - 4 validation korbo if()--- are vitor sob kisu korta hoba jodi true hoi sob kaj hoba 
// step - 5 amr total balance
// step - 6 amr total balace sata input theka jay amount asba + kora dibo
// step - 7 update total balance 

    const butotnAddMoney = document.getElementById('btn-money')
    butotnAddMoney.addEventListener('click', function (event){
    // web page realod problem
    event.preventDefault()
    //console.log("hello money")
    // 
    const inputAddAmount = document.getElementById('add-amount')
    const inputAddAmountValue = inputAddAmount.value;
    const inputAddAmountValueNumber = Number(inputAddAmountValue);
    inputAddAmount.value = "";
    const inputYourPin = document.getElementById('your-pin')
    const inputYourPinValue = inputYourPin.value;
    inputYourPin.value = "";

    //console.log(inputAddAmountValueNumber, inputYourPinValue)

    if(inputYourPinValue === "1234"){
        // step -5 total current balance
        let accountMoney = document.getElementById('account-balance').innerText;
        let moneyBalance = Number(accountMoney);
        //console.log(typeof moneyBalance, moneyBalance);

        // step - 6  input amount + total balance
        let newBalance = inputAddAmountValueNumber  + moneyBalance;
        //console.log(newBalance)

        // step - 7 total amount balance
        document.getElementById('account-balance').innerText = newBalance;
        // alert messege
        alert("successful your money add")
    }else{
        alert('Money not add sorry! Please try againe. ')
    }
})