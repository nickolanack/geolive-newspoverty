function formatTabButtonScript(buttonElement, dropDownMenu){
new UIPopover(buttonElement.firstChild,{description:"You can use this tab to filter the map based on the owner of the outlet", title:"", anchor:UIPopover.AnchorTo('bottom')});
}