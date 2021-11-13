function bt(n){
	return document.getElementById('b'+n)
}

function troca(a,b){
	if (b.value==' '){
		b.value = a.value
		a.value = ' '
		a.disabled=true
		b.disabled=false
	}
}

function btclick(qual){
	switch(qual){
		case 1:
			troca(bt(1), bt(2))
			troca(bt(1), bt(4))
		break

		case 2:
			troca(bt(2), bt(1))
			troca(bt(2), bt(3))
			troca(bt(2), bt(5))
		break

		case 3:
			troca(bt(3), bt(2))
			troca(bt(3), bt(6))
		break

		case 4:
			troca(bt(4), bt(1))
			troca(bt(4), bt(5))
			troca(bt(4), bt(7))
		break

		case 5:
			troca(bt(5), bt(4))
			troca(bt(5), bt(2))
			troca(bt(5), bt(6))
			troca(bt(5), bt(8))
		break

		case 6:
			troca(bt(6), bt(3))
			troca(bt(6), bt(5))
			troca(bt(6), bt(9))
		break

		case 7:
			troca(bt(7), bt(4))
			troca(bt(7), bt(8))
		break

		case 8:
			troca(bt(8), bt(7))
			troca(bt(8), bt(5))
			troca(bt(8), bt(9))
		break

		case 9:
			troca(bt(9), bt(8))
			troca(bt(9), bt(6))
		break
	}
}

window.onload= function(){
	tabuleiro = '<table><tr><td><input type="button" id="b1" value="1" onclick="btclick(1)" "btclick(1)" /></td><td><input type="button" id="b2" value="2" onclick="btclick(2)" /></td><td><input type="button" id="b3" value="3" onclick="btclick(3)" /></td></tr><tr><td><input type="button" id="b4" value="8" onclick="btclick(4)" /></td><td><input type="button" id="b5" value="7" onclick="btclick(5)" /></td><td><input type="button" id="b6" value="4" onclick="btclick(6)"/></td></tr><tr><td><input type="button" id="b7" value="5" onclick="btclick(7)"/></td><td><input type="button" id="b8" value="6" onclick="btclick(8)"/></td><td><input type="button" id="b9" value=" " onclick="btclick(9)"/></td></tr></table>'
	document.getElementById("puzzle").innerHTML = tabuleiro
	bt(9).disabled = true
	bt(1).style.borderBottomWidth = 5
}



