import React from 'react'
import Total from './Total'
import Option from './Option'


class Cart extends React.Component {
      render(){
            return (
                <section className="main__summary">
                    <h2>Your cart</h2>
                    <Option selected={this.props.selected}/>
                    <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        <Total selected={this.props.selected} />
                    </div>
                    </div>
                </section>
            )
    }
}

export default Cart