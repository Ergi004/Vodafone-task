import "./App.css";
import { UserTable } from "./Components/Table";

function App() {
  return (
    <div className="w-full h-full flex px-6 items-center lg:justify-center">
      <div className="w-[90vw] overflow-x-auto px-6 py-10 mt-10">
        <UserTable />
      </div>
    </div>
  );
}

export default App;
