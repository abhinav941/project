import React,{Component} from 'react'
import classes from './Chat-bot.css'
import {TextField} from '@material-ui/core'
import Send from '@material-ui/icons/Send'
import Fab from '@material-ui/core/Fab'
import { instanceOf } from 'prop-types';

class ChatBot extends Component{
    state={
        message:'',
        validMessages:[
            'Send','Received','Show',"name"
        ],
        balance:1000,
        messages:[]
    }

    send=()=>{
        var valid = [...this.state.validMessages]
        var messageSplit = this.state.message.split(" ");
        var messages =[...this.state.messages] 
        
        var messagebySystem ='' 
        
            messages.push(this.state.message);
            this.setState({
                messages:messages,
                message:''
            })
            
            for(var i =0;i<valid.length;i++){
                if(messageSplit[0].toLowerCase() === valid[i].toLowerCase()){
                    if(messageSplit[0].toLowerCase() === 'send'){
                            
                            if(Number(this.state.balance)-messageSplit[1]>100){
                            
                                this.setState({
                                    balance:this.state.balance-Number(messageSplit[1])
                                })
                                var money = Number(this.state.balance)-Number(messageSplit[1])
                                messagebySystem += "Your balance is " + money
                                    messages.push(messagebySystem);
                                    this.setState({
                                        messages:messages
                                    })
                            }
                        break;
                    }
                    if(messageSplit[0].toLowerCase() === 'received'){
                        
                        
                        
                            this.setState({
                                balance:this.state.balance+Number(messageSplit[1])
                            })
                            var money = Number(this.state.balance)+Number(messageSplit[1])
                            messagebySystem += "Your balance is " + money
                                messages.push(messagebySystem);
                                this.setState({
                                    messages:messages
                                })
                        
                        break;
                    }
                    if(messageSplit[0].toLowerCase() === 'show'){
                        
                        var money = Number(this.state.balance)
                        messagebySystem += "Your balance is " + money
                            messages.push(messagebySystem);
                            this.setState({
                                messages:messages
                            })
                    
                    break;
                }
                }
                    
                    

                }
            }
        
    

    changeHandler=name=>event=>{
        this.setState({
            [name]:event.target.value
        })
    }
    
    render(){

        return(
            <div className={classes.ChatBot}>
                <div className={classes.display}>
                    {
                        this.state.messages.map((val,index)=>{
                            return <li className={classes.show}>
                            {
                                index%2===0?
                                    <span>User:</span>:
                                    <span>Bot:</span>
                            }
                                {val}
                            </li>
                        })
                    }


                </div>



                <div className={classes.enter}>
                    <TextField
                        margin="normal"
                        variant="outlined"
                        value={this.state.message}
                        style={{width:"85%"}}
                        onChange={this.changeHandler("message")}
                    />
                    <div className={classes.send} onClick={this.send}>
                        <Fab color="primary" arial-label="send">
                            <Send/>
                        </Fab>
                    </div>

                </div>    
            </div>

        );
    }
}
export default ChatBot