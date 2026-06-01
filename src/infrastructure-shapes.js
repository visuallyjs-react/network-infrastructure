import CATALOG from "../catalog.json"

export const INFRASTRUCTURE_SHAPES = {
    id: "infrastructure",
    name: "Infrastructure",
    shapes: [
        {
            type: "server",
            label: "Server",
            template: `<g>
                    <rect x="0" y="0" width="{{width}}" height="{{height}}" rx="2" ry="2" stroke-width="1"/>                   
                    <path d="M 5 15 L {{width-5}} 15" stroke-width="1"/>
                    <path d="M 5 25 L {{width-5}} 25" stroke-width="1"/>
                    <path d="M 5 35 L {{width-5}} 35" stroke-width="1"/>
                    <text x="{{width/2}}" y="{{height-10}}" stroke="none" text-anchor="middle" font-size="10" fill="{{outline}}">{{label}}</text>
                </g>`,
            payload:CATALOG.server
        },
        {
            type: "database",
            label: "Database",
            template: `<g data-vjs-resize="false">
                    <path d="M 0 {{height*0.2}} A {{width/2}} {{height*0.15}} 0 0 0 {{width}} {{height*0.2}} L {{width}} {{height*0.8}} A {{width/2}} {{height*0.15}} 0 0 1 0 {{height*0.8}} Z" stroke-width="1"/>
                    <ellipse cx="{{width/2}}" cy="{{height*0.2}}" rx="{{width/2}}" ry="{{height*0.15}}" stroke-width="1"/>
                    <path d="M {{width}} {{height*0.4}} A {{width/2}} {{height*0.15}} 0 0 1 0 {{height*0.4}}" fill="none" stroke-width="1"/>
                    <path d="M {{width}} {{height*0.6}} A {{width/2}} {{height*0.15}} 0 0 1 0 {{height*0.6}}" fill="none" stroke-width="1"/>
                    <text x="{{width/2}}" y="{{height+15}}" stroke="none" text-anchor="middle" font-size="10" fill="currentColor">{{label}}</text>
                </g>
            `,
            payload:CATALOG.database
        },
        {
            type: "vpc",
            label: "VPC",
            objectType:"Group",
            template: `<g>
                    <rect class="vjs-group-perimeter" x="0" y="0" width="{{width}}" height="{{height}}" rx="8" ry="8" stroke-dasharray="5,5" stroke-width="1.5" stroke="{{color}}"/>
                    <text x="10" y="18" font-size="12" stroke="none" font-weight="bold" fill="{{color}}">{{label}}</text>
                    <g data-vjs-group-content="true"/>
                </g>
            `,
            payload: {
                ...CATALOG.vpc,
                width: 350,
                height: 250
            }
        },
        {
            type: "loadbalancer",
            label: "Load Balancer",
            template: `<g>
                    <ellipse cx="{{width/2}}" cy="{{height/2}}" rx="{{width/2}}" ry="{{height/2}}" stroke-width="1"/>
                    <path d="M {{width/2}} {{height/2 - 15}} L {{width/2}} {{height/2 + 15}} M {{width/2 - 15}} {{height/2}} L {{width/2 + 15}} {{height/2}}" fill="none" stroke-width="2"/>
                    <path d="M {{width/2-10}} {{height/2-10}} L {{width/2+10}} {{height/2+10}} M {{width/2-10}} {{height/2+10}} L {{width/2+10}} {{height/2-10}}" fill="none" stroke-width="1"/>
                    <text x="{{width/2}}" y="{{height+15}}" stroke="none" text-anchor="middle" font-size="10" fill="currentColor">{{label}}</text>
                </g>`,
            payload:CATALOG.loadbalancer
        }
    ]
};
