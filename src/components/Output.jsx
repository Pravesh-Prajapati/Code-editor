import React, { useContext, useEffect, useState } from 'react'
import { CodeContext } from '../context/EditorContext'

function Output() {
    let { html, css, js,} = useContext(CodeContext)
    let [srcDoc, setSrcDoc] = useState('');
    console.log(html);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
            <html>
              <head>
                <style>${css}</style>
              </head>
              <body>${html}</body>
              <script>${js}</script>
            </html>
          `);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [html, css, js]);
    // console.log(srcDoc);
    

    return (
        <>
            <iframe
                className="w-full  border h-lvh"
                title="preview"
                sandbox="allow-scripts"
                srcDoc={srcDoc}
            />
        </>
    )
}

export default Output