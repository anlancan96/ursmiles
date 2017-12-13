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
import CreatePatientInfoPage from '../CreatePatientInfoPage';

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
                    <div style={{ overflowY: 'auto', height: 'calc(100vh - 0px)' }}>
                        <Switch>
                            <Route exact path="/ursmiles" component={UserInfo} />
                            <Route path="/ursmiles/other" component={OtherPage} />
                            <Route path="/ursmiles/create" component={CreatePatientInfoPage} />
                            <Route path="/ursmiles/patientInfo" component={PatientInfo}/>
                            <Route path="/ursmiles/modify" component={ModifyUser}/>
                            <Route path="/ursmiles/khamtrongmieng" component={KhamTrongMieng}/>
                            <Route path="/ursmiles/khamngoaimat" component={KhamNgoaiMatPage}/>
                            <Route path="" component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
