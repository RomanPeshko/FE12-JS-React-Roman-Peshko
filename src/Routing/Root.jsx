import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CardHolder from "../Components/CardHolder/CardHolder";
import { Link } from "react-router-dom";

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
                        <Link to={"/cards"} className={"link__kanban"}>Kanban</Link>
                    </div>
                </Route>
                {/* <Route path={"/"}>
                    <Redirect to={"/cards"} />
                </Route> */}
            </Switch>
        </React.Fragment>
    )
}

export default RootRouter;