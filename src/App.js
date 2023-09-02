import { useState } from "react";
import AddUser from "./components/User/AddUser";
import ShowUsers from "./components/User/ShowUsers";
import ErrorModal from "./components/UI/ErrorModal";

function App() {

  const [data, setData] = useState([]);

  const addUser = (userName, userAge) => {
    setData((prevState) => {
      return [...prevState, { name: userName, age: userAge }]
    });
  };

  return (
    <div>
      <ErrorModal
        title="An error"
        message="Something went wrong!"
      />
      <AddUser onAddUser={addUser} />
      <ShowUsers data={data}
      />
    </div>
  );
}

export default App;
