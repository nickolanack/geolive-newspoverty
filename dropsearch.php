<script type="text/javascript">
function onDropScript(latlng, iconUrl, defaultBehaviorFn){
var userIsGuest=<?php 
        echo json_encode(Core::Client()->isGuest());
    ?>;

    if(userIsGuest&&window.openLoginWindow){
        window.openLoginWindow(); 
    }else{
        defaultBehaviorFn();
    }
}
</script>