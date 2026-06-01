import { useDiagram } from "@visuallyjs/browser-ui-react"
import React, {useRef, useState} from "react";
import { EVENT_DATA_UPDATED, EVENT_GRAPH_CLEARED } from "@visuallyjs/browser-ui"

export default function Total() {

    const [total, setTotal] = useState(0)
    const model = useRef(null)

    function update() {
        if (model.current) {
            const nodeTotal = model.current.getNodes().map(n => n.data).reduce((acc, current) => acc + current.monthlyPrice, 0)
            const groupTotal = model.current.getGroups().map(n => n.data).reduce((acc, current) => acc + current.monthlyPrice, 0)
            setTotal(nodeTotal + groupTotal)
        }
    }

    useDiagram().then(s => {
        model.current = s.model
        s.model.bind(EVENT_DATA_UPDATED, update)
        s.model.bind(EVENT_GRAPH_CLEARED, update)
        update()
    })

    return <div style={{position:"absolute", top:"0.5rem", right:"0.5rem", fontSize:27}}>{'$'}{total.toFixed(2)}</div>
}
