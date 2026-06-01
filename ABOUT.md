# Network Infrastructure Editor Implementation

This document describes how the Network Infrastructure Editor is implemented using `@visuallyjs/browser-ui-react` and `@visuallyjs/browser-ui`.

## Components

The application integrates diagramming with analytics using several components from `@visuallyjs/browser-ui-react`:

### Diagramming
- **`DiagramProvider`**: Manages the state of the infrastructure diagram.
- **`DiagramPaletteComponent`**: Displays a palette of infrastructure elements (Servers, Databases, etc.) defined in `infrastructure-shapes.js`.
- **`DiagramComponent`**: The main canvas for designing the network.
- **`ControlsComponent`**: Standard zoom and pan controls.

### Analytics
- **`PieChartComponent`**: Visualizes monthly spend by resource type.
- **`BarChartComponent`**: Visualizes the count of different instance types.

### Custom Components
- **`InfrastructureInspector`**: For editing properties of network resources.
- **`Total`**: Displays the total calculated monthly cost.

## Configuration Options

### Diagram Options
- **`shapes`**: Uses `INFRASTRUCTURE_SHAPES` for realistic network icons.
- **`grid`**: Enabled for aligned placement of resources.
- **`cells`**: Configured for elastic groups, allowing servers to be grouped into VPCs or subnets that resize automatically.
- **`edges`**: Uses `FlowchartBasicEdgeMappings` for simple, clear connections between resources.

### Analytics Configuration
The charts use specialized series types:
- **`summing-collation`**: For the Pie chart, to sum up the `monthlyPrice` field across resources.
- **`collation`**: For the Bar chart, to count the occurrences of each resource type.

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Custom styles for the multi-pane layout (sidebar, diagram, and analytics panel) are imported from `network-infrastructure.css`.
