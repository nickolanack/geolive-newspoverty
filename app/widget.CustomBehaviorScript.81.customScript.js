map.setClusterHighlightFn(function(cluster){
var _text = function() {
            var name = cluster.clusterIcon_.sums_.text +' '+ cluster.markers_[0].wrapper.getLayer().getName()+' Items';
            var maxChars = 30;
            var maxWidth = 200;
            if (name.length > maxChars) {
                return '<span style="width:' + maxWidth + 'px; display:inline-block;">' + name + '</span>';
            }
            return '<span style="white-space:nowrap">' + name + '</span>';
        };


        (new UIMapPopover(cluster, {
            title: '',
            description: _text(),
            anchor: UIPopover.AnchorTo(['bottom']),
            margin: 0,
            showOnMouseover: false, //make sure that we fire the show method always.
        })).setMap(map.getBaseMap()).show();

});