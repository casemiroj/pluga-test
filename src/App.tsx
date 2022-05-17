import { Pagination } from "./components/Pagination";
import { SearchBar } from "./components/SearchBar";
import { ToolsContainer } from "./components/Tools/ToolsContainer";
import { ToolContextProvider } from "./context/tools";

export function App() { 
  return (
    <ToolContextProvider>
      <div className="h-screen flex flex-col">
        <SearchBar />
        <ToolsContainer />
        <Pagination />
      </div>
    </ToolContextProvider>
  );
}
