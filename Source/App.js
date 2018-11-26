(function () {
    "use strict";
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4MzkyZWEzMi03MTk5LTQyYzAtYWE2OC1iMGM3YjhhNmRhMmQiLCJpZCI6NTM3OCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0MzIwNDU5MX0.Wdb8PPxY0zbcb9sCDXpGZI7dCZg__fsCVa3LriUNmWg';
    // For the Cesium workshop
// https://github.com/AnalyticalGraphicsInc/cesium-workshop

//////////////////////////////////////////////////////////////////////////
// Creating the Viewer
//////////////////////////////////////////////////////////////////////////

var viewer = new Cesium.Viewer('cesiumContainer', {
    scene3DOnly: true,
    selectionIndicator: false,
    baseLayerPicker: false
});
viewer.terrainProvider = Cesium.createWorldTerrain({
    requestWaterMask : true, // required for water effects
    requestVertexNormals : true // required for terrain lighting
});

}());
