import React,{Component} from "react";
import Media from "./media.js";
import Play from "../../icons/components/play"

class PlayList extends Component{
    render(){
        console.log(this.props.data);
        const playlist = this.props.data.categories[0].playlist;
        return(
            <div>
                <Play/>
                {
                    playlist.map((item)=>{
                        return <Media author={item.author} image={item.cover} title={item.title}/>
                    })
                }

            </div>
        )
    }
}

export default PlayList;
