
import { useState } from "react";
import {CORE_CONCEPTS} from "./data.js";
import CoreComponent from './components/CoreComponent';
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";



function App() {
  const [selectedTopic, setSelectedTopic] = useState();
 
  function handleSelect(selectButton){
    console.log(selectButton);
    setSelectedTopic(selectButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic){
    tabContent =(
      <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
    )

  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> (
              <CoreComponent key={conceptItem.title} {...conceptItem}/>
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              onSelect={()=>handleSelect("components")}
              isSelected={selectedTopic === 'components'}
              >Components
            </TabButton>
            <TabButton 
              onSelect={()=>handleSelect("jsx")} 
              isSelected={selectedTopic === 'jsx'}
              >JSX
            </TabButton>
            <TabButton 
              onSelect={()=>handleSelect("props")}
              isSelected={selectedTopic === 'props'}
              >Props
            </TabButton>
            <TabButton 
              onSelect={()=>handleSelect("state")}
              isSelected={selectedTopic === 'state'}
              >State
            </TabButton> 
          </menu>
         {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
