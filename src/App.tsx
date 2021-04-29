import React from 'react';
import { BrowserRouter,Switch, Route, Redirect,useHistory } from 'react-router-dom'
import CKEditor from "ckeditor4-react";

const Route1 = () => {
  const history = useHistory();

  return (
    <button onClick={() => { history.push("/route2") }}>
      Click to show editor
    </button>
  );
};

const Route2 = () => {
  return <CKEditor data="Click on `link` icon & go back via browser's button"/>;
};


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/route1' component={Route1} />
        <Route path='/route2' component={Route2} />
        <Redirect to='/route1' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
