import React,{Component} from 'react';
import classes from './Finance.css';
import {TextField} from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import Done from '@material-ui/icons/Done'
import AddIcon from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';
class Finance extends Component{

    state={
        balance:0,
        changeBalance:0,
        showDelete:false,
        showAdd:false,
        transactions:[
            
        ]
    }

    showAdd=()=>{
        this.setState({
            showAdd:!this.state.showAdd
        }) 
    }

    done=()=>{
        var balance = this.state.balance
        if(this.state.showAdd){
            if(this.state.changeBalance!==0){
                this.setState({
                    balance:balance + Number(this.state.changeBalance),
                    changeBalance:0
                })
            }
        } 
        if(this.state.showDelete){
            if(this.state.changeBalance!==0){
                
                this.setState({
                    balance:balance - Number(this.state.changeBalance),
                    changeBalance:0
                })
            }
        }
        if(this.state.showDelete){
            this.setState({
                showDelete:!this.state.showDelete
            })
        }
        if(this.state.showAdd){
            this.setState({
                showAdd:!this.state.showAdd
            })
        }
    }
    changeHandler=name=>event=>{
        this.setState({
            [name] : event.target.value
        })
    }
    delete=()=>{
        this.setState({
            showDelete:!this.state.showDelete,
        })
    }

    render(){
        let showClass=[classes.addtext]
        if(this.state.showAdd){
            showClass.push(classes.show)
        }
        var showDelete=[classes.addtext]
        if(this.state.showDelete){
            showDelete.push(classes.show);
        }

        return(
            <div className={classes.Finance}>
                
                <TextField 
                disabled
                variant="outlined"
                value={this.state.balance}
                className={classes.textField}
                margin="normal"
                label="Current Balance"
                style={{margin:"20px 20px 20px 60px"}}
                />
                
                    
                    <TextField
                        variant="outlined"
                        type="Number"
                        className={showDelete.join(" ")}
                        margin="normal" 
                        onChange={this.changeHandler("changeBalance")}
                        value={this.state.changeBalance}
                        label="Spent"
                        style={{margin:"20px"}}
                    />
                    
                    <TextField
                    variant="outlined"
                    type="Number"
                    className={showClass.join(" ")}
                    margin="normal" 
                    onChange={this.changeHandler("changeBalance")}
                    value={this.state.changeBalance}
                    label="Add Balance"
                    style={{margin:"20px"}}
                    />
                
                
                


                <div style={{display:'inline-block'}}>
                    {
                        this.state.showAdd || this.state.showDelete?
                        <div className={classes.Add} onClick={this.done}>
                            <Fab color="primary" aria-label="Add" className={classes.fab}>
                                <Done/>
                            </Fab>
                        </div>:
                        <div>
                            <div className={classes.Add} onClick={this.showAdd}>
                            <Fab color="primary" aria-label="Add" className={classes.fab}>
                                <AddIcon/>
                            </Fab>
                            </div>
                        <div className={classes.Delete} onClick={this.delete}>
                            <Fab color="secondary" aria-label="delete" className={classes.fab}>
                                <Delete/>
                            </Fab>

                        </div>
                        </div>

                    }
                
                </div>
                
                 


            </div>
        )
    }
}

export default Finance