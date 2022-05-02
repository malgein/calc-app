import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const MathOperations = ({onClickOperation, onClickEqual}) =>{
    return (
        <section className="math-operations">
            <Button text="+" clickHandler={onClickOperation} />
            <Button text="-" clickHandler={onClickOperation} />
            <Button text="*" clickHandler={onClickOperation} />
            <Button text="/" clickHandler={onClickOperation} />
            <Button text="=" clickHandler={onClickEqual} />
        </section>
    )
}

MathOperations.propTypes={
    onCLickOperation: PropTypes.func.isRequired,
    onclickEqual: PropTypes.func.isRequired
}

export default MathOperations