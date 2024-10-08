const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title":{
        "text": "Existing green assets in major area in NSW and VIC",
        "fontSize": 20,
        "color": "green"
    },
    "width": 1000,
    "height": 600,
    "params": [
        {
            "name": "zoom_level",
            "value": 2000,
            "bind": {
                "input": "range",
                "min": 500,
                "max": 30000,
                "step": 100,
                "name": "Zoom: "
            }
        },
        {
            "name": "center_to",
            "value": [144.9631, -37.8136],
            "bind": {
                "input": "select",
                "options": [
                    [144.9631, -37.8136],
                    [151.2093, -33.8688]
                ],
                "labels": ["Victoria", "New South Wales"],
                "name": "Map Centre: "
            }
        }
    ],
    "projection": {
        "type": "mercator",
        "scale": {"expr": "zoom_level"},
        "center": {"expr": "center_to"}
    },
    "layer": [
        {
            "data": {
                "url": "https://raw.githubusercontent.com/Xuancheng-Alan/FIT3179/refs/heads/main/Datasets/VIC_NSW_MAP.json",
                "format": {
                    "type": "topojson",
                    "feature": "VIC_NSW_MAP"
                }
            },
            "mark": {
                "type": "geoshape",
                "fill": "#b5f9fc",
                "stroke": "gray",
                "strokeWidth": 1
            },
            "encoding": {
                "tooltip": [
                    { "field": "properties.STATE_NAME", "type": "nominal", "title": "State Name" }
                ]
            }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/Xuancheng-Alan/FIT3179/refs/heads/main/Datasets/Existing_Green_Assets.json",
                "format": {
                    "type": "topojson",
                    "feature": "Existing_Green_Assets"
                }
            },
            "mark": {
                "type": "geoshape",
                "fill": "green"
            },
            "encoding": {
                "tooltip": [
                    { "field": "properties.ASSET_NAME", "type": "nominal", "title": "Asset Name" },
                    { "field": "properties.LAY_CLASS", "type": "nominal", "title": "Layer Class" },
                    { "field": "properties.OBJECTID", "type": "quantitative", "title": "Object ID" },
                    { "field": "properties.SIGNIFICAN", "type": "nominal", "title": "Significance" },
                    { "field": "properties.LAND_STATU", "type": "nominal", "title": "Land Status" }
                ]
            }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/Xuancheng-Alan/FIT3179/refs/heads/main/Datasets/VPA_Open_Space%20.json",
                "format": {
                    "type": "topojson",
                    "feature": "VPA_Open_Space"
                }
            },
            "mark": {
                "type": "geoshape",
                "fill": "green"
            },
            "encoding": {
                "tooltip": [
                    { "field": "properties.OWNER_TYPE", "type": "nominal", "title": "Owner Type" },
                    { "field": "properties.PARK_NAME", "type": "nominal", "title": "Park Name" },
                    { "field": "properties.OS_STATUS", "type": "nominal", "title": "Status" },
                    { "field": "properties.OS_ACCESS", "type": "nominal", "title": "Access" },
                    { "field": "properties.HA", "type": "nominal", "title": "Area(Ha)" }
                ]
            }
        },
        {
            "data": {
                "values": [
                    { "state": "New South Wales", "lat": -33.8688, "lon": 151.2093 },
                    { "state": "Victoria", "lat": -37.8136, "lon": 144.9631 }
                ]
            },
            "mark": {
                "type": "text",
                "fontSize": 15,
                "dy": -60,
                "dx": -30
            },
            "encoding": {
                "longitude": { "field": "lon", "type": "quantitative" },
                "latitude": { "field": "lat", "type": "quantitative" },
                "text": { "field": "state" },
                "color": { "value": "darkblue" }
            }
        }
    ]
};
vegaEmbed('#vis', spec).then(result => {
    console.log("Visualization successfully rendered", result);
}).catch(error => {
    console.error("Error rendering visualization:", error);
    alert("Failed to render the visualization. Check console for details.");
});

const spec2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 800,
    "height": 600,
    "title":{
        "text": "Visualisation from Week 9 HW",
        "fontSize": 20,
        "color": "green"
    },
    "projection": {
        "type": "mercator"
    },
    "layer": [
        {
            "data": {
                "url": "https://raw.githubusercontent.com/George-qiaoo/datavis/refs/heads/main/NSWMAP.json", // 替换为您的澳大利亚各州GeoJSON或TopoJSON文件路径
                "format": {"type": "topojson", "feature": "NSWMAP"}
            },
            "mark": {
                "type": "geoshape",
                "fill": "#e0e0e0",
                "stroke": "gray",
                "strokeWidth": 1
            },
            "encoding": {
                "tooltip": [
                    {"field": "properties.STATE_NAME", "type": "nominal", "title": "State Name"}
                ]
            }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/George-qiaoo/datavis/refs/heads/main/existing_green.json",  // 确保路径正确
                "format": {"type": "topojson", "feature": "Existing_Green_Assets"}
            },
            "mark": {
                "type": "geoshape",
                "fill": "green",
                "stroke": "black",
                "strokeWidth": 0.01
            },
            "encoding": {
                "tooltip": [
                    {"field": "properties.LAY_CLASS", "type": "nominal", "title": "Layer Class"},
                    {"field": "properties.OBJECTID", "type": "nominal", "title": "Object ID"},
                    {"field": "properties.LABEL", "type": "nominal", "title": "Label"}
                ],
            }

        }
    ]
};
vegaEmbed('#vis2', spec2).then(result => {
    console.log("Visualization successfully rendered", result);
}).catch(error => {
    console.error("Error rendering visualization:", error);
    alert("Failed to render the visualization. Check console for details.");
});
