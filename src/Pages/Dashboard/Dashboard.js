import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ManageAdmin from './Components/ManageAdmin/ManageAdmin';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import Sidebar from './Shared/Sidebar/Sidebar';
import AddBicycle from './Components/AddBicycle/AddBicycle';
import ManageBicycle from './Components/ManageBicycle/ManageBicycle';

const Dashboard = () => {
    let { path } = useRouteMatch();

    return (
        <div>
                <div>
                <Sidebar></Sidebar>

                    <Switch>
                        <Route exact path={path}>
                            <h1>Dashboard</h1>
                        </Route>
                        <Route exact path={`${path}/admin`}>
                            <ManageAdmin></ManageAdmin>
                        </Route>

                        <Route exact path={`${path}/bicycle/add`}>
                            <AddBicycle></AddBicycle>
                        </Route>

                        <Route exact path={`${path}/bicycle`}>
                            <ManageBicycle></ManageBicycle>
                        </Route>

                        <Route exact path={`${path}/order`}>
                            <ManageOrder></ManageOrder>
                        </Route>
                    </Switch>
                </div>
        </div>
    );
};

export default Dashboard;