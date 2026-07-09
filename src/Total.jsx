import {useVisuallyJsUpdate} from "@visuallyjs/browser-ui-react"
import React, {useState} from "react";

export default function Total() {

    const [total, setTotal] = useState(0)

    useVisuallyJsUpdate((model) => {
        const nodeTotal = model.getNodes().map(n => n.data).reduce((acc, current) => acc + current.monthlyPrice, 0)
        const groupTotal = model.getGroups().map(n => n.data).reduce((acc, current) => acc + current.monthlyPrice, 0)
        setTotal(nodeTotal + groupTotal)
    })

    return <div style={{position:"absolute", top:"0.5rem", right:"0.5rem", fontSize:27}}>{'$'}{total.toFixed(2)}</div>
}
