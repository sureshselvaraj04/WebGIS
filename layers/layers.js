var wms_layers = [];


        var lyr_BingSatellite_0 = new ol.layer.Tile({
            'title': 'Bing Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=0&dir=dir_n''
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kadakara_2 = new ol.format.GeoJSON();
var features_Kadakara_2 = format_Kadakara_2.readFeatures(json_Kadakara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kadakara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kadakara_2.addFeatures(features_Kadakara_2);
var lyr_Kadakara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kadakara_2, 
                style: style_Kadakara_2,
                popuplayertitle: 'Kadakara',
                interactive: false,
                title: '<img src="styles/legend/Kadakara_2.png" /> Kadakara'
            });
var format_clip_DRAINAGE_3 = new ol.format.GeoJSON();
var features_clip_DRAINAGE_3 = format_clip_DRAINAGE_3.readFeatures(json_clip_DRAINAGE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_DRAINAGE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_DRAINAGE_3.addFeatures(features_clip_DRAINAGE_3);
var lyr_clip_DRAINAGE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_DRAINAGE_3, 
                style: style_clip_DRAINAGE_3,
                popuplayertitle: 'clip_DRAINAGE',
                interactive: false,
                title: '<img src="styles/legend/clip_DRAINAGE_3.png" /> clip_DRAINAGE'
            });
var format_clip_Road_4 = new ol.format.GeoJSON();
var features_clip_Road_4 = format_clip_Road_4.readFeatures(json_clip_Road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Road_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Road_4.addFeatures(features_clip_Road_4);
var lyr_clip_Road_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Road_4, 
                style: style_clip_Road_4,
                popuplayertitle: 'clip_Road',
                interactive: false,
                title: '<img src="styles/legend/clip_Road_4.png" /> clip_Road'
            });

lyr_BingSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Kadakara_2.setVisible(true);lyr_clip_DRAINAGE_3.setVisible(true);lyr_clip_Road_4.setVisible(true);
var layersList = [lyr_BingSatellite_0,lyr_OSMStandard_1,lyr_Kadakara_2,lyr_clip_DRAINAGE_3,lyr_clip_Road_4];
lyr_Kadakara_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERBLPAPRJ': 'KERBLPAPRJ', 'KERBLPAP_1': 'KERBLPAP_1', 'CODE': 'CODE', 'PANCHAYAT': 'PANCHAYAT', });
lyr_clip_DRAINAGE_3.set('fieldAliases', {'ORDER1': 'ORDER1', 'Name': 'Name', });
lyr_clip_Road_4.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_Kadakara_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KERBLPAPRJ': 'Range', 'KERBLPAP_1': 'Range', 'CODE': 'Range', 'PANCHAYAT': 'TextEdit', });
lyr_clip_DRAINAGE_3.set('fieldImages', {'ORDER1': 'Range', 'Name': 'TextEdit', });
lyr_clip_Road_4.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_Kadakara_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KERBLPAPRJ': 'no label', 'KERBLPAP_1': 'no label', 'CODE': 'no label', 'PANCHAYAT': 'no label', });
lyr_clip_DRAINAGE_3.set('fieldLabels', {'ORDER1': 'no label', 'Name': 'no label', });
lyr_clip_Road_4.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_clip_Road_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});