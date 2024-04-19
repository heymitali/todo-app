import React from "react";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Todo />
    </Provider>
  );
};

export default App;
