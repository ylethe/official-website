/**
 * Created by grace on 17-4-22.
 */
import React,{Component} from 'react';
import Erweima from '../../../images/erweima.png';
import './index.css';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="content">
                    <ul>
                        <li>信息公开</li>
                        <li>招标采购</li>
                        <li>形象识别</li>
                        <li>服务信息</li>
                    </ul>
                    <ul>
                        <li>远程访问</li>
                        <li>馆藏检索</li>
                        <li>办公电话</li>
                        <li>云端东秦</li>
                    </ul>
                    <ul>
                        <li><img src={Erweima} /></li>
                    </ul>
                    <p>版权所有©东北大学秦皇岛分校 | 地址：河北省秦皇岛经济技术开发区泰山路143号 | 邮编：066004 | 技术维护：东北大学秦皇岛分校信息化建设与管理办公室 |&nbsp;冀ICP备字05002793号 | </p>
                </div>
            </div>
        )
    }
}
export default Footer;