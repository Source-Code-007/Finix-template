// Form validation ---
function formValidate() {
    let typeTheMoney = document.forms['bLoanForm']['typeTheMoney']
    let borrowing = document.forms['bLoanForm']['borrowing']
    let termOfUse = document.forms['bLoanForm']['termOfUse']

    let typeTheMoneyP = document.getElementById('typeTheMoneyP')
    let borrowingP = document.getElementById('borrowingP')

    // type the money validation
    if (typeTheMoney.value >= 1000 && typeTheMoney.value <= 3000){
        typeTheMoneyP.innerText = 'yess'
        typeTheMoneyP.style.color = 'green'
        typeTheMoney.style.background = '#5cb853'
    } else{
        typeTheMoneyP.innerText = '*Please input valid ammount'
        typeTheMoneyP.style.color = '#e73c3e'
        typeTheMoney.style.background = '#e73c3e'
    }

    if(borrowing.value>10000 && borrowing.value<50000) {
        borrowingP.innerText = 'yess'
        borrowingP.style.color = 'green'
        borrowing.style.background = '#5cb853'
    } else{
        borrowingP.innerText = '*Please input valid ammount'
        borrowingP.style.color = '#e73c3e'
        borrowing.style.background = '#e73c3e'
    }

    
    return false
}