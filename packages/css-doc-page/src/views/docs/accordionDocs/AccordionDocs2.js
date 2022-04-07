import React, { useState } from "react";
// import { ReactComponent as ChevronComponent } from '../../../assets/img/chevron.svg';

const AccordionDocs = () => {
  const [selected, setSelected] = useState(null);
  const [disabledT, setDisabledT] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className={selected === i ? "item show" : "item"}>
            <div
              className={selected === i ? "title show " : "title"}
              onClick={() => {
                toggle(i);
              }}
            >
              <p>{item.question}</p>
              <span
                className={
                  selected === i ? "eds-icon caret-up" : "eds-icon caret-down"
                }
              ></span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    question: "Label 1",
    answer:
      "Lorem Ipsum is simply dummy text of the printing  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    question: "Label 2",
    answer:
      "Lorem Ipsum is simply dummy text of the printing  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    question: "Label 3",
    answer:
      "Lorem Ipsum is simply dummy text of the printing  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    question: "Label 4",
    answer:
      "Lorem Ipsum is simply dummy text of the printing  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
];

export default AccordionDocs;
