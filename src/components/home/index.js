/**
 * Created by grace on 17-4-22.
 */
import React ,{Component} from 'react';
import './index.css';
import Header from '../plugins/header';
import Footer from '../plugins/footer';

class Home extends Component{
    render(){
        return(
            <div className="home">
                <Header/>
                <Footer/>

            </div>
        )


    }
}
export default Home;