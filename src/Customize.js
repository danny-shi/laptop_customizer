import React from 'react'
import Specs from './Specs'


class Customize extends React.Component {
    render() { 
        return (
            <form className="main__form">
              <h2>Customize your laptop</h2>
              <Specs 
                features={this.props.features}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature} />
            </form>
        )
    }
}

export default Customize