
function getPin(){
    const pin = Math.round(Math.random() *10000);
    const pinString = pin + '';


    if(pinString.length == 4) {
        return pin;
    }
    else {
        //  console.log('this is random numbar');
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
     document.getElementById('display-pin').value = pin;

}
document.getElementById('key-pad').addEventListener('click', function(event){
    const numbar = event.target.innerText;
    const calcInpu = document.getElementById('typed-Numbers');
    if(isNaN(numbar)) {
       if (numbar =='C') {
           calcInpu.value = ' ';
       }
     }
     else {
       
        const previoseNumbar = calcInpu.value;
        const newNumber = previoseNumbar + numbar;
        
        calcInpu.value = newNumber;
     }


});
function verifyPin(){
 const pin = document.getElementById('display-pin').value;
 const inputNumbar = document.getElementById('typed-Numbers').value;

//  condition of error and success 
 const notifySuccess = document.getElementById('notify-success');
 const errorFail = document.getElementById ('notify-fail');
 if(pin == inputNumbar){
  notifySuccess.style.display= 'block';
  errorFail.style.display = 'none';
 }else {
 errorFail.style.display = 'block';
 notifySuccess.style.display= 'none';
 }

}