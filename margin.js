function myJsFunction() {
	//var text = document.getElementById('input1').value
	document.getElementById('Margin').classList.remove
	document.getElementById('MarginP').classList.remove

	let ECTC = parseInt(document.getElementById('value1').value)
	const Loading = 0.5
	let loadingV = ECTC * Loading + ECTC
	let BR = parseInt(document.getElementById('value2').value)
	let BRY = BR * 12
	let margin = BRY - loadingV
	let marginP = (margin / BRY) * 100

	// console.log('ECTC ==> ' + ECTC)
	// console.log('Loading ==> ' + loadingV)
	// console.log('Billing Rate ==> ' + BRY)

	// console.log('Margin ==>' + margin)
	// console.log('MarginP ==>' + marginP * 100)

	document.getElementById('ECTC').innerHTML =
		ECTC.toLocaleString('en-IN') + ' ₹'
	document.getElementById('BR').innerHTML = BR.toLocaleString('en-IN') + ' ₹'
	document.getElementById('Loading').innerHTML =
		loadingV.toLocaleString('en-IN') + ' ₹'
	document.getElementById('BRY').innerHTML = BRY.toLocaleString('en-IN') + ' ₹'
	document.getElementById('Margin').innerHTML =
		margin.toLocaleString('en-IN') + ' ₹'
	document.getElementById('MarginP').innerHTML =
		//(marginP * 100).toFixed(2) + ' %'
		marginP.toFixed(2) + ' %'

	//document.getElementById('ECTC').innerHTML = 'ECTC ==> ' + ECTC

	if (marginP < 20) {
		document.getElementById('Margin').classList.add('text-red-600')
		document.getElementById('MarginP').classList.add('text-red-600')
	} else {
		document.getElementById('Margin').classList.add('text-green-600')
		document.getElementById('MarginP').classList.add('text-green-600')
	}
}
