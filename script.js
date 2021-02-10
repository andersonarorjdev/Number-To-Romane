 const GetFromRoman = Roman =>{
	let FinalNumber = 0;
  
  Roman = Roman.toUpperCase();
  
  const Numbers = {
  	'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  
  if(isNaN(Numbers[Roman])){
    		document.getElementById('ResultScreen').innerHTML = 'Não é um número romano! tente novamente!';
        document.getElementById('Field').value = '';
        return;
    	}
  
  for(let i = 0; i < Roman.length; i++){
  		
  	let atual = Roman[i];
    let prox = Roman[i+1];
    
    if(prox == true && Numbers[prox] > Numbers[atual]){
    	FinalNumber -= Numbers[atual];
    }
    else{
    	FinalNumber += Numbers[atual]
    }
  }
  document.getElementById('ResultScreen').innerHTML = FinalNumber;
}


