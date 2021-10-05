import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CardHolder from "../Components/CardHolder/CardHolder";

const RootRouter = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path={"/cards/:taskID"} render={(routeProps) => {
                    return (
                        `Datails for task with id ${routeProps.match.params.taskID}`
                    )
                }}>

                </Route>
                <Route path={"/cards"}>
                    <CardHolder />
                </Route>
                <Route exact path={"/"}>
                    <div className={'visitca'}>
                        Добро Пожаловать
                    </div>
                </Route>
                <Route>
                    <Redirect to={"/cards"}/>
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default RootRouter;