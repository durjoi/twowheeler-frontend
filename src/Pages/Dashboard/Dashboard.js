import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import ManageAdmin from './Components/ManageAdmin/ManageAdmin';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import Sidebar from './Shared/Sidebar/Sidebar';
import AddBicycle from './Components/AddBicycle/AddBicycle';
import ManageBicycle from './Components/ManageBicycle/ManageBicycle';
import useAuth from '../../Hooks/useAuth';
import Pay from './Components/Pay/Pay';
import MyOrders from './Components/MyOrders/MyOrders';
import Review from './Components/Review/Review';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';

const Dashboard = () => {
    let { path } = useRouteMatch();
    const {isAdmin} = useAuth();

    return (
        <div>
                <div>
                <Sidebar></Sidebar>

                    <Switch>
                        <PrivateRoute exact path={path}>
                            {
                                isAdmin ? <ManageOrder></ManageOrder> : <MyOrders></MyOrders>
                            }
                            
                        </PrivateRoute>
                        <PrivateRoute exact path={`${path}/admin`}>
                            <ManageAdmin></ManageAdmin>
                        </PrivateRoute>

                        <PrivateRoute exact path={`${path}/pay`}>
                            <Pay></Pay>
                        </PrivateRoute>

                        <PrivateRoute exact path={`${path}/review`}>
                            <Review></Review>
                        </PrivateRoute>

                        <PrivateRoute exact path={`${path}/my-orders/`}>
                            <MyOrders></MyOrders>
                        </PrivateRoute>

                        <PrivateRoute exact path={`${path}/bicycle/add`}>
                            <AddBicycle></AddBicycle>
                        </PrivateRoute>

                        <PrivateRoute exact path={`${path}/bicycle`}>
                            <ManageBicycle></ManageBicycle>
                        </PrivateRoute>

                        <PrivateRoute exact path={`${path}/order`}>
                            <ManageOrder></ManageOrder>
                        </PrivateRoute>
                    </Switch>
                </div>
        </div>
    );
};

export default Dashboard;