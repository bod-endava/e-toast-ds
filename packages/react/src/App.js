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

const InputDemo = ({ name, variant, label, placeholder, type, disabled, error, success, value }) => {
  const cl = `eds-${variant.toLowerCase()}-input`;
  const clLabel = `eds-label-${variant.toLowerCase()}-input`;
  return <section>
    <Padded>
      <div className={`${cl}-root`}>
        <div className="label-container">
          {label && <label htmlFor={name} className={`${clLabel} ${disabled ? `${clLabel}--disabled` : ''}`}>{label}</label>}
          {(label && error) && (<div className={`${clLabel}-block`}><i className="fas fa-exclamation-circle"></i> <p className={`${clLabel}--error`}>This field is required</p></div>)}
        </div>
        <div className={`${cl}-root-input`}>
        <input
          className={`${cl} ${error ? `${cl}--error`: ''} ${success ? `${cl}--success`: ''}`}
          type={type ? type : "text"}
          id={name}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          />
        {success && <i className={`fas fa-check-circle ${cl}--success-icon`}></i>}
      </div>
      </div>
    </Padded>
  </section>
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
      <h1>Inputs!</h1>
      <h2 style={{fontFamily: 'Roboto'}}>Outline Normal Input</h2>
      <InputDemo name="First" variant="Outline" label="Label" placeholder="Placeholder" />
      <InputDemo name="Second" variant="Outline" placeholder="Placeholder" />
      <h2 style={{fontFamily: 'Roboto'}}>Outline Error Input</h2>
      <InputDemo name="Thrid" variant="Outline" label="Label" placeholder="Placeholder" error/>
      <InputDemo name="Fourth" variant="Outline" placeholder="Placeholder" error/>
      <h2 style={{fontFamily: 'Roboto'}}>Outline Success Input</h2>
      <InputDemo name="Fifth" variant="Outline" label="Label" placeholder="Placeholder" value="Success" success/>
      <InputDemo name="Sixth" variant="Outline" placeholder="Placeholder" value="Success" success/>
      <h2 style={{fontFamily: 'Roboto'}}>Outline Disabled Input</h2>
      <InputDemo name="Seventh" variant="Outline" label="Label" placeholder="Placeholder" disabled/>
      <InputDemo name="Eighth" variant="Outline" placeholder="Placeholder" disabled/>
    </div>
  );
}

export default App;
