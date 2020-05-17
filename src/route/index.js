/* eslint-disable no-undef */
/* eslint-disable */
/* eslint-disable no-console */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { getCookie } from '../cookies'
import { routes } from './routes';
import CanAccess from "../components/CanAccess"
const RouterApp = (props) => {
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {
                            routes.map((v, k) => {
                                if (v.isNotRequired) {
                                    return (
                                        <Route key={k} path={v.path} component={v.component} exact={true} />
                                    )
                                } else {

                                    if (v.isAccessible) {
                                        return (
                                            <ProtectedRoute key={k} exact path={v.path} layout={v.layout} component={v.component} pageTitle={v.pageTitle} linkName={v.linkName} isAccessible={v.isAccessible} />
                                        )
                                    }
                                }
                            })
                        }
                    </Switch>
                </Suspense>
            </Router>
        </div>
    )
}

const ProtectedRoute = ({ layout: Layout, component: Component, pageTitle: pageTitle, linkName: linkName, isAccessible: isAccessible, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            isLogin() ?
                isValidUrl(isAccessible) ?
                    <Layout location={props.location} history={props.history} title={pageTitle} linkName={linkName} isAccessible={props.isAccessible}  >
                        <CanAccess rights={isAccessible}>
                            <Component  {...props} />
                        </CanAccess>
                    </Layout >
                    : <Redirect to={{ pathname: '/dashboard', state: "You are not authorized to this screen" }} />
                :
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )} />
    )
};

const isLogin = () => {
    const token = getCookie('access_token');
    if (token) {
        return true
    }
    return false
}

const isValidUrl = (rights) => {
    const rightsArray = JSON.parse(localStorage.getItem('rights'));
    if (rightsArray) {
        const isAccessible = rightsArray.findIndex((x => x.rights === rights));
        if (isAccessible >= 0) {
            return true
        }
        else if (isAccessible === -1) {
            return 'You are not authoried to anything'
        }
    }
}


export default RouterApp; 