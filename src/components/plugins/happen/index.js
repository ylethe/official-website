/**
 * Created by grace on 17-4-23.
 */
import React,{Component} from 'react';
import './index.css';
import Happen1 from '../../../images/happen1.jpg';
import Happen2 from '../../../images/happen2.jpg';
import Happen3 from '../../../images/happen2.jpg';
import Happen4 from '../../../images/happen4.jpg';


class Happen extends Component{
    constructor(props){
        super(props);
        this.state={
            happens:[
                {pic:Happen1,describe:'​4月17日至18日，我校开展了为期两天的教学文档专项检查工作。4月17日下午，我校于科技楼3065会议室召开教学文档专项检查工作专......'},
                {pic:Happen2,describe:'​4月17日至18日，我校开展了为期两天的教学文档专项检查工作。4月17日下午，我校于科技楼3065会议室召开教学文档专项检查工作专......'},
                {pic:Happen3,describe:'​4月17日至18日，我校开展了为期两天的教学文档专项检查工作。4月17日下午，我校于科技楼3065会议室召开教学文档专项检查工作专......'},
                {pic:Happen4,describe:'​4月17日至18日，我校开展了为期两天的教学文档专项检查工作。4月17日下午，我校于科技楼3065会议室召开教学文档专项检查工作专......'}
            ]
        }
    }
    render(){
        return(
            <div className="happen">
                <div className="title">学校新闻</div>
                {this.state.happens.map((happen,index)=>{
                    return(
                        <div className="card" key={index}>
                            <img src={happen.pic}/>
                            <p>{happen.describe}</p>
                            <button>详 情  ></button>
                        </div>
                    )
                })}
                <button className="btn">了解更多</button>
            </div>
        )
    }
}
export default Happen;