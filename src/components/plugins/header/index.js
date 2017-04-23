/**
 * Created by grace on 17-4-22.
 */
import React,{Component} from 'react';
import {Link} from 'react-router';
import Logo from '../../../images/logo.png';
import CarouselFigure from '../../plugins/carouselFigure';
import './index.css';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="nav">
                    <div className="content">
                        <ul>
                            <li><Link to="/home">服务门户</Link></li>
                            <li><Link to="/home">电子邮件</Link></li>
                            <li><Link to="/home">东北大学</Link></li>
                            <li><Link to="/home">旧版浏览</Link></li>
                        </ul>
                        <input type="text"/>
                    </div>

                </div>
                <div className="top">
                    <div className="content">
                        <div className="list">
                            <img className="logo" src={Logo} alt="logo"/>
                            <div className="listContent">
                                <ul>
                                    <li>> 人才招聘</li>
                                    <li>> 国际合作交流</li>
                                    <li>> 创新创业</li>
                                    <li>> 校园生活</li>
                                    <li>> 联系我们</li>
                                </ul>
                                <ul>
                                    <li>> 学校概况</li>
                                    <li>> 院系设置</li>
                                    <li>> 教学科研</li>
                                    <li>> 招生就业</li>
                                </ul>
                            </div>
                        </div>
                        <CarouselFigure/>
                    </div>
                </div>
            </div>
        )


    }
}
export default Header;