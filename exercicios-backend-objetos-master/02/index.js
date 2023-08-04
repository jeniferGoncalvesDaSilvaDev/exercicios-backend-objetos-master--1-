let carro = {
    marca: 'Hyundai',
    modelo: 'Focus',
    ano: 2022,
    cor: 'Azul',
    velMax: 200,
    velAtual: 520,
    quantidade_de_portas:4,
    automatico: true,
    funcoes:function(){
       if (this.velAtual ===0){
            this.velAtual = this.velMax
            console.log('ligando...')
       }
       else if (this.velAtual >0 && this.velAtual <= this.velMax){
        this.velAtual = this.velAtual + 5
        console.log('acelerando...')
        console.log(this.velAtual)
       }
       else if(this.velAtual> 0 && this.velAtual > this.velMax){
           this.velAtual = this.velAtual - 400 
           console.log('freio...')
           console.log(this.velAtual)
       }
       
          
      
    }
   
    
}

console.log(carro.funcoes()) 



