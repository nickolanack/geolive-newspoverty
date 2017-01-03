<div id="pushmenu-parent"
	style="visibility: hidden; pointer-events: none;">
	<div id="pushmenu" class="row-fluid span3" style="width:350px; overflow:hidden;">

		<div id="aside" class="span3">
			<h3 id="pushmenu-message"></h3>
			<?php

			IncludeJS(Core::WebsiteRoot().DS.'templates'.DS.'protostar'.DS.'js'.DS.'pushmenu.js');

			IncludeCSS(Core::WebsiteRoot().DS.'templates'.DS.'protostar'.DS.'css'.DS.'template.css');
			IncludeCSS(Core::WebsiteRoot().DS.'templates'.DS.'protostar'.DS.'css'.DS.'pushmenu.css');
			IncludeCSS(Core::WebsiteRoot().DS.'components'.DS.'com_hs_users'.DS.'asset'.DS.'css'.DS.'asset.css');

			jimport( 'joomla.application.module.helper' );
			$module = JModuleHelper::getModule('mod_hs_users', 'mod_hs_users');
			$attribs=array('style'=>'xhtml');
			echo JModuleHelper::renderModule($module, $attribs);


			?>
		</div>

	</div>
</div>