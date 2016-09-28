function formatTabButtonScript(buttonElement, dropDownMenu){
new UIPopover(buttonElement.firstChild,{description:"You can use this tab to filter the map based on the type of transition that occurred", title:"", anchor:UIPopover.AnchorTo('bottom')});
}