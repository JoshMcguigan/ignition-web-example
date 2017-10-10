import React from 'react';
import IgnWeb from 'ignition-web-hoc';
import HeatMapSquare from './HeatMapSquare';

class HeatMap extends React.Component {

    constructor(props){
        super(props);

        props.tagBrowser.setRootPath("Inverters");

        props.tagBrowser.setSuccessCallback(
            ()=>{
                this.inverterTagPaths = this.props.tagBrowser.data.containers.map(
                    (inverterTagPath)=>"Inverters/"+inverterTagPath+"/P"
                );
                // slice used to create a copy of the inverterTagPaths array rather than a new reference
                let tagPaths = this.inverterTagPaths.slice();
                tagPaths.push("Configuration/Inverters/Inverter Max Power");
                this.props.tagReader.setTagPaths(tagPaths);
            }
        );
    }

    render() {
        return (
            <div className="heat-map">
                {
                    !this.props.tagReader.loading &&
                    this.inverterTagPaths.map(
                        (tagPath) =>
                            <HeatMapSquare
                                key={tagPath}
                                value={this.props.tagReader.data[tagPath].value}
                                maxValue={this.props.tagReader.data["Configuration/Inverters/Inverter Max Power"].value}
                            />
                    )
                }
            </div>
        );
    }
}

export default IgnWeb(HeatMap);
