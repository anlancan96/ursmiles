import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderInfo from '../HeaderInfo';
import LeftSideBar from '../LeftSideBar';
import UserInfo from '../UserInfo';
import OtherPage from '../OtherPage';
import NotFoundPage from '../NotFoundPage';

export default class Main extends React.Component {
    componentDidMount() {
        !this.props.isLogin && this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <LeftSideBar/>
                <div>
                    <HeaderInfo/>
                    <div style={{ overflowY: 'auto', height: 'calc(100vh - 100px)' }}>
                        <Switch>
                            <Route exact path="/private" component={UserInfo} />
                            <Route path="/private/other" component={OtherPage} />
                            <Route path="/private/" component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
