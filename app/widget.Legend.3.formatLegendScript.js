/**
 * this script adds a legend title.
 */
    <?php

IncludeCSSBlock('

        .legend-title{

            font-weight: 100;
            margin: 5px;
            color: #444444;
            font-size: 17px;
            text-shadow: 0 0 1px rgba(0,0,0,0.4);
            text-align: center;

        }

    ')

?>

    var title=new Element('h3',{html:"Legend", "class":'legend-title'});
    title.inject(element, 'top');
new UIPopover(title,{title:'', description:'Turn these filters on and off to view changes by media type', anchor:UIPopover.AnchorTo('right')});

// }