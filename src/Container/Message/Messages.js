import React from 'react';
import classes from './Messages.css'
const Message = props=>{
    return(
        <div className={classes.messages}>
            {
                props.message.map(val => {
                    return <div className={classes.message}>
                            {val}
                        </div>
                })
            }
        </div>
    )
}

export default Message;