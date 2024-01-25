
//OOP
function makeAccount(initial) {
    let obj = {}
    //!! state
    obj.balance = initial 

   //!! behaviours
    obj.withdraw = withdraw
    obj.deposit = deposit
    return obj

    }


    let withdraw =  function(amount){
        if(this.balance - amount >= 0) {
            this.balance -= amount
            return "here's your money "+amount 
        }
        return "not enough money"
    }

    let deposit = function() {
      console.log(this)
    }