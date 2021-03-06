import React from 'react'
import slugify from 'slugify'


class ComputerPart extends React.Component{

      render(){
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          })
          return(
            <div key={this.props.itemHash} className="feature__item">
                <input 
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={this.props.item.name === this.props.selected[this.props.feature].name}
                    onChange={this.props.updateFeature} />
                
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.item.name} 
                    ({USCurrencyFormat.format(this.props.item.cost)})
                </label>
            </div>
          )
      }
}

export default ComputerPart