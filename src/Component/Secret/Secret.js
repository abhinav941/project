import React, { Component } from 'react';
import classes from './Secret.css'
import { TextField } from '@material-ui/core'
import Button from '../../Container/Button/Button';
import Message from '../../Container/Message/Messages';

class Secret extends Component{
    state = {

        data: {
            message: '',
            key: ''
        },
        messages: [
        ]

    }


    onChangeHandler = name => event => {
        this.setState({
            data: {
                ...this.state.data,
                [name]: event.target.value
            }
        })
    }

    encrypt=()=>{
        var messages = [...this.state.messages];
        if(this.state.data.message!=="" && this.state.data.key!==""){
            var value = (this.state.data.key*7)%256
            var message = this.state.data.message;
            var newString = ""
            for(var i=0;i<message.length;i++){
                newString += String.fromCharCode(message.charCodeAt(i)+value)
            }

            messages.push(newString);
            this.setState({
                data:{
                    message:'',
                    key:''
                },
                messages:messages
            })
            
        }
    }

    decrypt=()=>{
        
        if(this.state.data.message!=="" && this.state.data.key!==""){
            var value = (this.state.data.key*7)%256;
            var message = (this.state.data.message)
            var newString = ""
            for(var i=0;i<message.length;i++){
                newString += String.fromCharCode(message.charCodeAt(i)-value)
            }
            this.setState({
                data:{
                    ...this.state.data,
                    message:newString,
                    
                }
                
            })

        }
    }

    render() {
        return (
            <div className={classes.box}>
                <div className={classes.text}>
                    Type the message here!!
                </div>

                <TextField
                    id="outlined-name"
                    label="Message"
                    className={classes.textField}
                    onChange={this.onChangeHandler("message")}
                    placeholder="Enter the text here!"
                    margin="normal"
                    variant="outlined"
                    value={this.state.data.message}
                    style={{
                        margin: "10px"
                    }}
                />
                <br></br>
                <TextField
                    id="outlined-name"
                    label="Key"
                    className={classes.key}
                    style={{
                        margin: "10px",

                    }}
                    value={this.state.data.key}
                    type="number"
                    onChange={this.onChangeHandler("key")}
                    placeholder="key!!"
                    margin="normal"
                    variant="outlined"
                />
                <br></br>
                <Button type="Encrpty" name="Encryption" click={this.encrypt}/>
                <Button type="Decrypt" name="Decryption"click={this.decrypt} />
                <br></br>
                <hr></hr>
                <div className={classes.Messages}>
                    <span style={{ padding: "15px" }}>Messages</span>
                </div>

                <Message message={this.state.messages}/>

            </div>

        )
    }
}

export default Secret;