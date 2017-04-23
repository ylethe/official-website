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
import Swiper from 'swiper';
class CarouselFigure extends Component{
    constructor(props){
        super(props);
        this.state = {
            describe:"Northeastern University in Qinhuangdao"
        };
    }
    componentDidMount(){
        let mySwiper = new Swiper('.slider', {
            nextButton: '#right-btn',
            prevButton: '#left-btn',
            autoplay: 1500,
            speed: 1000,
            loop: true,
            grabCursor: true,
            mousewheelControl: true,
            lazyLoading: true,
        });
    }
    render(){
        return(
            <div className="carouse-figure">
                <div className="main-content">
                    <div className="slider">
                        <div className="swiper-wrapper" style={{left: 0}} ref="imgList" id="imgList">
                            <div className="swiper-slide"><img src={img1}/></div>
                            <div className="swiper-slide"><img src={img2}/></div>
                            <div className="swiper-slide"><img src={img3}/></div>
                            <div className="swiper-slide"><img src={img4}/></div>
                            <div className="swiper-slide"><img src={img5}/></div>
                        </div>
                    </div>
                    <div className="describe"><p>{this.state.describe}</p></div>
                </div>
                <div className="bottom-content">
                    <div className="slide-txt">东北大学秦皇岛分校</div>
                    <div className="control-btn" ref="btn">
                        <div className="btn" id="left-btn">
                            <button ref="leftBtn">{"<"}</button>
                        </div>
                        <div className="btn" id="right-btn">
                            <button ref="rightBtn">{">"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CarouselFigure;