import React from "react";
import "./media.css";
import PropTypes from "prop-types";

class Media extends React.Component{
    constructor(props){
        super(props);
        this.state={
            author:props.author
        }
        //this.handleClick= this.handleClick.bind(this)
    }

    handleClick=(event)=>{
        console.log(this.props.title);
        this.setState({
            author:"EliseoSC"
        });
    }

    render(){
        return(
            <div className="Media" onClick={this.handleClick}>
                <div>
                    <img src={this.props.image} alt="" width={260} height={160}/>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p>{this.state.author}</p>
                </div>
            </div>
        )
    }
}


Media.propTypes={
    image:PropTypes.string,
    title:PropTypes.string,
    author:PropTypes.string

};

export default Media;


