import React from 'react';
import getClassName from './getClassName'

const Padded = ({ children }) => <div style={{margin: "16px"}}>
  {children}
</div>

const ButtonDemo = ({ name, label, icon }) => {
  const ic = icon ? `icon-${icon}` : '';
  const cl = `eds-${name.toLowerCase()}-button ${ic}`;
  return <section>
    <h2>{label || name} Button</h2>
    <Padded><button className={cl}>Button</button></Padded>
    <Padded><button className={cl} disabled>Button</button></Padded>
  </section>
}

const Icon = ({ icon }) => {
  return <div className="icon-demo">
    <span className={`eds-icon ${icon}`} />
    <p>{icon}</p>
  </div>;
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
  const icon = extra.icon;
  const iconClass= root.extend("&__icon").get({
    "&--error": Boolean(error),
    "&--disabled": extra.disabled,
    "&--success": success,
  })


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
        <div>
          <input className={root} {...extra} /> <span className={ `eds-icon ${icon} ${iconClass}`}></span> 
        </div>
      </div>
    </Padded>
  </section>
}

const SelectDemo = ({ disabled, innerDisabled, placeholder="Choose one" }) => {
  const root = getClassName({
    base: "eds-select",
  })

  // const list = root.extend("&__list");
  // const item = root.extend("&__option");

  return <div className={root} disabled={disabled} >
    <select defaultValue="1" disabled={innerDisabled}>
      <option hidden>{placeholder}</option>
      <option value={1}>One</option>
      <option hidden>you dont see me</option>
      <option value={128}>Some really long option that will break all styles</option>
    </select>
  </div>
}

const TagsDemo = ({ closeAction }) => {
  const root = getClassName({
    base: "eds-tags",
  })
  const tag = root.extend("&__tag");

  return (
    <div className={root}>
      <div className={tag} tabIndex="0">
        Tag one
        <span tabIndex="0" className="eds-icon close" onClick={closeAction} />
      </div>
      <div className={tag} tabIndex="0">
        Tag with no close icon
      </div>
      <div className={tag} tabIndex="0" disabled>
        Disabled Tag
        <span tabIndex="0" className="eds-icon close" />
      </div>
    </div>
  );
}

const TimepickerDemo = ({ disabled, label="From" }) => {
  const root = getClassName({
    base: "eds-timepicker",
  });

  return <div className={root}>
    <label className={`${root}__label`}>{label}</label>
    <input name="hours"   placeholder="00" type="number" min="01" max="12" step="1" className={`${root}__hour`}/>
    <span>:</span>
    <input name="minutes" placeholder="00" type="number" min="00" max="59" step="1" className={`${root}__minute`}/>
    <select defaultValue="am" name="ampm" className={`${root}__ampm`}>
      <option value="am">AM</option>
      <option value="pm">PM</option>
    </select>
  </div>;
}

const Breadcrumb = ({ disabled }) => {
  const root = getClassName({
    base: "eds-breadcrumb",
  });

  return (
    <nav className={`${root}`} disabled={disabled}>
      <ul className={`${root}__list`}>
        <li className={`${root}__list__item`}>
          <a href="/#">
            <span className={`eds-icon home`} />
          </a>
        </li>
        <li className={`${root}__list__item`}>
          <a href="/#">Page 1</a>
        </li>
        <li className={`${root}__list__item`}>
          <a href="#" aria-current="page">
            Page 2
          </a>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  const icons = ["warning-circle", "warning-circle-fill", "information", "clock", "warning", "notification", "upload", "new-folder", "cloud", "copy", "document", "folder", "new-file", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "back", "caret-down", "caret-left", "caret-right", "caret-up", "down", "full-screen", "menu", "more", "next", "search", "settings", "up", "label", "image", "home", "filter", "expand", "edit", "download", "compress", "close", "chat", "calendar", "bookmark", "announcement", "add", "alert-message", "lock", "mail", "share", "trash", "circle-check", "check", "circle-x", "money"];
  return (
    <div>
      <section>
        <h1>Buttons!</h1>
        <ButtonDemo name="Primary" />
        <ButtonDemo name="Outline" label="Outline Primary"/>
        <ButtonDemo name="Cta" />
        <ButtonDemo name="Text" />
        <ButtonDemo name="Primary" icon="announcement" label="Icon + Label" />
        <ButtonDemo name="Icon" icon="add" />
      </section>
      <section>
        <h1>Icons!</h1>
        {
          icons.map( i => <Icon icon={i} key={i} />)
        }
      </section>
      <section>
        <h1>Checkbox!</h1>
        <Checkbox />
        <Checkbox checked readOnly/>
        <Checkbox disabled/>
        <List of="checkbox">
          <Checkbox label="Labeled checkbox" />
          <Checkbox label="Controlled checkbox" checked readOnly/>
          <Checkbox label="Disabled checkbox" disabled/>
        </List>
      </section>
      <section>
        <h1>Radio!</h1>
        <RadioButton />
        <RadioButton checked readOnly/>
        <RadioButton disabled/>
        <List of="radio">
          <RadioButton name="list" label="Labeled radio" />
          <RadioButton name="list" label="Controlled radio" checked readOnly/>
          <RadioButton name="list" label="Disabled radio" disabled/>
        </List>
      </section>
      <section>
        <h1>Toggle!</h1>
        <Toggle />
        <Toggle checked readOnly/>
        <Toggle disabled/>
        <List of="toggle">
          <Toggle label="Labeled toggle" />
          <Toggle label="Controlled toggle" checked readOnly/>
          <Toggle label="Disabled toggle" disabled/>
        </List>
      </section>
      <section>
        <h1>Inputs!</h1>
        <h2>Outline Normal Input</h2>
        <InputDemo name="First" variant="Outline" label="Label" placeholder="Placeholder" />
        <InputDemo name="Second" variant="Outline" placeholder="Placeholder" />
        <InputDemo name="Third" variant="Outline" icon="calendar"  placeholder="Placeholder" />
        <h2 style={{fontFamily: 'Roboto'}}>Outline Error Input</h2>
        <InputDemo name="Fourth" variant="Outline" label="Label" placeholder="Placeholder" error="This field is required"/>
        <InputDemo name="Fifth" variant="Outline" placeholder="Placeholder" error="This field is required"/>
        <InputDemo name="Sixth" variant="Outline" icon="circle-x" placeholder="Placeholder" error="This field is required"/>
        <h2 style={{fontFamily: 'Roboto'}}>Outline Success Input</h2>
        <InputDemo name="Seventh" variant="Outline" label="Label" placeholder="Placeholder" success/>
        <InputDemo name="Eighth" variant="Outline" placeholder="Placeholder" success/>
        <InputDemo name="Ninth" variant="Outline" icon="circle-check" placeholder="Placeholder" success />

        <h2 style={{fontFamily: 'Roboto'}}>Outline Disabled Input</h2>
        <InputDemo name="Tenth" variant="Outline" label="Label" placeholder="Placeholder" disabled/>
        <InputDemo name="Eleventh" variant="Outline" placeholder="Placeholder" disabled/>
        <InputDemo name="twelfth" variant="Outline" icon="calendar" placeholder="Placeholder" disabled/>


      </section>
      <section>
        <h1>Select!</h1>
        <div style={{ width: "435px" }}>
          <Padded>  
            <div style={{ width: "200px" , display: "inline-block"}}>
              <SelectDemo />
            </div>
            <div style={{ width: "200px" , display: "inline-block"}}>
              <SelectDemo />
            </div>
          </Padded>
          <Padded>
            <SelectDemo innerDisabled placeholder="Disabled from select"/>
          </Padded>
          <Padded>
            <SelectDemo disabled placeholder="Disabled from container"/>
          </Padded>
        </div>
      </section>
      <section>
        <h1>Timepicker</h1>
        <div style={{ width: "200px" , display: "inline-block"}}>
          <TimepickerDemo />
        </div>
      </section>
      <section>
        <h1>Typography</h1>
        <h1 className="eds-typography__h1">
          Title h1
          <p>
            Subtitle text
          </p>
        </h1>
        <h2 className="eds-typography__h2">
          Title h2
        </h2>
        <h3 className="eds-typography__h3">
          Title h3
        </h3>
        <h4 className="eds-typography__h4">
          Title h4
        </h4>
      </section>
      <section>
        <h1>Tags</h1>
        <TagsDemo closeAction={console.log} />
      </section>
      <section>
        <h1>Breadcrumbs</h1>
        <h2>Default</h2>
        <Breadcrumb />
        <h2>Disabled</h2>
        <Breadcrumb disabled />
      </section>
    </div>
  );
}

export default App;
