//return a string, or index, or pass value to callback
setInitialSelected(callback) {
		if (item.getId() > 0) {
			(new GetAttributeItemValueQuery(
				item.getId(), item.getType(), "newsAttributes", "transitionType")).addEvent("success", function(r) {

				callback(([
					'closed due to merger',
					'new outlet produced by merger',
					'increase in service',
					'decrease in service',
					'closed',
					'new',
					'shifted to online',
					'daily becomes a community paper',
					'daily (free) becomes a community paper'
				]).indexOf(r.value));

				console.log(['icon', r]);
			}).execute();

		}
	}
	// Validate
	// Custom Icon Selection Scripts
	// You can add, remove, and sort the icons in this list. Users will be able to select the icons triggering custom scripts


//custom functions image: components/com_geolive/users_files/user_files_400/Uploads/[G]_[ImAgE]_y8s_wIS_0KD.png
function onSelect(icon, asset, i) {}

function onSubmitWizardWithSelected(icon, asset, i) {
	wizard.setDataValue('Attribute_newsAttributes_Object.transitionType', "closed due to merger");
}

function onRenderSelectable(icon, asset, i) {
	new UIPopover(asset.parentNode, {
		title: "Closed due to merger"
	});
	var layer = MapFactory.BestLayerFromIcon(item, map.getNamedValue("IconSets"), {
		icon: wizardDataSet.icon || item.getIcon()
	})
	if (layer.getName() != "Newspapers") {
		asset.parentNode.setStyle("display", "none")
	}
}
//custom functions image: components/com_geolive/users_files/user_files_400/Uploads/MqZ_2D9_[G]_zSz_[ImAgE].png
function onSelect(icon, asset, i) {}

function onSubmitWizardWithSelected(icon, asset, i) {
	wizard.setDataValue('Attribute_newsAttributes_Object.transitionType', "new outlet produced by merger");
}

function onRenderSelectable(icon, asset, i) {
	new UIPopover(asset.parentNode, {
		title: "New outlet produced by merger"
	});
	var layer = MapFactory.BestLayerFromIcon(item, map.getNamedValue("IconSets"), {
		icon: wizardDataSet.icon || item.getIcon()
	})
	if (layer.getName() != "Newspapers") {
		asset.parentNode.setStyle("display", "none")
	}
}
//custom functions image: components/com_geolive/users_files/user_files_400/Uploads/grw_0dl_[ImAgE]_cu4_[G].png
function onSelect(icon, asset, i) {}

function onSubmitWizardWithSelected(icon, asset, i) {
	wizard.setDataValue('Attribute_newsAttributes_Object.transitionType', "increase in service");
}

function onRenderSelectable(icon, asset, i) {
	new UIPopover(asset.parentNode, {
		title: "Increase in service"
	});
}
//custom functions image: components/com_geolive/users_files/user_files_400/Uploads/[G]_hVp_WtL_VlO_[ImAgE].png
function onSelect(icon, asset, i) {}

function onSubmitWizardWithSelected(icon, asset, i) {
	wizard.setDataValue('Attribute_newsAttributes_Object.transitionType', "decrease in service");
}

function onRenderSelectable(icon, asset, i) {
	new UIPopover(asset.parentNode, {
		title: "Decrease in service"
	});
}
//custom functions image: components/com_geolive/users_files/user_files_400/Uploads/zf0_[ImAgE]_Dj9_[G]_Ogd.png
function onSelect(icon, asset, i) {}

function onSubmitWizardWithSelected(icon, asset, i) {
	wizard.setDataValue('Attribute_newsAttributes_Object.transitionType', "closed");
}

function onRenderSelectable(icon, asset, i) {
	new UIPopover(asset.parentNode, {
		title: "Closed"
	});
}
//custom functions image: components/com_geolive/users_files/user_files_400/Uploads/[G]_W0v_B5_yuK_[ImAgE].png
function onSelect(icon, asset, i) {}

function onSubmitWizardWithSelected(icon, asset, i) {
	wizard.setDataValue('Attribute_newsAttributes_Object.transitionType', "new");
}

function onRenderSelectable(icon, asset, i) {
	new UIPopover(asset.parentNode, {
		title: "New"
	});
}
//custom functions image: components/com_geolive/users_files/user_files_400/Uploads/A5b_[G]_PTW_[ImAgE]_jjt.png
function onSelect(icon, asset, i) {}

function onSubmitWizardWithSelected(icon, asset, i) {
	wizard.setDataValue('Attribute_newsAttributes_Object.transitionType', "shifted to online");
}

function onRenderSelectable(icon, asset, i) {
	new UIPopover(asset.parentNode, {
		title: "Community paper shifts to online only"
	});
	var layer = MapFactory.BestLayerFromIcon(item, map.getNamedValue("IconSets"), {
		icon: wizardDataSet.icon || item.getIcon()
	})
	if (layer.getName() != "Newspapers") {
		asset.parentNode.setStyle("display", "none")
	} else {
		Array.each(asset.parentNode.parentNode.childNodes, function(li) {
			li.addClass('sm');
		});
	}
}
//custom functions image: components/com_geolive/users_files/user_files_400/Uploads/PYa_[ImAgE]_kk8_[G]_lV6.png
function onSelect(icon, asset, i) {}

function onSubmitWizardWithSelected(icon, asset, i) {
	wizard.setDataValue('Attribute_newsAttributes_Object.transitionType', "daily becomes a community paper");
}

function onRenderSelectable(icon, asset, i) {
	new UIPopover(asset.parentNode, {
		title: "Daily becomes a community paper"
	});
	var layer = MapFactory.BestLayerFromIcon(item, map.getNamedValue("IconSets"), {
		icon: wizardDataSet.icon || item.getIcon()
	})
	if (layer.getName() != "Newspapers") {
		asset.parentNode.setStyle("display", "none")
	}
}
//custom functions image: components/com_geolive/users_files/user_files_400/Uploads/nPT_[ImAgE]_[G]_HnR_1gp.png
function onSelect(icon, asset, i) {}

function onSubmitWizardWithSelected(icon, asset, i) {
	wizard.setDataValue('Attribute_newsAttributes_Object.transitionType', "daily (free) becomes a community paper");
}

function onRenderSelectable(icon, asset, i) {
	new UIPopover(asset.parentNode, {
		title: "Daily (free) becomes a community paper"
	});
	var layer = MapFactory.BestLayerFromIcon(item, map.getNamedValue("IconSets"), {
		icon: wizardDataSet.icon || item.getIcon()
	})
	if (layer.getName() != "Newspapers") {
		asset.parentNode.setStyle("display", "none")
	} else {
		Array.each(asset.parentNode.parentNode.childNodes, function(li) {
			li.addClass('sm');
		});
	}
}