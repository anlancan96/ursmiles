import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderInfo from '../HeaderInfo';
import LeftSideBar from '../LeftSideBar';
import UserInfo from '../UserInfo';
import OtherPage from '../OtherPage';
import NotFoundPage from '../NotFoundPage';
import PatientInfo from '../PatientInfo';
import KhamNgoaiMatPage from '../KhamNgoaiMatPage';
import ModifyUser from '../ModifyUser';
import KhamTrongMieng from '../KhamTrongMiengPage';

export default class Main extends React.Component {
    componentDidMount() {
        !this.props.isLogin && this.props.history.push('/');
    }
    componentWillReceiveProps(nextProps) {
        !nextProps.isLogin && this.props.history.push('/');
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
                            <Route path="/private/patientInfo" component={PatientInfo}/>
                            <Route path="/private/modify" component={ModifyUser}/>
                            <Route path="/private/khamtrongmieng" component={KhamTrongMieng}/>
                            <Route path="/private/khamngoaimat" component={KhamNgoaiMatPage}/>
                            <Route path="/private/" component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
