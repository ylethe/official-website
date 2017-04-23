/**
 * Created by grace on 17-4-22.
 */
import React ,{Component} from 'react';
import './index.css';
import Header from '../plugins/header';
import Footer from '../plugins/footer';
import Happen from '../plugins/happen';
import Notify from '../plugins/notify';
class Home extends Component{
    render(){
        return(
            <div className="home">
                <Header/>
                <div className="main">
                    <Happen/>
                    <Notify/>
                </div>
                <Footer/>
            </div>
        )


    }
}
export default Home;