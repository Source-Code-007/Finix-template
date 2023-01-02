// Form validation
function formValidate(){
    let typeTheMoney = document.forms['bLoanForm']['typeTheMoney']
    let borrowing = document.forms['bLoanForm']['borrowing']
    let termOfUse = document.forms['bLoanForm']['termOfUse']

    let typeTheMoneyP = document.getElementById('typeTheMoneyP')
    let borrowingP = document.getElementById('borrowingP') 
    
    let alertText

    // type the money validation
{ 
       if(typeTheMoney.value<1000){
                if(typeTheMoney.value==''){
                    alertText = '"This field is required" (You can\'t leave this field blank).'
                    typeTheMoney.style.background = 'rgba(255, 99, 71, 0.291)'
                    typeTheMoneyP.innerText = alertText
                    typeTheMoneyP.style.color = 'red'
                    return false
                }
         
                else if(!typeTheMoney.value == '' && typeTheMoney.value<1000){
                    alertText = 'Please enter more than 1000$'
                typeTheMoney.style.background = 'rgba(255, 99, 71, 0.291)'
                typeTheMoneyP.innerText = alertText
                typeTheMoneyP.style.color = 'red'
                return false 
                } 
    }
    if(typeTheMoney.value>1000){
        typeTheMoneyP.innerText = ''
        typeTheMoney.style.background = '#5cb853'
    }
}

    //borrowing validation
    if(borrowing.value<10000){
        if(borrowing.value == ''){
                alertText = '"This field is required" (You can\'t leave this field blank).'
                borrowing.style.background = 'rgba(255, 99, 71, 0.291)'
                borrowingP.innerText = alertText
                borrowingP.style.color = 'red'
                return false
            }
             alertText = 'Please enter more than 10000$'
             borrowing.style.background = 'rgba(255, 99, 71, 0.291)'
             borrowingP.innerText = alertText
             borrowingP.style.color = 'red'
             return false       
    }
}