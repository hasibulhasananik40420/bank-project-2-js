
   // new function starts 
/*
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
    */

    document.getElementById('deposit-button').addEventListener('click', function(){
       const depositInput = document.getElementById('deposit-input')
       const depositAmount = depositInput.value
      
        const depositTotal = document.getElementById('deposit-total')
        const depositTotalText = depositTotal.innerText
         depositTotal.innerText =parseFloat(depositTotalText) +parseFloat(depositAmount)

         //update balance
          const balanceInput = document.getElementById('balance-total')
          const balanceInputText = balanceInput.innerText
           balanceInput.innerText = parseFloat(balanceInputText) + parseFloat(depositAmount)

          //  input clear
          depositInput.value = ''
    })

    //  withdraw part get input
     document.getElementById('withdraw-button').addEventListener('click' , function(){
        const withdrawInput = document.getElementById('withdraw-input')
        const withdrawInputText = withdrawInput.value
        

         const withdrawTotal = document.getElementById('withdraw-total')
         const withdrawInputAmount = withdrawTotal.innerText
         withdrawTotal.innerText = parseFloat(withdrawInputAmount) + parseFloat( withdrawInputText)

        //  total balance update

           const balanceInput = document.getElementById('balance-total')
           const balanceInputText = balanceInput.innerText
        balanceInput.innerText = parseFloat(balanceInputText ) - parseFloat(withdrawInputText)
     })