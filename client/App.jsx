import { Suspense } from 'react';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import { routes } from 'router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Router>
          <Suspense fallback="Loading...">
            <Switch>
              {routes.map((route) => (
                <Route
                  exact
                  key={route.path}
                  path={route.path}
                  render={(props) => <route.component props={props} />}
                />
              ))}
            </Switch>
          </Suspense>
        </Router>
      </main>
      <Footer />
    </>
  );
}
