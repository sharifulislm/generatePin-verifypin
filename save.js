// function start for expenses and balance total 

function calculateBalance(income, totalExpenses) {
	const errorAlart = document.getElementById('error-Alart');

  if (Math.sign(totalExpenses) === -0) {
	errorAlart.style.display= 'block';
	// alert("please enter a valuable Number ");
		} 
	     else if (Math.sign(income) === -0 ) {
		errorAlart.style.display= 'block';
	 } 
	   else if (Math.sign(totalExpenses) === -1 ) {
		errorAlart.style.display= 'block';
		alert("give me positive numbar ");
	} 
	   else if (Math.sign(income) === -1 ) {
		errorAlart.style.display= 'block';
		alert("give me positive numbar ");
	} 
	   else {
	income = parseFloat(income);
	const totalBalance = income - totalExpenses;
	document.getElementById('balance').innerText = totalBalance;
    errorAlart.style.display= 'none'; }

}

//  calculate button 
document.getElementById('btn-calculate').addEventListener('click', function () {
	const inCome = document.getElementById('input-Income').value;
	const fodCost = document.getElementById('fodd-cost').value;
	const rentCost = document.getElementById('rent-cost').value;
	const clothesCost = document.getElementById('clothes-cost').value;
	const totalExpenses = parseFloat(fodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
	document.getElementById('Expenses').innerText = totalExpenses;

	//  calling function
	calculateBalance(inCome, totalExpenses);

})



// saveing manoy function
function saveIngEqal (saveManoy) {
	let saveInpt = saveManoy.value;
	const saveErrorAlart = document.getElementById('save-error-Alart');
	if (Math.sign(saveInpt) === -0) {
		saveErrorAlart.style.display= 'block';
			} 
			  else if (Math.sign(saveInpt) === -1 ) {
				saveErrorAlart.style.display= 'block';
			
		      } else{ 
	document.getElementById('saving-amount').innerText = saveInpt;
	const save = saveInpt * .2;
	const peviarseBalance = document.getElementById('balance').innerText;
	const mainusSave = peviarseBalance - save;
	document.getElementById('Reman-blnc').innerText = mainusSave;
	saveErrorAlart.style.display= 'none';
}

}


// saveing manoy 

document.getElementById('save-button').addEventListener('click', function () {
	let saveInput = document.getElementById('save-input')
	saveIngEqal(saveInput);
	saveInput.value = '';

	// document.getElementById('saving-amount').innerText = saveInput;
	// const save = saveInput * .2;
	// const peviarseBalance = document.getElementById('balance').innerText;
	// const mainusSave = peviarseBalance - save;

	// document.getElementById('Reman-blnc').innerText = mainusSave;
	
})
