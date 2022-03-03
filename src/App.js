import "./App.css";

import SearchArea from "./components/homePage/SearchArea";
import BookResults from "./components/homePage/BookResult";

function App() {
  return (
    <div>
      <div className="flex justify-center">
        <SearchArea />
      </div>
      <div className="flex justify-center mt-32">
        <BookResults />
      </div>
    </div>
  );
}

export default App;
