import {
    Node, Edge, Group
} from "@visuallyjs/browser-ui"

import {
    PROPERTY_COLOR, PROPERTY_DETAILS,
    PROPERTY_FILL,
    PROPERTY_LABEL,
    PROPERTY_LINE_STYLE,
    PROPERTY_OUTLINE
} from "./constants"

import {ColorPickerComponent, EdgeTypePickerComponent, InspectorComponent} from "@visuallyjs/browser-ui-react";

export default function InfrastructureInspector() {

    function nothingSelected() {
        return <div className="vjs-ni-inspector-empty">
            <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
            </svg>
            <div>Select a node/group to inspect its properties.</div>
        </div>
    }

    return <InspectorComponent className="vjs-ni-inspector" renderEmptyContent={nothingSelected}>

        {(current) => <>
            {(current.objectType === Node.objectType || current.objectType === Group.objectType) && <>
                <label>Label</label>
                <input type="text" vjs-att={PROPERTY_LABEL} vjs-focus="true"/>

                <div className="vjs-inspector-type">Type: {current.type}</div>

                <label>Fill color</label>
                <ColorPickerComponent propertyName={PROPERTY_FILL}/>

                <label>Outline color</label>
                <ColorPickerComponent propertyName={PROPERTY_OUTLINE}/>

                <label>Details</label>
                <textarea rows={5} vjs-att={PROPERTY_DETAILS}/>
            </>}

            {current.objectType === Edge.objectType && <>
                <label>Label</label>
                <input type="text" vjs-att={PROPERTY_LABEL}/>
                <label>Line style</label>
                <EdgeTypePickerComponent propertyName={PROPERTY_LINE_STYLE}/>
                <label>Line color</label>
                <ColorPickerComponent propertyName={PROPERTY_COLOR}/>
                <label>Details</label>
                <textarea rows={5} vjs-att={PROPERTY_DETAILS}/>
            </>}
        </>}

    </InspectorComponent>

}
