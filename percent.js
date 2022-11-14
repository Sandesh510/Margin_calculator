function calculatePer() {
	let mainVal = parseInt(document.getElementById('Mval').value)
	// let mainVal = 120
	let slVal = parseInt(document.getElementById('Sval').value)
	// let slVal = 100
	let ProVal = parseInt(document.getElementById('Pval').value)
	let avg = mainVal

	document.getElementById('BV').innerHTML = mainVal
	document.getElementById('SL').innerHTML =
		(((slVal - mainVal) / mainVal) * 100).toFixed(2) + ' %'
	// document.getElementById('PB').innerHTML =
	// 	(((ProVal - mainVal) / ((mainVal + ProVal) / 2)) * 100).toFixed(2) + ' %'

	document.getElementById('PB').innerHTML =
		(((ProVal - mainVal) / mainVal) * 100).toFixed(2) + ' %'
}

function makeBlank() {
	document.getElementById('BV').innerHTML = ''
	document.getElementById('SL').innerHTML = ''
	document.getElementById('PB').innerHTML = ''
}
