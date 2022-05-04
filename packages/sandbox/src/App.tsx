import React, {Component, FC} from 'react';
import getClassName from './getClassName';

const Padded: FC = ({ children }): JSX.Element => (
  <div style={{margin: "16px"}}>
    {children}
  </div>
);

interface IAvatar {
  content: Component | string
}

const AvatarDemo: FC<IAvatar> = ({ content }): JSX.Element => {
  return <div className="eds-avatar">
    {content}
  </div>
}

interface IBreadCrumb {
  disabled?: boolean
}

const Breadcrumb: FC<IBreadCrumb> = (): JSX.Element => {
  const root = getClassName({
    base: "eds-breadcrumb",
    token: undefined
  });

  return (
    <nav className={`${root}`}>
      {/*TODO: refactor the disabled attribute on div */}
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
          <a href="/#" aria-current="page">
            Page 2
          </a>
        </li>
      </ul>
    </nav>
  );
};

interface IButtonDemo {
  name: string;
  label?: string;
  icon?: string;
  size?: string;
}

const ButtonDemo: FC<IButtonDemo> = ({ name, label, icon, size}):JSX.Element => {
  const ic = icon ? `icon-${icon}` : '';
  const sz = size ? `${size}` : 'no-size';
  const cl = `eds-${name.toLowerCase()}-button eds-button-${sz} ${ic}`;

  return (
    <section>
      <h2>{label || name} Button</h2>
      <Padded><button className={cl}>Button</button></Padded>
      <Padded><button className={cl} disabled>Button</button></Padded>
    </section>
  );
}

interface ICheckbox {
  [key: string]: string | boolean;
}

const Checkbox: FC<ICheckbox> = ({ label, ...extra }): JSX.Element => {
  if( label && typeof label === "string"){
    const id = label.replace(" ","_");
    const labelClass = `eds-checkbox__label ${extra.disabled ? "eds-checkbox__label--disabled" : ""}`;
    return (
      <div className="eds-checkbox__container">
        <input id={id} type="checkbox" className="eds-checkbox" {...extra} />
        <label htmlFor={id} className={labelClass} >{label}</label>
      </div>
    );
  }
  return <input type="checkbox" className="eds-checkbox" {...extra} />;
}

interface IDatepicker {
  disabled?: boolean,
  native?: boolean,
  innerDisabled?: boolean,
  label?: string
}

const Datepicker: FC<IDatepicker> = ({ disabled, native, innerDisabled, label }): JSX.Element => {
  const root = getClassName({
    base: `eds-datepicker`,
    token: undefined,
  })

  const labelCl = root.extend("&__label");
  const contCl = root.extend("&__container");

  if( native ){
    return <Padded><input className="eds-datepicker-native" type="date"/></Padded>
  }

  return (
    <Padded>
      <div className={root.toString()}>
        {/*TODO: refactor the disabled attribute on div */}
        {label && <label className={labelCl.toString()} htmlFor={label} >{label}</label>}
        <div className={contCl.toString()}>
          <input id={label} placeholder="DD/MM/YY" disabled={innerDisabled} type="text" onChange={() => alert("change")}/>
        </div>
      </div>
    </Padded>
  )
}

interface IIcon {
  icon: string;
}

const Icon: FC<IIcon> = ({ icon }): JSX.Element => {
  return (
    <div className="icon-demo">
      <span className={`eds-icon ${icon}`} />
      <p>{icon}</p>
    </div>
  );
}


interface IInput {
  [key: string]: string | boolean
}

const InputDemo: FC<IInput> = ({ name, label, success, error='', ...extra }):JSX.Element => {
  const root = getClassName({
    base: "eds-outline-input",
    token: undefined,
    "&--error": Boolean(error),
    "&--success": success,
  });

  const labelRoot = root.extend("&__label").get({
    base: "",
    token: undefined,
    "&--error": Boolean(error),
  })
  const labelText = labelRoot.extend("&__text").get({
    base: "",
    token: undefined,
    "&--error": Boolean(error),
    "&--disabled": extra.disabled
  })
  const labelRight = labelRoot.extend("&__error-alert");
  const icon = extra.icon;
  const iconClass= root.extend("&__icon").get({
    base: "",
    token: undefined,
    "&--error": Boolean(error),
    "&--disabled": extra.disabled,
    "&--success": success,
  })

  return (
    <section>
      <Padded>
        <div className={`${root}__container`}>
          <div className={labelRoot.toString()}>
            <label className={labelText.toString()}>
              {label}
            </label>
            {error && <div className={labelRight.toString()}>
              {error}
            </div>}
          </div>
          <div>
            <input className={root.toString()} {...extra} />
            <span className={ `eds-icon ${icon} ${iconClass}`}/>
          </div>
        </div>
      </Padded>
    </section>
  )
}

interface IList {
  of: string
}

const List: FC<IList> = ({ of, children, ...extra }): JSX.Element => {
  return <div className={`eds-${of}__list`} {...extra}>
    {children}
  </div>
}

interface IRadioButton {
  [key: string]: string | boolean;
}


interface INavBar {
  disabled?: boolean
}

const NavBar: FC<INavBar> = ({ disabled }): JSX.Element => {
  const root = getClassName({
    base: "eds-navbar",
    token: undefined
  });
  return (
    <nav className={`${root}`}>
      {/*TODO: refactor the disabled attribute on nav */}
      <ul className="eds-navbar-links eds-navbar--hidden">
        <li className="eds-navbar-link eds-navbar-link--active"><a href="#">Home</a></li>
        <li className="eds-navbar-link"><a href="#">Projects</a></li>
        <li className="eds-navbar-link"><a href="#">About</a></li>
      </ul>
    </nav>
  );
};

interface IPagination {
  disabled?: boolean
}

const Pagination: FC<IPagination> = ({ disabled }): JSX.Element => {
  const root = getClassName({
    base: "eds-pagination",
    token: undefined
  });
  return (
    <nav className={`${root}`}>
      {/*TODO: refactor the disabled attribute on nav */}
      <ul>
        {/* eslint-disable-next-line */}
        <a href="#"><li>Prev</li></a>
        {/* eslint-disable-next-line */}
        <a href="#"><li>1</li></a>
        {/* eslint-disable-next-line */}
        <a href="#"><li>2</li></a>
        {/* eslint-disable-next-line */}
        <a href="#" className={`${root}--is-active`}><li>3</li></a>
        {/* eslint-disable-next-line */}
        <a href="#"><li>4</li></a>
        {/* eslint-disable-next-line */}
        <a href="#" className={`${root}--is-disabled`}><li>5</li></a>
        {/* eslint-disable-next-line */}
        <a href="#"><li>Next</li></a>
      </ul>
    </nav>
  );
};

const RadioButton: FC<IRadioButton> = ({ label, ...extra }):JSX.Element => {
  if( label && typeof label === "string") {
    const id = label.replace(" ","_");
    const labelClass = `eds-radio__label ${extra.disabled ? "eds-radio__label--disabled" : ""}`;
    return (
      <div className="eds-radio__container">
        <input id={id} type="radio" className="eds-radio" {...extra} />
        <label htmlFor={id} className={labelClass} >{label}</label>
      </div>
    );
  }
  return <input type="radio" className="eds-radio" {...extra} />;
}

interface ISelect {
  disabled?:boolean
  innerDisabled?: boolean;
  disabledClass?: boolean;
  placeholder?: string;
}

const SelectDemo: FC<ISelect> = ({ innerDisabled, disabledClass, placeholder="Choose one" }): JSX.Element => {
  const root = getClassName({
    token:undefined,
    base: "eds-select",
    "&--disabled": disabledClass
  })

  return (
    <div className={root.toString()}>
      {/*TODO: refactor the disabled attribute on div */}
      <select defaultValue="1" disabled={innerDisabled}>
        <option hidden>{placeholder}</option>
        <option value={1}>One</option>
        <option hidden>you dont see me</option>
        <option value={128}>Some really long option that will break all styles</option>
      </select>
    </div>
  )
}

interface ITags{
  closeAction: (params:any) => void
}

const TagsDemo: FC<ITags> = ({ closeAction }): JSX.Element => {
  const root = getClassName({
    token: undefined,
    base: "eds-tags",
  })
  const tag = root.extend("&__tag");

  return (
    <div className={root.toString()}>
      <div className={tag.toString()} tabIndex={0}>
        Tag one
        <span tabIndex={0} className="eds-icon close" onClick={closeAction} />
      </div>
      <div className={tag.toString()} tabIndex={0}>
        Tag with no close icon
      </div>
      {/*TODO: refactor the disabled attribute on div */}
      <div className={tag.toString()} tabIndex={0}>
        Disabled Tag
        <span tabIndex={0} className="eds-icon close" />
      </div>
    </div>
  );
}

interface ITextArea {
  name?: string;
  icon?: string;
  label?: string;
  disabled?: boolean;
  variant?: string;
  placeholder?: string;
}

const TextArea: FC<ITextArea> = ({ name, label, icon, disabled, variant, placeholder }): JSX.Element => {
  const hasIcon = Boolean(icon);
  const root = getClassName({
    base: "eds-outline-textarea",
    "&--has-icon": hasIcon,
    token: undefined
  });

  const iconClass= root.extend("&__icon").get({
    "&--disabled": disabled,
    token:undefined,
    base:""
  });

  return (
    <section>
      <Padded>
        <div className={`${root}__container`}>
          <textarea
            className={root.toString()}
            name={name}
            disabled={disabled}
            placeholder={placeholder}
          />
          <span className={ `eds-icon ${icon} ${iconClass}`}/>
        </div>
      </Padded>
    </section>
  );
};

interface ITimepicker {
  disabled?: boolean;
  label?: string;
}

const TimepickerDemo: FC<ITimepicker> = ({ label="From" }): JSX.Element => {
  const root = getClassName({
    base: "eds-timepicker",
    token: undefined
  });

  return (
    <div className={root.toString()}>
      {/*TODO: refactor the disabled attribute on div */}
      <label className={`${root}__label`}>{label}</label>
      <input name="hours"   placeholder="00" type="number" min="01" max="12" step="1" className={`${root}__hour`}/>
      <span>:</span>
      <input name="minutes" placeholder="00" type="number" min="00" max="59" step="1" className={`${root}__minute`}/>
      <select defaultValue="am" name="ampm" className={`${root}__ampm`}>
        <option value="am">AM</option>
        <option value="pm">PM</option>
      </select>
    </div>
  );
}

interface IToggle {
  [key: string]: string | boolean;
}

const Toggle: FC<IToggle> = ({ label, ...extra }): JSX.Element => {
  if( label && typeof label === "string") {
    const id = label.replace(" ","_");
    const toggle = getClassName({ base: "eds-toggle", token: undefined });
    const container = toggle.extend("&__container");
    const labelClass = toggle.extend("&__label").get({
      base:"",
      token: undefined,
      "&--disabled": extra.disabled
    });
    return (
      <div className={container.toString()}>
        <input id={id} type="checkbox" className={toggle.toString()} {...extra} />
        <label htmlFor={id} className={labelClass.toString()} >{label}</label>
      </div>
    );
  }
  return <input type="checkbox" className="eds-toggle" {...extra} />;
}

function App() {
  const icons = ["warning-circle", "warning-circle-fill", "information", "clock", "warning", "notification", "upload", "new-folder", "cloud", "copy", "document", "folder", "new-file", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "back", "caret-down", "caret-left", "caret-right", "caret-up", "down", "full-screen", "menu", "more", "next", "search", "settings", "up", "label", "image", "home", "filter", "expand", "edit", "download", "compress", "close", "chat", "calendar", "bookmark", "announcement", "add", "alert-message", "lock", "mail", "share", "trash", "circle-check", "check", "circle-x", "money"];
  return (
    <div>
      <section id="eds-avatar">
        <h1>Avatar</h1>
        <AvatarDemo content="Aa"/>
      </section>

      <section id="eds-breadcrumbs">
        <h1>Breadcrumbs</h1>
        <h2>Default</h2>
        <Breadcrumb />
        <h2>Disabled</h2>
        <Breadcrumb disabled />
      </section>

      <section id="eds-buttons">
        <h1>Buttons</h1>
        <ButtonDemo name="Primary" label="Primary Small" size="small" />
        <ButtonDemo name="Outline" label="Outline Primary Small" size="small"/>
        <ButtonDemo name="Cta" label="CTA Small" size="small"/>
        <ButtonDemo name="Text" label="Text Small" size="small" />
        <ButtonDemo name="Primary" icon="announcement" label="Primary Icon + Label Small" size="small"/>
        <ButtonDemo name="Icon" icon="add" label="Icon Small" />

        <ButtonDemo name="Primary" />
        <ButtonDemo name="Outline" label="Outline Primary"/>
        <ButtonDemo name="Cta" />
        <ButtonDemo name="Text" />
        <ButtonDemo name="Primary" icon="announcement" label="Icon + Label" />
        <ButtonDemo name="Icon" icon="add" />
      </section>

      <section id="eds-checkbox">
        <h1>Checkbox</h1>
        <Checkbox />
        <Checkbox checked readOnly/>
        <Checkbox disabled/>
        <List of="checkbox">
          <Checkbox label="Labeled checkbox" />
          <Checkbox label="Controlled checkbox" checked readOnly/>
          <Checkbox label="Disabled checkbox" disabled/>
        </List>
      </section>

      <section id="eds-datepicker">
        <h1>Datepicker</h1>
        <h2>Default</h2>
        <Datepicker />
        <Datepicker label="With Label" />
        <h2>Disabled</h2>
        <Datepicker disabled/>
        <Datepicker innerDisabled/>
        <Datepicker disabled label="With Label"/>
        <Datepicker innerDisabled label="With Label (by input)"/>
        <h2>Native</h2>
        <Datepicker native />
      </section>

      <section id="eds-icons">
        <h1>Icons</h1>
        {
          icons.map( i => <Icon icon={i} key={i} />)
        }
      </section>

      <section id="eds-inputs">
        <h1>Inputs</h1>
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

      <section id="eds-navbar">
        <h1>Navbar</h1>
        <NavBar />
      </section>

      <section id="eds-pagination">
        <h1>Pagination</h1>
        <h2>Default</h2>
        <Pagination/>
        <h2>Disabled</h2>
        <Pagination disabled />
      </section>

      <section id="eds-radiobuttons">
        <h1>Radio</h1>
        <RadioButton />
        <RadioButton checked readOnly/>
        <RadioButton disabled/>
        <List of="radio">
          <RadioButton name="list" label="Labeled radio" />
          <RadioButton name="list" label="Controlled radio" checked readOnly/>
          <RadioButton name="list" label="Disabled radio" disabled/>
        </List>
      </section>

      <section id="eds-select">
        <h1>Select</h1>
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
          <Padded>
            <SelectDemo disabledClass placeholder="Disabled using eds-list--disabled"/>
          </Padded>
        </div>
      </section>

      <section id="eds-tags">
        <h1>Tags</h1>
        <TagsDemo closeAction={console.log} />
      </section>

      <section id="eds-textarea">
        <h1>TextArea!</h1>
        <h2>Outline Normal TextArea</h2>
        <TextArea name="normal" variant="Outline" placeholder="Placeholder" />
        <TextArea name="icon" variant="Outline" icon="calendar"  placeholder="Placeholder" />

        <h2 style={{fontFamily: 'Roboto'}}>Outline Disabled TextArea</h2>
        <TextArea name="dissabled" variant="Outline" placeholder="Placeholder" disabled/>
        <TextArea name="dissabled-icon" variant="Outline" icon="calendar" placeholder="Placeholder" disabled/>
      </section>

      <section id="eds-timepicker">
        <h1>Timepicker</h1>
        <div style={{ width: "200px" , display: "inline-block"}}>
          <TimepickerDemo />
        </div>
      </section>

      <section id="eds-toggle">
        <h1>Toggle</h1>
        <Toggle />
        <Toggle checked readOnly/>
        <Toggle disabled/>
        <List of="toggle">
          <Toggle label="Labeled toggle" />
          <Toggle label="Controlled toggle" checked readOnly/>
          <Toggle label="Disabled toggle" disabled/>
        </List>
      </section>

      <section id="eds-typography">
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

    </div>
  );
}

export default App;
