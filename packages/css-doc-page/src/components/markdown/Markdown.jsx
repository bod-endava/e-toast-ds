import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import AceEditor from "react-ace"
import styles from './Markdown.module.scss'

import "ace-builds/webpack-resolver"
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-jsx"
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = (props) => {
    const { name, code="" } = props;

    return <div className={styles.CodeExample}>
        <div
          dangerouslySetInnerHTML={{
            __html: code
          }}
        />
        <AceEditor 
            name={name}
            mode={"html"}
            theme="monokai"
            className={styles.AceEditor}
            showGutter={false}
            highlightActiveLine={false}
            readOnly={true}
            value={code}
            onLoad={(editor) => {
              editor.getSession().setUseWorker(false)
            }}
        />
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
        <div>
            <ReactMarkdown 
                source={docs}
                renderers={renderers}
            />
        </div>
    )
}

export default Markdown;