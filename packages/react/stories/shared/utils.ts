const simpleControl = type => () => ({ control: { type } })

export const textControl = simpleControl("text")
export const booleanControl = simpleControl("boolean")
export const objectControl = simpleControl("object")
export const noControl = simpleControl(null)

export const selectControl = (options: any) => {
  return {
    control: {
      type: "select",
    },
    options: [...options],
  }
}

export const selectWithOptional = (options: any) => {
  return {
    control: {
      type: "select",
      labels: {
        undefined: "No Value (undefined)"
      }
    },
    options: [undefined,...options],
  }
}

export const radioWithOptional = (options: any) => {
  return {
    control: {
      type: "radio",
      labels: {
        undefined: "No Value (undefined)"
      }
    },
    options: [undefined,...options],
  }
}

