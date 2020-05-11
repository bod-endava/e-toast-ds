import React from 'react';

const Padded = ({ children }) => <div style={{margin: "16px"}}>
  {children}
</div>

const ButtonDemo = ({ name }) => {
  const cl = `eds-${name.toLowerCase()}-button`
  return <section>
    <h2>{name} Button</h2>
    <Padded><button className={cl} >Button</button></Padded>
    <Padded><button className={cl} disabled>Button</button></Padded>
  </section>
}

function App() {
  return (
    <div>
      <h1>Buttons!</h1>
      <ButtonDemo name="Primary" />
      <ButtonDemo name="Outline" />
      <ButtonDemo name="Cta" />
      <ButtonDemo name="Text" />
    </div>
  );
}

export default App;
