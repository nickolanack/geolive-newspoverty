if (window.Cluster) {
	Cluster.Symbol = ClusterSymbol;
	ClusterSymbol.IconScale = function(sum) {
		return 20 + (5 * Math.log(sum) / Math.log(2));
	};
	ClusterSymbol.IconStyle = function(name) {



		var colorsForLayer = {
			2: '#7b1919', //radio red
			3: '#2e663b', //tv green
			4: '#d4c738' //online yellow

		}

		var activeColorsForLayer = {


		};

		var me = this;
		var getColor = function(colorMap,
			defaultColor) {
			try {
				var lid = me.cluster_.markers_[0].wrapper.getLayer().getId();
				if (colorMap['' + lid]) {
					return colorMap['' + lid];
				}
			} catch (e) {}
			return defaultColor;


		}



		//expect to be bound to ClusterSymbol object
		if (name == "hover") {

			return {
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: getColor(activeColorsForLayer, "rgb(130, 51, 130)"),
				fillOpacity: 0.7,
				strokeWeight: 1.5,
				strokeColor: getColor(activeColorsForLayer, "rgb(130, 51, 130)"),
				labelOrigin: google.maps.Point(0, 0)
			};


		} else {


			return {
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: getColor(colorsForLayer, "#0A79B1"),
				fillOpacity: 0.4,
				strokeWeight: 1.5,
				strokeColor: getColor(colorsForLayer, "#0A79B1"),
				labelOrigin: google.maps.Point(0, 0)

			};

		}

	};
} else {
	setTimeout(start, 100);
}