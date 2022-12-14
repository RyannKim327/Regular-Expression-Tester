class regex{
	constructor(string, insensitive){
		if(insensitive){
			this.reg = new RegExp(string, "")
		}else{
			this.reg = new RegExp(string, "i")
		}
	}
	test(str){
		return this.reg.test(str)
	}
	m(str){
		return str.match(this.reg)
	}
}
let _i = document.getElementById("input")
let regx = document.getElementById("regex")
let res = document.getElementById("res")
let match = document.getElementById("matches")
let insensitive = document.getElementById("insensitive")
let label = document.getElementById("label-insensitive")
function func(){
	let i = _i.value
	let r = regx.value
	label.textContent = (insensitive.checked) ? "Case Sensitive" : "Case Insensitive"
	let reg = new regex(r, insensitive.checked)
	if(r == "" || i == ""){
		input.style.borderColor = "#000000"
		regx.style.borderColor = "#000000"
		input.style.backgroundColor = "#dedede"
		regx.style.backgroundColor = "#dedede"
		document.getElementById("base").style.backgroundColor = "#dedede"
		document.getElementById("out").style.backgroundColor = "#dedede"
		res.style.backgroundColor = "#deffde"
		res.value = ""
	}else if(reg.test(i)){
		input.style.borderColor = "green"
		regx.style.borderColor = "green"
		input.style.backgroundColor = "#deffde"
		regx.style.backgroundColor = "#deffde"
		document.getElementById("base").style.backgroundColor = "#deffde"
		document.getElementById("out").style.backgroundColor = "#deffde"
		res.style.backgroundColor = "#deffde"
		let li = "<ol>"
		let m = reg.m(i)
		for(let x in m){
			li += `<li>${m[x]}</li>`
		}
		m += "</ol>"
		match.innerHTML = "Matches Result: " + li
		if(insensitive.checked){
			res.value = `/${r}/i`
		}else{
			res.value = `/${r}/`
		}
	}else{
		input.style.borderColor = "red"
		regx.style.borderColor = "red"
		input.style.backgroundColor = "#ffdede"
		regx.style.backgroundColor = "#ffdede"
		document.getElementById("base").style.backgroundColor = "#ffdede"
		document.getElementById("out").style.backgroundColor = "#ffdede"
		res.style.backgroundColor = "#ffdede"
		match.textContent = "No Match"
		res.value = ""
	}
}