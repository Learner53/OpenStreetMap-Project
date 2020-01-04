const map =L.map('map').setView([42.9716, 65.5946], 3);

// different Marker icons for different Markers
var marker1 = L.icon({
	iconUrl: 'images/marker1.png',
	iconSize: [50, 45],
	iconAnchor: [22, 94],
	popupAnchor: [-3, -76]
});
var marker2 = L.icon({
	iconUrl: 'images/marker2.png',
	iconSize: [25, 40],
	iconAnchor: [22, 94],
	popupAnchor: [-3, -76]
});
var marker3 = L.icon({
	iconUrl: 'images/marker3.png',
	iconSize: [50, 45],
	iconAnchor: [22, 94],
	popupAnchor: [-3, -76]

});

// array of available Markers 
var markers=[
	{ lat: 38.9637, lng: 35.2433, name:'Blue Mosque ( Turkey )'},
	{ lat: 12.9716, lng: 77.5946, name: 'Lalbagh Botanical Gardens ( Bengaluru )'},
	{ lat: 39.9042, lng: 116.4074, name: 'The Great Wall of China ( Beijing )'}
]
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors';
const tileUrl = 'https://{s}.tile.OpenStreetMap.org/{z}/{x}/{y}.png';
const tiles= L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

// Adding Markers
L.marker([38.9637, 35.2433],{icon: marker1}).addTo(map).bindPopup('<a href="http://www.sultanahmetcamii.org/tr/"><b>Blue Mosque ( Turkey )</b></a><br><img style="width:300px; height:170px;" src="images/img1.jpg"><br><p> The <a href="http://www.sultanahmetcamii.org/tr/"><b>Blue Mosque</b></a> has also become one of the most popular tourist attractions in Istanbul. It was built between 1609 and 1616 and like many other mosques contains the tomb of the founder. Inside the mosque, the high ceiling is lined with the 20,000 blue tiles with different patterns that give the mosque its popular name.</p>')
.addTo(map);
L.marker([12.9716, 77.5946],{icon: marker2}).addTo(map).bindPopup('<a href="https://en.wikipedia.org/wiki/Lal_Bagh"><b>Lalbagh Botanical Gardens ( Bengaluru )</b></a><br><img style="width:300px; height:170px;" src="images/img2.jpg"><br><p> <a href="https://en.wikipedia.org/wiki/Lal_Bagh"><b>Lalbagh Botanical Gardens</b></a> or Lalbagh is an old botanical garden in Bengaluru, India. First planned and laid out during the rule of Hyder Ali and later adorned with unique plant species by his son Tipu Sultan, it was later managed under numerous British Superintendents before Indian Independence</p>')
.addTo(map);
L.marker([39.9042, 116.4074],{icon: marker3}).addTo(map).bindPopup('<a href="http://www.mutianyugreatwall.com/"><b>The Great Wall of China ( Beijing )</b></a><br><img style="width:300px; height:170px;" src="images/img3.jpg"><br><p><a href="http://www.mutianyugreatwall.com/"><b>The Great Wall of China</b></a> is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities</p>')
.addTo(map);

// Adding Toolbar item Rectangle Only
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

		 var drawControl = new L.Control.Draw({
		 	draw: {
             polygon: false,
             marker: false,
             circle: false,
             polyline: false
         	},
		     edit: {
		         featureGroup: drawnItems		     
		     }
		 });

    map.addControl(drawControl);

    // when a Rectangle is created checking for all Markers if any one lies inside the rectangle
	map.on(L.Draw.Event.CREATED, function (e) {
	   var type = e.layerType,
	   layer = e.layer;
	   var bounds= layer.getLatLngs();
	   var arr=[];
	    var drawnRect = L.rectangle([
			[bounds[0][0].lat, bounds[0][0].lng],
			[bounds[0][1].lat, bounds[0][1].lng],
			[bounds[0][2].lat, bounds[0][2].lng],
			[bounds[0][3].lat, bounds[0][3].lng]
			]);
			drawnItems.addLayer(layer);
	      for(let i=0;i<markers.length;i++){
	      	// CHECKS FOR EACH AVAILABLE MARKERS
	      	var currentMarker =  L.latLng(markers[i].lat, markers[i].lng);
	      	var isInsidePoint = drawnRect.getBounds().contains(currentMarker);
	      	
	      	if(isInsidePoint== true){
	      		// For Markers inside the Rectangle
	      		alert('you Selected '+ ' Lat: '+ markers[i].lat + ' Lng: '+ markers[i].lng + ' Which is ' + markers[i].name );
	      		console.log("Marker Inside")
	      	}
	      	else{
	      		// For Markers Outside the Rectangle
	      		console.log("Marker Outside");
	      	}
	      }
	});
     
