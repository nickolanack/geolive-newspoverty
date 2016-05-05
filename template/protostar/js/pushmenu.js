/**
 * 
 */
window.openLoginWindow = function() {
var content = $('pushmenu');
size = content.getSize();
PushBoxWindow.open(content, {
    handler: "append",
    size: size,
    anchor: this,
    push: true,
    classWindow: 'pushmenu'
}).addEvent('close', function() {
    //content.parentNode.removeChild(content);
    window.setLoginWindowMessage('');
    $('pushmenu-parent').appendChild(content);
});

};


window.setLoginWindowMessage = function(message) {
if ((!message) || message == '') {

    $('pushmenu-message').setStyle('display', 'none');

} else {

    $('pushmenu-message').setStyle('display', 'block');

}

$('pushmenu-message').innerHTML = message;

};

window.addEvent("load", function() {

    $('pushmenu-btn').addEvent('click', window.openLoginWindow);
    if(window.UIPopover){

        new UIPopover($('pushmenu-btn'),{description:
            '<article><h3>How to add a marker to the map</h3>'+
'<p>1. Type the  media outlet name or name  or location into the search bar to see if the information has already been added to the map.</p>'+
'<p>2. Click on the green button in the top right-hand corner of the map to  add information.</p>'+
'<p>3. Type in the name of the community or the street address of the media outlet in the search bar. Select the location  The map will zoom into that location.</p>'+
'<p>4. Click on the blank marker beside the search bar.</p>'+
'<p>5. Follow the instructions.  NOTE: You must provide an online source for the information your provide so we can verify it. </p></article>', anchor:UIPopover.AnchorTo(['bottom'])});
    }

});