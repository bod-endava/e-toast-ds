import React from 'react';

const Padded = ({ children }) => <div style={{margin: "16px"}}>
  {children}
</div>

const ButtonDemo = ({ name }) => {
  const cl = `eds-button--${name.toLowerCase()}`
  return <section>
    <h2>{name} Button</h2>
    <Padded><button className={cl} >{name}</button></Padded>
    <Padded><button className={cl} disabled>{name} Disabled</button></Padded>
  </section>
}

function App() {
  return (
    <div>
      <h1>Buttons!</h1>
      <ButtonDemo name="Primary" />
      <ButtonDemo name="Outline" />
    </div>
  );
}

export default App;
