import Sidebar from "./Components/Sidebar/Sidebar";
import MainArea from "./Components/MainArea/MainArea";
import ListNotes from "./Components/ListNotes/ListNotes";
import DisplayNotes from "./Components/DisplayNote/DisplayNotes";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={ListNotes} />
        <Route path="/edit" exact component={MainArea} />
        <Route path="/displayNote/:id" exact component={DisplayNotes} />
      </Switch>
    </Router>
  );
}

export default App;
