import React, { useState } from "react";

const AccordionDocs = () => {
  return (
    <div className="wrapper">
      <div className="accordion">
        <Disclosure
          title="Label 1"
          description="Lorem Ipsum is simply dummy text of the printing  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          
        ></Disclosure>
        <Disclosure
          title="Label 2"
          description="Lorem Ipsum is simply dummy text of the printing  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          
        ></Disclosure>
        <Disclosure
          title="Label 3"
          description="Lorem Ipsum is simply dummy text of the printing  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        ></Disclosure>
        <Disclosure
          title="Label 4"
          description="Lorem Ipsum is simply dummy text of the printing  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        ></Disclosure>
      </div>
    </div>
  );
};

const Disclosure = ({ title, description, disabled }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={open ? "item show" : "item"}
      onClick={() => setOpen((open) => !open)}
      disabled={disabled}
    >
      <div className={open ? "title show" : "title"} disabled={disabled}>
        {title}
        <span
          className={open ? "eds-icon caret-up" : "eds-icon caret-down"}
        ></span>
      </div>
      {open && <div className="content show">{description}</div>}
    </div>
  );
};

export default AccordionDocs;
