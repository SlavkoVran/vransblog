import React, { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Posts from './components/posts/Posts';
import SinglePost from './components/singlePost/SinglePost'
import NotFound from './components/errorPage/ErrorPage'
import Home from './components/home/Home'
import { DataContextProvider } from "./contexts/DataContext"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  const ShowComponentName = (name: any) => {
    useEffect(() => {
      console.log(`Hello from <${name}>`)
    }, [name])
  }

  return (
    <Router>
      <div className="App column">
        <DataContextProvider>
          <Navbar helloText={ShowComponentName} />
          <Switch>
            <Route exact path='/'>
              <Home helloText={ShowComponentName} />
            </Route>
            <Route exact path='/posts'>
              <Posts helloText={ShowComponentName} />
            </Route>
            <Route path='/posts/:id'>
              <SinglePost helloText={ShowComponentName} />
            </Route >
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </DataContextProvider>
      </div>
    </Router>
  );
}

export default App;