function myJsFunction() {
	//var text = document.getElementById('input1').value

	let ECTC = parseInt(document.getElementById('value1').value)
	const Loading = 0.45
	let loadingV = ECTC * Loading + ECTC
	let BR = parseInt(document.getElementById('value2').value)
	let BRY = BR * 12
	let margin = BRY - loadingV
	let marginP = margin / BRY

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
		(marginP * 100).toFixed(2) + ' %'
	//document.getElementById('ECTC').innerHTML = 'ECTC ==> ' + ECTC
}
