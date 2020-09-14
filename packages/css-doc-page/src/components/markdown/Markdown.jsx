import React, { useState, useEffect } from 'react'
import { Prism as Syntax } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown'
import styles from './Markdown.module.scss'

const CustomPre = (props) => {
  return <pre className={styles.Pre}>{props.children}</pre>
}

const CustomCode = (props) => {
  return <code className={styles.Code}>{props.children}</code>
}

const Editor = (props) => {
    const { name, code="" } = props;

    return <div className={styles.CodeExample}>
        <div
          className={styles.RenderedCode}
          dangerouslySetInnerHTML={{
            __html: code
          }}
        />
        <Syntax 
          language="html"
          PreTag={CustomPre}
          CodeTag={CustomCode}
        >
          {code}
        </Syntax>
    </div>
}

const renderers = (() => {
    let editors = 0;
    return {
      code(props){
        const { language="", value } = props
        if( language?.startsWith("interactive") ){
          const id = `__editor_${editors++}__`
          return <Editor 
            name={id}
            code={value}
          />
        }
        return <pre><code language={language}>{value}</code></pre>
      }
    }
  })()

const Markdown = (props) => {
    const { src } = props
    const [docs, setDocs] = useState("")

    useEffect(() => {
        fetch(src)
        .then(x => x.text())
        .then(setDocs)
    },[setDocs,src])

    return (
        <div className={styles.Markdown}>
            <ReactMarkdown 
                source={docs}
                renderers={renderers}
            />
        </div>
    )
}

export default Markdown;