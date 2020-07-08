import React from 'react'
import slugify from 'slugify'
import ComputerPart from './ComputerPart'


class Customize extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <ComputerPart
                    key={itemHash}                 
                    itemHash={itemHash}
                    feature={feature}
                    selected={this.props.selected}
                    item={item}
                    updateFeature={(e) => this.props.updateFeature(feature, item)}
                />
              );
            });
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          });

        return (
            <form className="main__form">
                    <h2>Customize your laptop</h2>
                    {features}
            </form>
        )
    }
}

export default Customize