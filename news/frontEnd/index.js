/**
 * Created by qiwei on 2017/9/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory ,IndexRoute,Link} from 'react-router';
import App from './components/app';
import Caijing from './components/newspage/caijing';
import Home from './components/newspage/home';
import Gupiao from './components/newspage/gupiao';
import Jiankang from './components/newspage/jiankang';
import Jiaoyu from './components/newspage/jiaoyu';
import Junshi from './components/newspage/junshi';
import Keji from './components/newspage/keji';
import Nvxing from './components/newspage/nvxing';
import Nba from './components/newspage/nba';
import Tiyu from './components/newspage/tiyu';
import Xingzuo from './components/newspage/xingzuo';
import Xinwen from './components/newspage/xinwen';
import Yuer from './components/newspage/yuer';
import Yule from './components/newspage/yule';
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/item/育儿" component={Yuer}/>
            <Route path="/item/新闻" component={Xinwen}/>
            <Route path="/item/财经" component={Caijing}/>
            <Route path="/item/股票" component={Gupiao}/>
            <Route path="/item/健康" component={Jiankang}/>
            <Route path="/item/教育" component={Jiaoyu}/>
            <Route path="/item/军事" component={Junshi}/>
            <Route path="/item/科技" component={Keji}/>
            <Route path="/item/NBA" component={Nba}/>
            <Route path="/item/女性" component={Nvxing}/>
            <Route path="/item/体育" component={Tiyu}/>
            <Route path="/item/星座" component={Xingzuo}/>
            <Route path="/item/娱乐" component={Yule}/>
        </Route>
    </Router>
), document.getElementById('app'));