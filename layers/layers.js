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
var lyr_DEM_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEM_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10909325.558781, 4163862.269635, -10797975.145907, 4300640.482958]
                            })
                        });
var lyr_FillSink_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Fill Sink",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FillSink_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10909325.558782, 4163862.269634, -10797975.137000, 4300640.493967]
                            })
                        });
var lyr_Watershed_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Watershed",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Watershed_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10909325.558782, 4163862.269634, -10797975.137000, 4300640.493967]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_DEM_2.setVisible(true);lyr_FillSink_3.setVisible(true);lyr_Watershed_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleTerrain_1,lyr_DEM_2,lyr_FillSink_3,lyr_Watershed_4];
