		const myMap =L.map('map').setView([42.9716, 65.5946], 3);
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
		const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors';
		const tileUrl = 'https://{s}.tile.OpenStreetMap.org/{z}/{x}/{y}.png';
		const tiles= L.tileLayer(tileUrl, { attribution });
		tiles.addTo(myMap);
		const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544';
		L.marker([38.9637, 35.2433],{icon: marker1}).addTo(myMap).bindPopup('<a href="http://www.sultanahmetcamii.org/tr/"><b>Blue Mosque ( Turkey )</b></a><br><img style="width:300px; height:170px;" src="images/img1.jpg"><br><p> The <a href="http://www.sultanahmetcamii.org/tr/"><b>Blue Mosque</b></a> has also become one of the most popular tourist attractions in Istanbul. It was built between 1609 and 1616 and like many other mosques contains the tomb of the founder. Inside the mosque, the high ceiling is lined with the 20,000 blue tiles with different patterns that give the mosque its popular name.</p>')
    .addTo(myMap);
		L.marker([12.9716, 77.5946],{icon: marker2}).addTo(myMap).bindPopup('<a href="https://en.wikipedia.org/wiki/Lal_Bagh"><b>Lalbagh Botanical Gardens ( Bengaluru )</b></a><br><img style="width:300px; height:170px;" src="images/img2.jpg"><br><p> <a href="https://en.wikipedia.org/wiki/Lal_Bagh"><b>Lalbagh Botanical Gardens</b></a> or Lalbagh is an old botanical garden in Bengaluru, India. First planned and laid out during the rule of Hyder Ali and later adorned with unique plant species by his son Tipu Sultan, it was later managed under numerous British Superintendents before Indian Independence</p>')
    .addTo(myMap);
		L.marker([39.9042, 116.4074],{icon: marker3}).addTo(myMap).bindPopup('<a href="http://www.mutianyugreatwall.com/"><b>The Great Wall of China ( Beijing )</b></a><br><img style="width:300px; height:170px;" src="images/img3.jpg"><br><p><a href="http://www.mutianyugreatwall.com/"><b>The Great Wall of China</b></a> is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities</p>')
    .addTo(myMap);