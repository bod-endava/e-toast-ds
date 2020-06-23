import React from 'react';

const Padded = ({ children }) => <div style={{margin: "16px"}}>
  {children}
</div>

const ButtonDemo = ({ name, label }) => {
  const cl = `eds-${name.toLowerCase()}-button`
  return <section>
    <h2>{label || name} Button</h2>
    <Padded><button className={cl} >Button</button></Padded>
    <Padded><button className={cl} disabled>Button</button></Padded>
  </section>
}

const Checkbox = ({ label, ...extra }) => {
  if( label ){
    const labelClass = `eds-checkbox__label ${extra.disabled ? "eds-checkbox__label--disabled" : ""}`
    return <div className="eds-checkbox__label__container">
      <input id={label} type="checkbox" className="eds-checkbox" {...extra} />
      <label htmlFor={label} className={labelClass} >{label}</label>
    </div>
  }
  return <input type="checkbox" className="eds-checkbox" {...extra} />
} 

function App() {
  return (
    <div>
      <h1>Buttons!</h1>
      <ButtonDemo name="Primary" />
      <ButtonDemo name="Outline" label="Outline Primary"/>
      <ButtonDemo name="Cta" />
      <ButtonDemo name="Text" />

      <h1>Checkbox!</h1>
      <Checkbox />
      <Checkbox checked/>
      <Checkbox disabled/>
      <Checkbox label="Label" />
      <Checkbox label="Checked" checked/>
      <Checkbox label="Disabled" disabled/>
    </div>
  );
}

export default App;
