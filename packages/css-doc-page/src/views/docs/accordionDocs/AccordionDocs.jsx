import React, { useState } from "react";
import Hero from "../../../tostaditas-components/hero";
import ButtonsIcon from "../../../assets/img/button-docs.svg";
import styles from "./AccordionDocs.module.scss";
import accordionlMark from '../../../assets/markdown/accordion/accordionMark.md';
import Markdown from '../../../tostaditas-components/markdown';

const Sources = {
    accordion: accordionlMark,
    
  };



const AccordionDocs = () => {

    const [buttonType, setButtonType] = useState("accordion");
  return (
    <div className={styles.AccordionDocs}>
      <Hero
        title="Accordions"
        text="Express what action will occur on a page when the user interacts with them"
        image={ButtonsIcon}
        secondary
      />
      <main className={styles.Main}>
        <header className={styles.MainHeader}>
          <h1 className={styles.MainTitle}>Accordion</h1>
          <p className={styles.MainHeaderContent}>
          The accordion component allows the user to show and hide sections of related content on a page. An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.
          </p>
        </header>
        <div className="wrapper">
          <div className="eds-accordion">
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
       <Markdown src={Sources[`${buttonType}`]} />
      </main>
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



// import React, { useState } from "react";

// const AccordionDocs = () => {
//   return (
//     <div className="wrapper">
//       <div className="accordion">
//         <Disclosure
//           title="Label 1"
//           description="Lorem Ipsum is simply dummy text of the printing  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          
//         ></Disclosure>
//         <Disclosure
//           title="Label 2"
//           description="Lorem Ipsum is simply dummy text of the printing  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          
//         ></Disclosure>
//         <Disclosure
//           title="Label 3"
//           description="Lorem Ipsum is simply dummy text of the printing  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
//         ></Disclosure>
//         <Disclosure
//           title="Label 4"
//           description="Lorem Ipsum is simply dummy text of the printing  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
//         ></Disclosure>
//       </div>
//     </div>
//   );
// };

// const Disclosure = ({ title, description, disabled }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div
//       className={open ? "item show" : "item"}
//       onClick={() => setOpen((open) => !open)}
//       disabled={disabled}
//     >
//       <div className={open ? "title show" : "title"} disabled={disabled}>
//         {title}
//         <span
//           className={open ? "eds-icon caret-up" : "eds-icon caret-down"}
//         ></span>
//       </div>
//       {open && <div className="content show">{description}</div>}
//     </div>
//   );
// };

// export default AccordionDocs;
