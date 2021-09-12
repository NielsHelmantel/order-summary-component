import React, { Component } from 'react'
import './Order.css'
import { ReactComponent as BgImage } from '../images/illustration-hero.svg';
import { ReactComponent as Icon } from '../images/icon-music.svg';

export default class Order extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-header'>
                        {/* <BgImage className='card-img'/> */}
                    </div>
                    <div className="card-content">
                        <h1>Order Summary</h1>
                        <p>You can listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                        <div className='card-item'>
                            <Icon className='card-item-icon'/>
                            <div className="card-item-price">
                                <p className='bold'>Annual plan</p>
                                <p>$59.99/year</p>
                            </div>
                            <a href='#'>Change</a>
                        </div>
                        <a href='#'>Proceed to payment</a>
                        <a href='#'>Cancel Order</a>
                    </div>
                </div>
            </div>
        )
    }
}
