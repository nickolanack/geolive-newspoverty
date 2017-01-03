/**
 * this script draws custom legend detail views for each layer
 */

<?php

IncludeCSSBlock('

.legend-layer-detail{
    width:310px;
    margin-top: 10px;
    text-align:center;
}
.l-tbl{
    display:table;
    width:93%;
    margin-top: 10px;
    border-top: 1px solid cornflowerblue;
    text-align:left;
}
.l-lft{
    display:table-cell;
    vertical-align:middle;
    width:40%;
    text-align: center;
}
.l-rht{
    display:table-cell;
    width:60%;
    vertical-align:middle;
}

.l-rht img{
    width:30px;
    height:auto;
    display: inline-block;
    margin-right: 10px;
}

.l-rht label {
    display: inline-block;
}

.l-rht>div {
    margin: 20px;
}

.l-tbl label {
    color: white;
}

.newspapers.popover>.tip,.newspapers.popover{
    max-width: 400px;
}

.newspapers .legend-layer-detail{
    width:400px;

}

.radio.popover>.tip, .radio.popover, .television.popover>.tip, .television.popover{
    max-width: 350px;
}

.radio .legend-layer-detail, .television .legend-layer-detail{
    width:350px;
}
span.layer-title {
    margin-right: 10px;
    text-align: left;
    display: block;
}
');

?>

var layerDetailMap={
  'Television':{
    html:'<div class="l-lft">'+
            '<label>Public TV station</label><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/[G]_ITb_SS6_[ImAgE]_LWT.png">'+
            '<label>Private TV station</label><img src="http://newspoverty.geolive.ca/components/com_geolive/users_files/user_files_400/Uploads/Qa5_[G]_[ImAgE]_4Ah_oTD.png">'+
        '</div><div class="l-rht">'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/[G]_W0v_B5_yuK_[ImAgE].png"><label>New</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/grw_0dl_[ImAgE]_cu4_[G].png"><label>Increased service</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/[G]_hVp_WtL_VlO_[ImAgE].png"><label>Decreased service</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/zf0_[ImAgE]_Dj9_[G]_Ogd.png"><label>Closed</label></div>'+
        '</div>'
  },
  'Newspapers':{
    html:'<div class="l-lft">'+
            '<label>Free daily newspaper</label><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/[G]_F7F_WJc_C6j_[ImAgE].png">'+
            '<label>Community newspaper</label><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/lQO_[G]_zUZ_[ImAgE]_FQv.png">'+
            '<label>Paid daily newspaper</label><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/4jQ_ULS_[G]_[ImAgE]_l92.png">'+
        '</div><div class="l-rht">'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/[G]_W0v_B5_yuK_[ImAgE].png"><label>New</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/grw_0dl_[ImAgE]_cu4_[G].png"><label>Increased service</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/[G]_hVp_WtL_VlO_[ImAgE].png"><label>Decreased service</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/zf0_[ImAgE]_Dj9_[G]_Ogd.png"><label>Closed</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/components/com_geolive/users_files/user_files_400/Uploads/[G]_[ImAgE]_y8s_wIS_0KD.png"><label>Closed due to merger</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/components/com_geolive/users_files/user_files_400/Uploads/MqZ_2D9_[G]_zSz_[ImAgE].png"><label>Opened after merger</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/components/com_geolive/users_files/user_files_400/Uploads/Tij_[G]_[ImAgE]_nkF_db1.png"><label>Transitioned</label></div>'+
        '</div>'
  },
  'Online news':{
    html:'<div class="l-lft">'+
            '<label>Online news</label><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/gdZ_kvi_[G]_Ka7_[ImAgE].png">'+
        '</div><div class="l-rht">'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/[G]_W0v_B5_yuK_[ImAgE].png"><label>New</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/zf0_[ImAgE]_Dj9_[G]_Ogd.png"><label>Closed</label></div>'+
        '</div>'
  },
  'Radio':{
    html:'<div class="l-lft">'+
            '<label>Public radio</label><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/[ImAgE]_[G]_WNv_exD_hzn.png">'+
            '<label>Private radio</label><img src="http://newspoverty.geolive.ca/components/com_geolive/users_files/user_files_400/Uploads/[ImAgE]_zp_[G]_8J5_V8w.png">'+
        '</div><div class="l-rht">'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/[G]_W0v_B5_yuK_[ImAgE].png"><label>New</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/grw_0dl_[ImAgE]_cu4_[G].png"><label>Increased service</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/[G]_hVp_WtL_VlO_[ImAgE].png"><label>Decreased service</label></div>'+
            '<div><img src="http://newspoverty.geolive.ca/administrator/components/com_geolive/users_files/user_files_400/Uploads/zf0_[ImAgE]_Dj9_[G]_Ogd.png"><label>Closed</label></div>'+
        '</div>'
  }
}

var layerName=layerMetadata.name;//layer.getName();
var cssName=layerName.replace(' ' ,'-').toLowerCase();
var detail=new Element('span', {html:layerDetailMap[layerName].html, 'class':'l-tbl'});


var div=new Element('div',{html:'<span class="layer-title">'+layerMetadata.description+'</span>', style:'display:inline-table;', 'class':'legend-layer-detail'});
div.appendChild(detail);
popover.setText(div);
popover.options.className=popover.options.className+' '+cssName;