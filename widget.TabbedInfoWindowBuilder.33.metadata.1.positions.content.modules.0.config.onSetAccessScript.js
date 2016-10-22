var me=this;
var sets=me.application.getNamedValue('IconSets');
			var pub=sets[0].icons;
			var priv=sets[1].icons;
			
			var icon=me.item.getIcon();
			var i=-1;
			if(access==='public'){
				
				if((i=JSTextUtilities.UrlIndexOfValueInArray(icon, priv))>=0){
					//me.item.setIcon(pub[i]);
					me.item.setIcon(pub[i]);
MapFactory.AssignMarkerToLayerFromIcon(me.item, me.application.getNamedValue('IconSets'), {icon:me.item.getIcon(),currentLayer:me.item.getLayer()});
					me.item.save();
				}
			}else{
				if((i=JSTextUtilities.UrlIndexOfValueInArray(icon, pub))>=0){
					//me.item.setIcon(priv[i]);
					me.item.setIcon(priv[i]);
MapFactory.AssignMarkerToLayerFromIcon(me.item, me.application.getNamedValue('IconSets'), {icon:me.item.getIcon(),currentLayer:me.item.getLayer()});
					me.item.save();
				}
			}