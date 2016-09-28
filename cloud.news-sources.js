function formatTabButtonScript(buttonElement, dropDownMenu){
	new UIPopover(buttonElement.firstChild,{description:"You can use this tab to filter the map based on the media type", title:"", anchor:UIPopover.AnchorTo('bottom')});
}