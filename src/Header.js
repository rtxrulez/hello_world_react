import React, {Component, PropTypes} from 'react'

// static propTypes = {
//     items: PropTypes.array.isRequired
// }

class Header extends Component {
    render() {
        console.log('items: ', this.props.items);
        return (
            <div>
                {this.props.items.map((item, index) =>
                    <a href={item.link} key={index}>{item.label}</a>
                )}
            </div>
        );
    }
}

export default Header;
