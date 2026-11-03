ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([3246416.693408, 7999038.641403, 3247530.029424, 7999650.926992]);
var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'Картографическая основа',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'геотрек — маршрутная линия к месту крушения (геотрек)',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> геотрек — маршрутная линия к месту крушения (геотрек)'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'маршрутная линия ',
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> маршрутная линия '
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'границы болотной местности (дешифровка)',
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> границы болотной местности (дешифровка)'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'маршрут до крушения — Маршрутная линия к месту крушения (точечная спутниковая привязка)',
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> маршрут до крушения — Маршрутная линия к месту крушения (точечная спутниковая привязка)'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: ' Ключевые точечные объекты',
                interactive: false,
    title: ' Ключевые точечные объекты<br />\
    <img src="styles/legend/_5_0.png" /> 1<br />\
    <img src="styles/legend/_5_1.png" /> 2<br />\
    <img src="styles/legend/_5_2.png" /> важные детали 1<br />\
    <img src="styles/legend/_5_3.png" /> детали обшивки<br />\
    <img src="styles/legend/_5_4.png" /> детали обшивки 1<br />\
    <img src="styles/legend/_5_5.png" /> детали обшивки 2<br />\
    <img src="styles/legend/_5_6.png" /> детали обшивки 4<br />\
    <img src="styles/legend/_5_7.png" /> привал <br />\
    <img src="styles/legend/_5_8.png" /> <br />' });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'границы поиска (условно)',
                interactive: false,
                title: '<img src="styles/legend/_6.png" /> границы поиска (условно)'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6];
lyr__1.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'основная линия': 'основная линия', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'границы болота дешифровка': 'границы болота дешифровка', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'track_fid': 'track_fid', 'track_seg_id': 'track_seg_id', 'track_seg_point_id': 'track_seg_point_id', 'ele': 'ele', 'time': 'time', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', });
lyr__6.set('fieldAliases', {'fid': 'fid', 'Граница поиска (условно)': 'Граница поиска (условно)', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'основная линия': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'границы болота дешифровка': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'track_fid': 'Range', 'track_seg_id': 'Range', 'track_seg_point_id': 'Range', 'ele': 'TextEdit', 'time': 'DateTime', });
lyr__5.set('fieldImages', {'fid': 'TextEdit', 'ele': 'TextEdit', 'time': 'DateTime', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'name': 'TextEdit', });
lyr__6.set('fieldImages', {'fid': 'TextEdit', 'Граница поиска (условно)': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'основная линия': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'границы болота дешифровка': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'track_fid': 'no label', 'track_seg_id': 'no label', 'track_seg_point_id': 'no label', 'ele': 'no label', 'time': 'no label', });
lyr__5.set('fieldLabels', {'fid': 'no label', 'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', });
lyr__6.set('fieldLabels', {'fid': 'no label', 'Граница поиска (условно)': 'no label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});