
import React from 'react'
import classes from './Table.module.css'

export  const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef
  
    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])
  
    return (
      <>
        <input type='checkbox' className={classes.customCheckbox} ref={resolvedRef} {...rest}   />
      </>
    )
  })
  