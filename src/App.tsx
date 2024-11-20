import { fabricLightTheme, setTheme } from "@fabric-msft/theme";
import './App.css'
import FilterPillDemo from './components/FilterPill/FilterPillDemo';

setTheme(fabricLightTheme);

function App() {

  return (
    <>
      <div>
      <FilterPillDemo />
      </div>
    </>
  )
}

export default App
