import React, {Component} from 'react'
import '../App.css'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state ={
            username:'',
            email:'',
        }
    }
    render() {
        return(
            <Form>
                <div>
                    <label>Username</label>ß
                    <input type='text' />
                </div>
            </Form>
        )
    }
}

export default Form