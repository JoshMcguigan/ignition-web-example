import React from 'react';
import IgnWeb from 'ignition-web-hoc';


class TagSelector extends React.Component{

    constructor(props){
        super();
        this.state = {};
        props.tagBrowser.setRootPath("");
    }

    updateSelectedTag(selectedTag){
        this.setState({selectedTag: selectedTag});
        this.props.tagReader.setTagPaths([selectedTag]);
    }

    handleChange(e){
        this.updateSelectedTag(e.target.value);
    }

    componentDidUpdate(prevState, prevProps){
        // set default tag choice to first tag in list
        if (!this.state.selectedTag && !this.props.tagBrowser.loading){
            this.updateSelectedTag(this.props.tagBrowser.data.tags[0]);
        }
    }


    render(){
        if(this.props.tagBrowser.loading){
            return <p>loading..</p>
        } else {
            return (
                <div>
                    <select onChange={(e)=>this.handleChange(e)}>
                        {this.props.tagBrowser.data.tags.map(
                            (tag)=><option value={tag} key={tag}>{tag}</option>
                        )}
                    </select>
                    {
                        this.state.selectedTag && this.props.tagReader.data[this.state.selectedTag] &&
                        <p>{this.state.selectedTag} - {this.props.tagReader.data[this.state.selectedTag].value}</p>
                    }
                </div>
            );
        }
    }

}

export default IgnWeb(TagSelector);
