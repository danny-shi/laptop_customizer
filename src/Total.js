import React from 'react';



class Total extends React.Component {
    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost, 0);
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        return (
            <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
            </div>

        )
    }
}

export default Total