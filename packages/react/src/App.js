import React from 'react';
import getClassName from './getClassName'

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
    const toggle = getClassName({ base: "eds-toggle" })
    const container = toggle.extend("&__container");
    const labelClass = toggle.extend("&__label").get({
      "&--disabled": extra.disabled
    })
    return <div className={container}>
      <input id={id} type="checkbox" className={toggle} {...extra} />
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

const InputDemo = ({ name, label, success, error='', ...extra }) => {
  const root = getClassName({
    base: "eds-outline-input",
    "&--error": Boolean(error),
    "&--success": success,
  });

  const labelRoot = root.extend("&__label").get({
    "&--error": Boolean(error),
  })
  const labelText = labelRoot.extend("&__text").get({
    "&--error": Boolean(error),
    "&--disabled": extra.disabled
  })
  const labelRight = labelRoot.extend("&__error-alert");

  return <section>
    <Padded>
      <div className={`${root}__container`}>
        <div className={labelRoot}>
          <label className={labelText}>
            {label}
          </label>
          {error && <div className={labelRight}>
            {error}
          </div>}
        </div>
        <input className={root} {...extra} />
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
      <Checkbox checked readOnly/>
      <Checkbox disabled/>
      <List of="checkbox">
        <Checkbox label="Labeled checkbox" />
        <Checkbox label="Controlled checkbox" checked readOnly/>
        <Checkbox label="Disabled checkbox" disabled/>
      </List>

      <h1>Radio!</h1>
      <RadioButton />
      <RadioButton checked readOnly/>
      <RadioButton disabled/>
      <List of="radio">
        <RadioButton name="list" label="Labeled radio" />
        <RadioButton name="list" label="Controlled radio" checked readOnly/>
        <RadioButton name="list" label="Disabled radio" disabled/>
      </List>

      <h1>Toggle!</h1>
      <Toggle />
      <Toggle checked readOnly/>
      <Toggle disabled/>
      <List of="toggle">
        <Toggle label="Labeled toggle" />
        <Toggle label="Controlled toggle" checked readOnly/>
        <Toggle label="Disabled toggle" disabled/>
      </List>
      <h1>Inputs!</h1>
      <h2 style={{fontFamily: 'Roboto'}}>Outline Normal Input</h2>
      <InputDemo name="First" variant="Outline" label="Label" placeholder="Placeholder" />
      <InputDemo name="Second" variant="Outline" placeholder="Placeholder" />
      <h2 style={{fontFamily: 'Roboto'}}>Outline Error Input</h2>
      <InputDemo name="Thrid" variant="Outline" label="Label" placeholder="Placeholder" error="This field is required"/>
      <InputDemo name="Fourth" variant="Outline" placeholder="Placeholder" error="This field is required"/>
      <h2 style={{fontFamily: 'Roboto'}}>Outline Success Input</h2>
      <InputDemo name="Fifth" variant="Outline" label="Label" placeholder="Placeholder" success/>
      <InputDemo name="Sixth" variant="Outline" placeholder="Placeholder" success/>
      <h2 style={{fontFamily: 'Roboto'}}>Outline Disabled Input</h2>
      <InputDemo name="Seventh" variant="Outline" label="Label" placeholder="Placeholder" disabled/>
      <InputDemo name="Eighth" variant="Outline" placeholder="Placeholder" disabled/>
    </div>
  );
}

export default App;
