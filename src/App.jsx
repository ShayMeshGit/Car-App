import "./App.css";
import { SearchArea } from "./components/SearchArea";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <header className=" w-full flex items-center justify-center bg-yellow-400">
        <h2 className="font-bold text-lg font p-3 uppercase">
          Welcome to Car Search
        </h2>
      </header>
      <h3 className=""> Please Enter your car Registration Number:</h3>
      <SearchArea />
    </div>
  );
}

export default App;
