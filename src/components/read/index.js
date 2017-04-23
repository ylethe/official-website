/**
 * Created by lethe on 17-4-23.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.css';
import imgOne from '../../images/E64ED507787092B3C03E702F308_EF7A33DE_74AD.jpg';

class ContentPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="content-page">
                <h1>校长刘建昌率队应邀考察南京中科煜宸激光技术有限公司</h1>
                <div className="line"></div>
                <ul>
                    <li>日期：2017-04-19</li>
                    <li>作者:孙丹</li>
                    <li>来源：学校办公室</li>
                    <li>关注：[607]</li>
                </ul>
                <div className="artical">
                    <p>4月15日上午，应南京中科煜宸激光技术有限公司邀请，我校校长刘建昌、党委副书记王斌等一行5人赴该公司考察并举行座谈。</p>
                    <p>刘建昌一行在该公司董事长、中科院南京先进激光技术研究院副院长邢飞的陪同下参观了公司的研究所、展示馆，实地考察了其研发及生产车间、产品陈列室等。座谈会上，邢飞从公司的发展背景、技术优势、生产案例、未来展望等方面进行了详细介绍，随后，双方围绕“如何合作共赢”进行深入交流。邢飞表示，公司愿意为学校的创新创业发展、学生就业等方面提供力所能及的帮助和支持。刘建昌在高度赞扬了该公司自创办以来所取得的成就后指出，此次考察的主要目的是“学习”，中科煜宸所从事的事业具有革命性的意义，面向国家战略需求，不断进行技术创新，做到既高端又精细，进一步开拓了学校在人才培养模式改革、创新创业教育以及与地方的战略合作等方面的工作思路。学校将积极研究合作方式，充分做好学校优势资源和公司高新技术的有效融合，争取早日实现双方合作共赢。</p>
                    <p>据悉，南京中科煜宸激光技术有限公司成立于2013年，由国家“万人计划”人才、东北大学校友邢飞及其技术团队创办。是一家专业从事激光成套装备、激光加工技术、激光显示、激光测量以及激光核心器件研发与生产的国家级高新技术企业。</p>
                    <img src={imgOne}/>
                    <div className="other-news">
                        <p className="btn">上一条：<a href="#javascript">我校开展教学文档专项检查工作</a></p>
                        <p className="btn">下一条：<a href="#javascript">英国索尔福德大学John Fyfe和利物浦大学Stefania Tufi来我校讲学</a></p>
                    </div>
                    <Link to="/home" className="back-home">
                        返回首页>>
                    </Link>

                </div>
            </div>
        );
    }
}
export default ContentPage;

