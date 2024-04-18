import {Route, Routes} from 'react-router-dom'
import {publicRoutes} from "../routes";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {

    return (   
        <Routes>
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} exact path={path} element={<Element/>}/>
            )} 
        </Routes>   
    );
});

export default AppRouter;