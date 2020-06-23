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
    const id = label.replace(" ","_");
    const labelClass = `eds-checkbox__label ${extra.disabled ? "eds-checkbox__label--disabled" : ""}`
    return <div className="eds-checkbox__container">
      <input id={id} type="checkbox" className="eds-checkbox" {...extra} />
      <label htmlFor={id} className={labelClass} >{label}</label>
    </div>
  }
  return <input type="checkbox" className="eds-checkbox" {...extra} />
}

const RadioButton = ({ label, ...extra }) => {
  if( label ) {
    const id = label.replace(" ","_");
    const labelClass = `eds-radio__label ${extra.disabled ? "eds-radio__label--disabled" : ""}`
    return <div className="eds-radio__container">
      <input id={id} type="radio" className="eds-radio" {...extra} />
      <label htmlFor={id} className={labelClass} >{label}</label>
    </div>
  }
  return <input type="radio" className="eds-radio" {...extra} />
}

const Toggle = ({ label, ...extra }) => {
  if( label ) {
    const id = label.replace(" ","_");
    const labelClass = `eds-toggle__label ${extra.disabled ? "eds-toggle__label--disabled" : ""}`
    return <div className="eds-toggle__container">
      <input id={id} type="checkbox" className="eds-toggle" {...extra} />
      <label htmlFor={id} className={labelClass} >{label}</label>
    </div>
  }
  return <input type="checkbox" className="eds-toggle" {...extra} />
}

const List = ({ of, children, ...extra }) => {
  return <div className={`eds-${of}__list`} {...extra}>
    {children}
  </div>
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
      <List of="checkbox">
        <Checkbox label="Labeled checkbox" />
        <Checkbox label="Controlled checkbox" checked/>
        <Checkbox label="Disabled checkbox" disabled/>
      </List>

      <h1>Radio!</h1>
      <RadioButton />
      <RadioButton checked/>
      <RadioButton disabled/>
      <List of="radio">
        <RadioButton name="list" label="Labeled radio" />
        <RadioButton name="list" label="Controlled radio" checked/>
        <RadioButton name="list" label="Disabled radio" disabled/>
      </List>

      <h1>Toggle!</h1>
      <Toggle />
      <Toggle checked/>
      <Toggle disabled/>
      <List of="toggle">
        <Toggle label="Labeled toggle" />
        <Toggle label="Controlled toggle" checked/>
        <Toggle label="Disabled toggle" disabled/>
      </List>
    </div>
  );
}

export default App;
