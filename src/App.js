import React, {Component} from 'react';
import Header from './Header'
import RegistrationForm from './RegistrationForm'
import './App.css'

const menu = [
    {
        link: '/articles',
        label: 'Articles'
    }, {
        link: '/contacts',
        label: 'Contacts'
    }, {
        link: '/posts',
        label: 'Posts'
    }
];

// class App extends Component {
//     render() {
//         return (
//             <div className='container'>
//                 <Header items={menu} />
//                 <RegistrationForm />
//             </div>
//         )
//     }
// }

class App extends Component {
    submit() {
        console.log('submit', this.testInput)
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="test" ref={(input) => this.testInput = input}/>
                <button onClick={this.submit.bind(this)}>Submit</button>
            </div>
        )
    }
}
export default App
