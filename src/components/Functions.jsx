import React from 'react'
import Button from './Button/Button'
import PropTypes from 'prop-types'

const Functions = ({onClear, onDelete})=> {
    return (
        <section className="functions">
           <Button type="button-long-text" text="clear" clickHandler={onClear}/>
           <Button type="button-long-text" text="&larr;" clickHandler={onDelete}/>
        </section>
    )
}

Functions.propTypes={
    onClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions