
// import Header from "../componets/Header/Header.jsx";
import {CORE_CONCEPTS} from "./data.js";
import CoreComponent from './components/CoreComponent';
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";



function App() {

  function handleSelect(main){
    console.log(main);
  }

  function handle2(main){
    console.log(main);
  }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <ul>
            <CoreComponent
              {...CORE_CONCEPTS[0]}
            />
            <CoreComponent
              {...CORE_CONCEPTS[1]}
            />
            <CoreComponent
              {...CORE_CONCEPTS[2]}
            />
            <CoreComponent
              {...CORE_CONCEPTS[3]}
            />
          </ul>
         
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={()=>handle2("JSX")}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton> 
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
