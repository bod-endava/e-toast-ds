import React from 'react';

const Padded = ({ children }) => <div style={{margin: "16px"}}>
  {children}
</div>

function App() {
  return (
    <div>
      <h1>Buttons!</h1>
      <section>
        <h2>Base Buttons</h2>
        <Padded><button className="eds-button--primary">Primary</button></Padded>
        <Padded><button className="eds-button--cta">Cta</button></Padded>
        <Padded><button className="eds-button--disabled">Disabled</button></Padded>
      </section>

      <section>
        <h2>Text Buttons</h2>
        
      </section>
    </div>
  );
}

export default App;
