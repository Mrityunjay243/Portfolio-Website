import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
import endpoints from './constants/endpoints';

function MainApp() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch(endpoints.routes, {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  //     .catch((err) => err);
  // }, []);
  const data = endpoints.routes;

  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            {/* <Route exact path="/Portfolio-Website" component={Home} /> */}
            {/* Redirect from root "/" to "/Portfolio-Website" */}
            <Route exact path="/" render={() => <Redirect to="/Portfolio-Website" />} />
            {/* Route for "/Portfolio-Website" */}
            <Route exact path="/Portfolio-Website" component={Home} />
            {data
              && data.sections.map((route) => {
                const SectionComponent = React.lazy(() => import('./components/' + route.component));
                return (
                  <Route
                    key={route.headerTitle}
                    path={route.path}
                    component={() => (
                      <SectionComponent header={route.headerTitle} />
                    )}
                  />
                );
              })}
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;
