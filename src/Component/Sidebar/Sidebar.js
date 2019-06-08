import React from 'react';
import classes from './Sidebar.css'
import {NavLink} from 'react-router-dom'

const Sidebar =(props)=>{
      
        
        let links=['Secret','Finance-App','Chat-Bot']
        return (

            <div className={classes.sidebar} >
                <ul>
                    {
                        links.map(l=>{
                            return<div className={classes.links} key={l}>
                                <NavLink to={'/'+l} 
                                activeClassName={classes.active}
                                >{l}</NavLink>
                            </div>
                        })
                    }
                </ul>
            </div>
        )
    }


export default Sidebar