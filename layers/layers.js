var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 0.609000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}'
            })
        });
var lyr_n35_w098_1arc_v3_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "n35_w098_1arc_v3",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/n35_w098_1arc_v3_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10909325.558781, 4163862.269635, -10797975.145907, 4300640.482958]
                            })
                        });
var lyr_DEM_Fill_Wang_Liu_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM_Fill_Wang_Liu",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEM_Fill_Wang_Liu_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10909325.558782, 4163862.269634, -10797975.137000, 4300640.493967]
                            })
                        });
var lyr_Watershed_Wang_Liu_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Watershed_Wang_Liu",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Watershed_Wang_Liu_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10909325.558782, 4163862.269634, -10797975.137000, 4300640.493967]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_n35_w098_1arc_v3_2.setVisible(true);lyr_DEM_Fill_Wang_Liu_3.setVisible(true);lyr_Watershed_Wang_Liu_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleTerrain_1,lyr_n35_w098_1arc_v3_2,lyr_DEM_Fill_Wang_Liu_3,lyr_Watershed_Wang_Liu_4];
