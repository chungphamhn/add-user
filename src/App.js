import { useState } from "react";
import AddUser from "./components/User/AddUser";
import ShowUsers from "./components/User/ShowUsers";
import ErrorModal from "./components/UI/ErrorModal";

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const addUser = (userName, userAge) => {
    setData((prevState) => {
      return [...prevState, { name: userName, age: userAge }]
    });
  };

  const cancelError = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal
        title={error.title}
        message={error.message}
        onCancelError={cancelError}
      />}
      <AddUser
        onAddUser={addUser}
        onSetError={setError}
      />
      <ShowUsers data={data}
      />
    </div>
  );
}

export default App;
