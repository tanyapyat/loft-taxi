import React, { Component } from 'react';
import './OrderForm.scss';
import { connect } from 'react-redux';

import FormLabel from '@material-ui/core/FormLabel';

class OrderForm extends Component {
    state = {
      src: '',
      dest: ''
    }

    render() {
        const { src, dest } = this.state;
        const addresses = this.props.addresses.addresses;
        return (
            <div className='form orderForm-form'>
                <form className='orderForm'>
                    <FormLabel className='orderForm__label'>
                        Откуда:
                        <select 
                            className='orderForm__input'
                            name='src'
                            value={src} 
                            onChange={e => this.setState({ src: e.target.value })} 
                        >
                            <option default disabled key='default'></option>
                            {addresses.map(address => (
                                address!==this.state.dest && <option key={address}>{address}</option>
                            ))}
                        </select>
                    </FormLabel>
                    <FormLabel className='orderForm__label'>
                        Куда:
                        <select 
                            className='orderForm__input'
                            name='dest'
                            value={dest} 
                            onChange={e => this.setState({ dest: e.target.value })} 
                        >
                            <option default disabled key='default'></option>
                            {addresses.map(address => (
                                address!==this.state.src && <option key={address}>{address}</option>
                            ))}
                        </select>
                    </FormLabel>
                    <button type='submit' className='orderForm__button'>Вызвать такси</button>
                </form>
            </div>
        );
    }
}

export default connect(state => ({
    addresses: state.addresses.addresses
}))(OrderForm);