 /*
 document.getElementById('deposit-button').addEventListener('click', function(){
     //get the amount deposited
     const depositField = document.getElementById('deposit-input');
     const newdepositAmount = depositField.value
     

      const depositTotal = document.getElementById('deposit-total');
        const previousDepositAmount =depositTotal.innerText;
         const newdepositTotal = previousDepositAmount + newdepositAmount;
       depositTotal.innerText = newdepositTotal;
  // 6.17second 26-7

       //clear the deposit input field
       depositField.value =''
 })
 */

   // new function starts 

   document.getElementById('deposit-button').addEventListener('click', function(){
      const depositInput = document.getElementById('deposit-input')
      const depositAmount = depositInput.value;

      //get current deposit
       const depositTotal = document.getElementById('deposit-total');
        const depositTotalText = depositTotal.innerText;
         depositTotal.innerText = parseFloat(depositTotalText) +parseFloat(depositAmount)

         //update balace
          const balanceTotal = document.getElementById('balance-total');
          const balanceTotalText = balanceTotal.innerText
          balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(depositAmount)

     // clear input field
      depositInput.value = ''
   })

   //handle withdraw 
    document.getElementById('withdraw-button').addEventListener('click', function(){
       const withdrawInput = document.getElementById('withdraw-input')
       const withdrawAmountText = withdrawInput.value
        
       // get current withdraw
        const withdrawTotal = document.getElementById('withdraw-total')
        const withdrawTotalText = withdrawTotal.innerText
        withdrawTotal.innerText = parseFloat(withdrawTotalText) + parseFloat(withdrawAmountText)

       //update withdraw balance
       const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText
        balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(withdrawAmountText)
      // clear withdraw input
      withdrawInput.value = ''



    })