
/**
 * sidebarEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
 var SidebarMenuEffects = (function() {

    function hasParentClass( e, classname ) {
        if(e === document) return false;
        if( classie.has( e, classname ) ) {
            return true;
        }
        return e.parentNode && hasParentClass( e.parentNode, classname );
    }

    // http://coveroverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    function init() {
        
        $(document).ready( function(){

            var $mcontent = $('#pav-mainnav .navbar .navbar-nav');
            var $btn = $("#pav-mainnav .navbar-toggle");
            var effect = 3;

            var $offcmenu = $('<nav id="menu-offcanvas" class="offcanvas-menu offcanvas-effect-'+effect+' hidden-lg hidden-md"><div class="menu-offcanvas-inner"></div></nav>');
            $(".menu-offcanvas-inner", $offcmenu ).append( $mcontent.clone() );

            $("body").append( $offcmenu ); 
             $(".navbar-nav", $offcmenu  ).removeClass("navbar-nav").removeClass("nav").addClass("menu-offcanvas-content");


             var eventtype = mobilecheck() ? 'touchstart' : 'click';  
                $($btn).bind( eventtype, function(e){  
                $("#offcanvas-container").toggleClass(  "offcanvas-menu-open" ).addClass( "offcanvas-effect-"+effect );
               
                 
                $("#page").bind( eventtype , function (){
                    $("#offcanvas-container").toggleClass(  "offcanvas-menu-open" );
                    $("#page").unbind( eventtype );
                } ); 
                e.stopPropagation();       
               return false;
            } );
        } );    
    }
    init();
})();

/* Offcanvas Sidebars */
$(document).ready( function (){  
    if( $("#columns").hasClass("offcanvas-siderbars") ) { 
        $('.offcanvas-sidebars-buttons button').hide();
        $( ".sidebar" ).parent().parent().find("section").addClass("main-column");
        $( ".sidebar" ).each( function(){ 
            $('[data-for="'+$(this).attr("id")+'"]').show();
            $(this).parent().attr("id","oc-"+$(this).attr("id") ).addClass("offcanvas-sidebar");
        } );
        $(".offcanvas-sidebars-buttons button").bind( "click", function(){
            if( $(this).data("for") == "column-right" ){
                 $(".offcanvas-siderbars").removeClass("column-left-active");
            }else {
                 $(".offcanvas-siderbars").removeClass("column-right-active");
            }
            $(".offcanvas-siderbars").toggleClass( $(this).data("for")+"-active" );
            $("#oc-"+$(this).data("for") ).toggleClass("canvas-show");
        } );
     }   
} );

 
 

$(window).ready( function(){
    /* Fix Search */
    /* Search */
    $('#search_mobile .button-search').bind('click', function() {
        url = $('base').attr('href') + 'index.php?route=product/search';
        var search = $('#search_mobile input[name=\'search1\']').attr('value');
        if (search) {
            url += '&search=' + encodeURIComponent(search);
        }
        location = url;
    }); 
    $('#search_mobile input[name=\'search1\']').bind('keydown', function(e) {
        if (e.keyCode == 13) {
            url = $('base').attr('href') + 'index.php?route=product/search';             
            var search = $('#search_mobile input[name=\'search1\']').attr('value');         
            if (search) {
                url += '&search=' + encodeURIComponent(search);
            }           
            location = url;
        }
    });
	/*  Fix First Click Menu */
	$(document.body).on('click', '#pav-mainnav [data-toggle="dropdown"], #menu-offcanvas [data-toggle="dropdown"]' ,function(){ 
		if(!$(this).parent().hasClass('open') && this.href && this.href != '#'){
			window.location.href = this.href;
		}

	});


	
	$(".quantity-adder .add-action").click( function(){
		if( $(this).hasClass('add-up') ) {  
			$("[name=quantity]",'.quantity-adder').val( parseInt($("[name=quantity]",'.quantity-adder').val()) + 1 );
		}else {
			if( parseInt($("[name=quantity]",'.quantity-adder').val())  > 1 ) {
				$("input",'.quantity-adder').val( parseInt($("[name=quantity]",'.quantity-adder').val()) - 1 );
			}
		}
	} );
    $("#image-additional a").click( function(e){
         $("#image").parent('a').attr('href', $(this).data('zoom-image') );
         e.preventDefault();
    } );

} );
$(document).ready(function() {
    if( jQuery().colorbox ){
        $('.colorbox').colorbox({
            overlayClose: true,
            opacity: 0.5,
            rel: false,
        });  
        $('.pav-colorbox').colorbox({
            width: '50%', 
            height: '80%',
            overlayClose: true,
            opacity: 0.5,
            iframe: true, 
        }); 
    }
});


function addToWishList(product_id) {
    $.ajax({
        url: 'index.php?route=account/wishlist/add',
        type: 'post',
        data: 'product_id=' + product_id,
        dataType: 'json',
        success: function(json) {
            $('.success, .warning, .attention, .information').remove();
                        
            if (json['success']) {
                $('#notification').html('<div class="success" style="display: none;">' + json['success'] + '<img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>');
                
                $('.success').fadeIn('slow');
                
                $('#wishlist-total').html(json['total']);

                $('#mobile-wishlist-total').html(json['total']);
                
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            }   
        }
    });
}

//Autocomplete
function ws_autocomplete(culture,speditor) {
    $('#user_name').bind("blur",function() { 
        ws_checkField(this,'empty');
    });
    $('#user_phone').bind("blur",function() {
        ws_checkField(this,'empty');
        ws_checkField(this,'phone');
    });
    $('#user_email').bind("blur",function() {
        ws_checkField(this,'email');
    });
    $('#user_password').bind("blur",function() {
        ws_checkField(this,'empty');
    });
    $('#user_password_again').bind("blur",function() {
        ws_matchFields('#user_password',this);
    });
    $('#user_terms').bind("blur",function() {
        ws_checkField(this,'unchecked');
    });
    $('#user_city').bind("blur",function() {
        ws_checkField(this,'empty');
    });
    $('#user_address').bind("blur",function() {
        ws_checkField(this,'empty');
    });
    $('body').append('<div id="registration-city-autocomplete"></div>');
    $('#user_city').autocomplete({});
    $('#user_city').autocomplete({
        appendTo:'#registration-city-autocomplete',
        minLength:1,
        autoFocus:true,
        select:function(event,ui) {
            ws_clearAddressFields(culture,speditor);
            $('#user_city').hide();
            $('#user_'+culture+'-'+speditor+'-site-id').val(ui.item.id);
            ws_hideEerrorOnField(this);
            if($('#user_city-box').length==0) {
                $('#user_city').before('<div id="city-selected-box"><div class="type">'+$.trim(ui.item.siteType)+'</div>&nbsp;'+$.trim(ui.item.siteName).replace(/\s/g,"&nbsp;")+'<span id="city-selected-box-close">x</span></div><div style="clear:both;"><!-- --></span>');
                $('#city-selected-box-close').bind('click',function() {
                    ws_clearAddressFields(culture,speditor);
                    $('#city-selected-box').remove();
                    $('#user_city').val("").show().focus();
                });
            }
            var hasStreets=false;
            var hasQuarters=false;
            if(ui.item.quartersNumber>0) {
                $('#quarter-wrapper').show();
                hasQuarters=true;
            }
            if(ui.item.streetsNumber>0||hasQuarters) {
                $('#street-wrapper').show();
                hasStreets=true;
            }
            if(hasStreets||hasQuarters)
            {$('#user_registration-full-address').val("true");
                $('#address_note-wrapper').show();
                $('#address-wrapper').hide();}
            else
            {
                $('#user_registration-full-address').val("false");
            }
            if(ui.item.quartersNumber>0) {
                $('#user_quarter').focus();
            }
            else if(ui.item.streetsNumber>0) {
                $('#user_street').focus();
            }
            else{
                $('#user_address').focus();
            }
        },
        source:function(request,response) {
            $.ajax({
                url:'/speditors/get/cities/',
                dataType:'json',
                data:{
                    speditor:speditor,
                    culture:culture,
                    search:request.term},
                success:function(data) {
                    if(typeof(data.search)!='undefined'&&typeof(data.data)!='undefined') {
                        response($.map(data.data,function(item) {
                            return{
                                label:item.siteName,
                                id:item.siteId,
                                search:data.search,
                                siteType:item.siteType,
                                siteName:item.siteName,
                                siteNameBeginning:item.siteNameBeginning,
                                siteNameEnding:item.siteNameEnding,
                                siteRegion:item.siteRegion,
                                siteMunicipality:item.siteMunicipality,
                                streetsNumber:item.streetsNumber,
                                quartersNumber:item.quartersNumber,
                                value:item.siteType+' '+item.siteName
                            }
                        }));
                    }
                }});
        }}).data('autocomplete')._renderItem=function(ul,item) {
            return $('<li></li>').data('item.autocomplete',item)
                    .append('<a><span class=\'site-type\'>'+item.siteType+'</span> <span class=\'site-name\'><strong>'+item.siteNameBeginning+'</strong>'+item.siteNameEnding+'</span>, <span class=\'site-municipality\'>'+item.siteMunicipality.toLowerCase()+'</span></a>')
.appendTo(ul);
        };
        $('body').append('<div id="registration-quarter-autocomplete"></div>');$('#user_quarter').autocomplete({
            appendTo:'#registration-quarter-autocomplete',
            minLength:1,
            autoFocus:true,
            select:function(event,ui) {
                ws_hideEerrorOnField(this);
                $('#user_'+culture+'-'+speditor+'-quarter-id').val(ui.item.id);
                $('#user_street').focus();
                $(this).autocomplete('close');
            },
            source:function(request,response) {
                if($('#user_'+culture+'-'+speditor+'-site-id').val()!=='') {
                    var siteId=$('#user_'+culture+'-'+speditor+'-site-id').val();
                    $.ajax({url:'/speditors/get/quarters/',
                        dataType:'json',
                        data:{
                            speditor:speditor,
                            culture:culture,
                            search:request.term,
                            site:siteId},
                        success:function(data) {
                            if(typeof(data.search)!='undefined'&&typeof(data.data)!='undefined') {
                                response($.map(data.data,function(item) {
                                    return{
                                        label:item.quarterName,
                                        id:item.quarterId,
                                        search:data.search,
                                        quarterType:item.quarterType,
                                        quarterName:item.quarterName,
                                        quarterNameBeginning:item.quarterNameBeginning,
                                        quarterNameEnding:item.quarterNameEnding,
                                        value:item.quarterType+' '+item.quarterName
                                    }
                                }));
                            }}});
                }}}).data('autocomplete')._renderItem=function(ul,item) {
                    return $('<li></li>').data('item.autocomplete',item).append('<a><span class=\'quarter-type\'>'+item.quarterType+'</span> <span class=\'quarter-name\'><strong>'+item.quarterNameBeginning+'</strong>'+item.quarterNameEnding+'</span></a>').appendTo(ul);
                }
                $('body').append('<div id="registration-street-autocomplete"></div>');
                $('#user_street').autocomplete({
                    appendTo:'#registration-street-autocomplete',
                    minLength:1,
                    autoFocus:true,
                    select:function(event,ui) {
                        ws_hideEerrorOnField(this);
                        $('#user_'+culture+'-'+speditor+'-street-id').val(ui.item.id);
                        $('#user_street_number').focus();
                        $(this).autocomplete('close');
                    },
                    source:function(request,response) {
                        if($('#user_'+culture+'-'+speditor+'-site-id').val()!=='') {
                            var siteId=$('#user_'+culture+'-'+speditor+'-site-id').val();
                            $.ajax({
                                url:'/speditors/get/streets/',
                                dataType:'json',
                                data:{
                                    speditor:speditor,
                                    culture:culture,
                                    search:request.term,
                                    site:siteId
                                },
                                success:function(data) {
                                    if(typeof(data.search)!='undefined'&&typeof(data.data)!='undefined') {
                                        response($.map(data.data,function(item) {
                                            return{
                                                label:item.streetName,
                                                id:item.streetId,
                                                search:data.search,
                                                streetType:item.streetType,
                                                streetName:item.streetName,
                                                streetNameBeginning:item.streetNameBeginning,
                                                streetNameEnding:item.streetNameEnding,
                                                value:item.streetType+' '+item.streetName
                                            }
                                        }));
                                    }}});
                        }}}).data('autocomplete')._renderItem=function(ul,item) {
                    return $('<li></li>').data('item.autocomplete',item).append('<a><span class=\'street-type\'>'+item.streetType+'</span> <span class=\'street-name\'><strong>'+item.streetNameBeginning+'</strong>'+item.streetNameEnding+'</span></a>').appendTo(ul);
                    }
                    $('#user_name').focus();
                }
// Validate
    function ws_checkField(element,checkType) {
        switch(checkType) {
            case'empty':
                if($.trim($(element).val())=='') {
                    ws_showErrorOnField(element,'empty');
                    return false;
                }else {
                    ws_hideEerrorOnField(element);
                }
                break;
            case'unchecked':
                if(!$(element).is(':checked')) {
                    ws_showErrorOnField(element,'unchecked');
                    return false;
                }else {
                    ws_hideEerrorOnField(element);
                }
                break;
            case'email':
                var reEmail=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if($.trim($(element).val())==''||!reEmail.test($.trim($(element).val()))) {
                    ws_showErrorOnField(element,'invalid');
                    return false;
                } else {
                    ws_hideEerrorOnField(element);
                }
                break;
            case'phone':
                $(element).val($(element).val().replace(/[^0-9]/g,""));
                var rePhone=/^[0-9 ]+$/;
                if(!rePhone.test($.trim($(element).val()))||$.trim($(element).val()).length<4) {
                    ws_showErrorOnField(element,'empty');
                    return false;
                } else {
                    ws_hideEerrorOnField(element);
                }
                break;
        }
        return true;
    }
    //
    function ws_matchFields(element1,element2) {
        if($.trim($(element2).val())==''||$.trim($(element1).val())!=$.trim($(element2).val())) {
            ws_showErrorOnField(element2,'match');
            return false;
        } else {
            ws_hideEerrorOnField(element2);
            return true;
        }
    }
    //
    function ws_showErrorOnField(element,errorType) {
        ws_hideEerrorOnField(element);
        var label=$("label[for='"+$(element).attr('id')+"']");
        if(label.length>0) {
            label.css('color','red');
        }
        $(element).css('border-color','red');
        if(wsConfigRegistration.errorLabels) {
            errorElement=$("#"+$(element).attr('id')+"-error-"+errorType);
            errorElement.show();
        }
    }
    //
    function ws_hideEerrorOnField(element) {
        var label=$("label[for='"+$(element).attr('id')+"']");
        if(label.length>0) {
            label.css('color','#666666');
            $(element).css('border-color','#CACACA');
        }
        if(wsConfigRegistration.errorLabels) {
            $("div[id^="+$(element).attr('id')+"-error-]").hide();
        }
    }
    //
    
    function ws_showInternalLabel(element) {
        if($.trim($(element).val())=='') {
            $('#'+$(element).attr('id')+'-internal-search-label').show();
        }
    }
    //
    function ws_hideInternalLabel(element) {
        if(!$(element).attr('disabled')) {
            $('#'+$(element).attr('id')+'-internal-search-label').hide();
        }
    }
    //
    function ws_clearAddressFields(culture,speditor) {
        $('#user_registration-full-address').val("false");
        $('#user_'+culture+'-'+speditor+'-site-id').val("");
        $('#user_'+culture+'-'+speditor+'-street-id').val("");
        $('#user_'+culture+'-'+speditor+'-quarter-id').val("");
        $('#user_quarter').val("");
        $('#user_street').val("");
        $('#user_street_number').val("");
        $('#user_block').val("");
        $('#user_entrance').val("");
        $('#user_floor').val("");
        $('#user_apartment').val("");
        $('#user_address_note').val("");
        $('#user_address').val("");
        $('#address-wrapper').show();
        $('#street-wrapper').hide();
        $('#quarter-wrapper').hide();
        $('#address_note-wrapper').hide();
        ws_hideEerrorOnField($('#user_address'));
    }