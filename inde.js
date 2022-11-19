class Calculate {
  constructor(previousTextElement,currentTextElement){
    this.previousTextElement=previousTextElement
    this.currentTextElement=currentTextElement
    this.clear()
  }
  clear(){
    this.current=''
    this.previous=''
    this.operation=undefined
  }
  delete(){

  }
  appendNumber(number){
    if(number==='.'&& this.current.includes('.')) return
    this.current=this.current.toString() + number.toString()

  }
  chooseOperation(operation){
    if(this.current==='') return
    if(this.previous !==''){
      this.compute()
    }
    this.operation=operation
    this.previous=this.current
    this.current=''


  }
  compute(){
    let compute
    const prev =parseFloat(this.previous)
    const current=parseFloat(this.current)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
    }
  }
  getDisplayNumber(number){
    const floatNumber=parseFloat(number)
    if(isNaN(floatNumber)) return''
    return floatNumber.toLocaleString('en')

  }
    
      

    
  updateDisplay(){
    this.currentTextElement.innerText=this.current
    this.previousTextElement.innerText=this.previous

    
  }
}
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButtons = document.querySelectorAll('[data-equals]');
const deleteButtons = document.querySelectorAll('[data-delete]');
const allClearButtons = document.querySelectorAll('[data-all-clear]');
const previousTextElement = document.querySelectorAll('[data-previous]');
const currentTextElement = document.querySelectorAll('[data-current]');
const Calculate =new Calculate(previousTextElement,currentTextElement)
numberButtons.forEach(button=>{
  button.addEventListener('click',()=>{
    Calculate.addEventListener(button.innerText)
    Calculate.updateDisplay()
  })
})
operationButtons.forEach(button=>{
  button.addEventListener('click',()=>{
    Calculate.chooseOperation(button.innerText)
    Calculate.updateDisplay()
  })
})
equalsButton.addEventListener('click',button=>{
  Calculate.compute()
  Calculate.updateDisplay()

})
allClearButton.addEventListener('click',button=>{
  Calculate.clear()
  Calculate.updateDisplay()
})
deleteButton.addEventListener('click',button=>{
  Calculate.delete()
  Calculate.updateDisplay()
})





