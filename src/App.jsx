import {
    DiagramProvider,
    DiagramComponent,
    DiagramPaletteComponent,
    ControlsComponent, PieChartComponent, BarChartComponent
} from "@visuallyjs/browser-ui-react"
import { Group, FlowchartBasicEdgeMappings } from "@visuallyjs/browser-ui"
import { INFRASTRUCTURE_SHAPES } from "./infrastructure-shapes"
import {GRID_SIZE} from "./constants.ts";
import CATALOG from "../catalog.json"
import InfrastructureInspector from "./Inspector.jsx";
import Total from "./Total.jsx";

const diagramOptions = {
    shapes: [INFRASTRUCTURE_SHAPES],
    grid: {
        size: GRID_SIZE
    },
    cells:{
        rotatable:false,
        showLabels: false,
        groups:{
            elastic:true,
            padding:20
        },
        shouldDeleteGroupMembers:() => true
    },
    edges:{
        allowUnattached:false,
        propertyMappings:FlowchartBasicEdgeMappings(),
        deleteButton:"hover",
        showLabels:true
    },
    lasso:true,
    zoomToFit: true,
    mediator:{
        canResize:(obj) => obj.objectType === "Group",
        canDrop:(obj, target) => {
            return target == null || !(obj.objectType === Group.objectType && target.objectType === Group.objectType)
        }
    }
}

const chartFontSpec = {
    size: 12
}

export default function App({url}) {
    return (
        <DiagramProvider>
            <div className="vjs-network-infrastructure">
                <div className="vjs-ni-left-sidebar">
                    <h3>Palette</h3>
                    <div className="vjs-ni-palette-section">
                        <DiagramPaletteComponent showLabels={true} iconSize={{width:40, height:40}} dragSize={{width:80, height:80}}  className="vjs-ni-palette" />
                    </div>
                    <h3>Properties</h3>
                    <InfrastructureInspector/>
                </div>
                <div className="vjs-ni-diagram-container">
                    <DiagramComponent url={url} options={diagramOptions} className="vjs-ni-vjs-surface">
                        <ControlsComponent className="vjs-ni-controls" />
                    </DiagramComponent>
                </div>
                <div className="vjs-ni-sidebar">
                    <div className="vjs-ni-chart-section">
                        <h3>Resource Metrics</h3>
                        <div className="vjs-ni-chart-card">
                            <h4>Monthly Spend</h4>
                            <Total/>
                            <PieChartComponent options={{
                                colorGenerator: {
                                    generate: (point) => CATALOG[point.data.id].color
                                },
                                labelFont: chartFontSpec,
                                dataLabels:true,
                                series:[
                                    {
                                        type:"summing-collation",
                                        categoryField:"type",
                                        sumField:"monthlyPrice"
                                    }
                                ]
                            }}/>
                        </div>
                        <div className="vjs-ni-chart-card">
                            <h4>Instance Types</h4>
                            <BarChartComponent options={{
                                categoryAxis: {
                                    font: chartFontSpec
                                },
                                dataLabels:true,
                                series:[
                                    {
                                        type:"collation",
                                        valueField:"type",
                                        color:"#445566"
                                    }
                                ]
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </DiagramProvider>
    )
}
