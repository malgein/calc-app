import React from 'react'
import Button from './Button/Button'
import PropTypes from 'prop-types'

const numbers = [ 7,8,9,4,5,6,1,2,3,0]

const renderButtons= onClickNumber =>   {
    // let number = 0
    //iterar desde el botn 1 al 0
    // let ArrayComponents +=
    //<Button text={"1"} clickHandler={onClickNumber}/>    
  const renderButton = number => (
      <Button 
      key ={number.toString()} 
      text={number.toString()} 
      clickHandler={onClickNumber} 
      />
  )
  return numbers.map(renderButton)
}  
    
const Numbers = ({onClickNumber}) => {


    return (
        <section className="numbers">
            {
                renderButtons(onClickNumber)
            }
        </section>
    )
}

Numbers.propTypes= {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers
