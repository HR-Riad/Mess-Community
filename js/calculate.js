/* check int input field and take input */
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountValue =  inputField.value ;
    const amountValue = parseFloat(inputAmountValue);
    var intCheck= /^[0-9]+$/;
    if(!intCheck.test(inputAmountValue)){
        return -1;
    }
    return amountValue;
}
/* check int input field and take input End */

/* Calculator part start */
document.getElementById('calculate-btn').addEventListener('click', function()
{
   
 const totalMainExpense= getExpenseValue();
 const mainBalance = getBalanceValue();
 const totalExpenseText = document.getElementById('total-expense');
 const balanceText = document.getElementById('balance');
 const msgError = document.getElementById('error');

   /* check error condition */
 if(totalMainExpense!=-1 && mainBalance !=-1 ){
    if(totalMainExpense>mainBalance){
        msgError.classList.remove('d-none');
       msgError.innerText='Dont have enough money!!!';
       totalExpenseText.innerText = '';
        balanceText.innerText ='';
     }
     else{
            msgError.classList.add('d-none');
        totalExpenseText.innerText = totalMainExpense;
        balanceText.innerText =parseFloat(mainBalance-totalMainExpense);
     }  
 }
 else{
    msgError.classList.remove('d-none');
    msgError.innerText='Must fill input field and give positive number!!!'; 
    totalExpenseText.innerText = '';
        balanceText.innerText ='';    
 }
  /* check error condition End */
})
/* Calculator part End */

/* main balance input  start*/
   
function getBalanceValue(){
    const totalAmount =parseFloat(document.getElementById('total-amount').value );
    if(totalAmount<0 || isNaN(totalAmount)){
        return -1;
    }
    return totalAmount;
}
/* main balance input End*/



/* Expense value calculation start */

function getExpenseValue(){
    
    const flatRent = getInputValue('flat-rent');
 
    const foodCost = getInputValue('food-cost');

    const othersBill = getInputValue('others-bill');
    
    if(flatRent>=0&&foodCost>=0&&othersBill>=0 ){
        const totalExpenses = (flatRent + foodCost + othersBill);
        return totalExpenses;
    }
    else{
        return -1;
    }
     
  
 
}


/* Expense value calculation End*/


/* Savings part Start */

document.getElementById('save-button').addEventListener('click', function()
{
   const savingAmount = getInputValue('saving-percent');
   const totalMainExpense= getExpenseValue();
   const mainBalance = getBalanceValue();
   const msgError = document.getElementById('savingError');
   const newSavingAmount=parseFloat( (mainBalance * savingAmount)/100);
   const savingAmountText =document.getElementById('saving-amount'); 
   const remainingBalance = document.getElementById('remaining-balance');
   const savingInput = document.getElementById('saving-percent');
   if (savingAmount<=100 && totalMainExpense!=-1 && savingAmount!=-1){
    savingInput.style.borderColor = 'black';
            
    if((mainBalance-totalMainExpense)<= newSavingAmount ){
       
        msgError.classList.remove('d-none');
      msgError.innerText='Dont have enough money for saving!!!';
      savingAmountText.innerText = '';     
      remainingBalance.innerText = '';
     }
     else if((mainBalance-totalMainExpense)>newSavingAmount ){
            msgError.classList.add('d-none');
            savingAmountText.innerText = newSavingAmount; 
            remainingBalance.innerText = (mainBalance - totalMainExpense) - newSavingAmount;    
     }
    }
    else{
        msgError.classList.add('d-none');
        savingInput.style.borderColor = 'red';
        savingAmountText.innerText = '';     
      remainingBalance.innerText = '';
    }
})
 

/* End savaing part */
