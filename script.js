function transferMoney(){
    var fromAcc=document.getElementById("fromAccount").value;
    var toAcc=document.getElementById("toAccount").value;
    var amount=parseInt(document.getElementById("amount").value);

    

var fromBal = parseInt(document.querySelector("#accTable tr:nth-child(" +(parseInt(fromAcc)+1)+ ") td:nth-child(4)").textContent);
var toBal=parseInt(document.querySelector("#accTable tr:nth-child(" +(parseInt(toAcc)+1)+ ") td:nth-child(4)").textContent);
if(fromAcc==toAcc)
alert("Transactions between same accounts cannot take place!")
   else if(amount<=fromBal){
        var updatedFromBalance=fromBal-amount;
        var updatedToBalance=toBal+amount;
   
document.querySelector("#accTable tr:nth-child(" + (parseInt(fromAcc) + 1) + ") td:nth-child(4)").textContent = updatedFromBalance;
document.querySelector("#accTable tr:nth-child(" + (parseInt(toAcc) + 1) + ") td:nth-child(4)").textContent = updatedToBalance;


    var transactionRow = document.createElement("tr");
    transactionRow.innerHTML = "<td>" + fromAcc + "</td>" +
                                "<td>" + toAcc + "</td>" +
                                "<td>" + amount + "</td>" ;
                                
                                       
                                           
    document.getElementById("trans-table").appendChild(transactionRow);                        
    alert("Transaction Successful!");
   

}
    else
   {alert("Transaction failed due to insufficient balance!"); 
   }
}                    


