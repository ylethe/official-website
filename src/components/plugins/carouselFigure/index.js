/**
 * Created by lethe on 17-4-22.
 */
import React, {Component} from 'react';
import img1 from '../../../images/image1.jpg';
import img2 from '../../../images/2017.04.07.chuantian11.jpg';
import img3 from '../../../images/2017.04.07.chuantian12.jpg';
import img4 from '../../../images/2017.04.07.chuantian13.jpg';
import img5 from '../../../images/20161201dongtian4.jpg';
import './index.css';
import animate from '../../../until/animate';

let timer;
class CarouselFigure extends Component{
    constructor(props){
        super(props);
        this.handlePrePic = this.handlePrePic.bind(this);
        this.handleNextPic = this.handleNextPic.bind(this);
    }
    componentWillMount(){
        timer = setInterval(function () {
            animate(this.refs.imgList,-800);
        }, 1500)
    }
    handlePrePic(){
        console.log('shangyiz');
        let list = this.refs.imgList;
        animate(list,800);
    }
    handleNextPic(){
        console.log('xiayiz');
        animate(this.refs.imgList,-800);
    }
    render(){
        return(
            <div className="carouse-figure">
                <div className="main-content">
                    <div className="slider">
                        <div className="images" style={{left: 0}} ref="imgList" id="imgList">
                            <img src={img5}/>
                            <img src={img1}/>
                            <img src={img2}/>
                            <img src={img3}/>
                            <img src={img4}/>
                            <img src={img5}/>
                            <img src={img1}/>
                        </div>
                    </div>
                    <div className="describe"><p>Northeastern University in Qinhuangdao</p></div>
                </div>
                <div className="bottom-content">
                    <div className="slide-txt">东北大学秦皇岛分校</div>
                    <div className="control-btn">
                        <div className="btn" id="left-btn">
                            <button ref="leftBtn" onClick={this.handlePrePic}>{"<"}</button>
                        </div>
                        <div className="btn" id="right-btn">
                            <button ref="rightBtn" onClick={this.handleNextPic}>{">"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CarouselFigure;