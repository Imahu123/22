document.head = document.head ||
document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.id = 'dynamic-favicon';
link.rel = 'icon';
link.href = 'ressources/images/583d26c8c7c8.png';
document.head.appendChild(link);



var grille = $("#justified_BLOCK_ELNY2CU0X7 .caption");
grille.each( function() {
var link = $(this).text();
if(link === " ") {
    //si le champs n’est pas renseigné
} else {
 if (link.match("^http")) {    $(this).parent().find('a').removeClass().attr({'href': link, 'target':'_blank'});
} else {
$(this).parent().find('a').removeClass().attr({'href': link, 'target':'_self'}); }
}
});
/*!
 * Justified Gallery - v3.5.4
 * http://miromannino.github.io/Justified-Gallery/
 * Copyright (c) 2015 Miro Mannino
 * Licensed under the MIT license.
 */
!function(a){a.fn.justifiedGallery=function(b){function c(a,b,c){var d;return d=a>b?a:b,100>=d?c.settings.sizeRangeSuffixes.lt100:240>=d?c.settings.sizeRangeSuffixes.lt240:320>=d?c.settings.sizeRangeSuffixes.lt320:500>=d?c.settings.sizeRangeSuffixes.lt500:640>=d?c.settings.sizeRangeSuffixes.lt640:c.settings.sizeRangeSuffixes.lt1024}function d(a,b){return-1!==a.indexOf(b,a.length-b.length)}function e(a,b){return a.substring(0,a.length-b.length)}function f(a,b){var c=!1;for(var e in b.settings.sizeRangeSuffixes)if(0!==b.settings.sizeRangeSuffixes[e].length){if(d(a,b.settings.sizeRangeSuffixes[e]))return b.settings.sizeRangeSuffixes[e]}else c=!0;if(c)return"";throw"unknown suffix for "+a}function g(a,b,d,g){var h=a.match(g.settings.extension),i=null!=h?h[0]:"",j=a.replace(g.settings.extension,"");return j=e(j,f(j,g)),j+=c(b,d,g)+i}function h(b){var c=a(b.currentTarget).find(".caption");b.data.settings.cssAnimation?c.addClass("caption-visible").removeClass("caption-hidden"):c.stop().fadeTo(b.data.settings.captionSettings.animationDuration,b.data.settings.captionSettings.visibleOpacity)}function i(b){var c=a(b.currentTarget).find(".caption");b.data.settings.cssAnimation?c.removeClass("caption-visible").removeClass("caption-hidden"):c.stop().fadeTo(b.data.settings.captionSettings.animationDuration,b.data.settings.captionSettings.nonVisibleOpacity)}function j(a,b,c){c.settings.cssAnimation?(a.addClass("entry-visible"),b()):a.stop().fadeTo(c.settings.imagesAnimationDuration,1,b)}function k(a,b){b.settings.cssAnimation?a.removeClass("entry-visible"):a.stop().fadeTo(0,0)}function l(a){var b=a.find("> img");return 0===b.length&&(b=a.find("> a > img")),b}function m(b,c,d,e,f,k,m){function n(){p!==q&&o.attr("src",q)}var o=l(b);o.css("width",e),o.css("height",f),o.css("margin-left",-e/2),o.css("margin-top",-f/2),b.width(e),b.height(k),b.css("top",d),b.css("left",c);var p=o.attr("src"),q=g(p,e,f,m);o.one("error",function(){o.attr("src",o.data("jg.originalSrc"))}),"skipped"===o.data("jg.loaded")?x(p,function(){j(b,n,m),o.data("jg.loaded",!0)}):j(b,n,m);var r=b.data("jg.captionMouseEvents");if(m.settings.captions===!0){var s=b.find(".caption");if(0===s.length){var t=o.attr("alt");"undefined"==typeof t&&(t=b.attr("title")),"undefined"!=typeof t&&(s=a('<div class="caption">'+t+"</div>"),b.append(s))}0!==s.length&&(m.settings.cssAnimation||s.stop().fadeTo(m.settings.imagesAnimationDuration,m.settings.captionSettings.nonVisibleOpacity),"undefined"==typeof r&&(r={mouseenter:h,mouseleave:i},b.on("mouseenter",void 0,m,r.mouseenter),b.on("mouseleave",void 0,m,r.mouseleave),b.data("jg.captionMouseEvents",r)))}else"undefined"!=typeof r&&(b.off("mouseenter",void 0,m,r.mouseenter),b.off("mouseleave",void 0,m,r.mouseleave),b.removeData("jg.captionMouseEvents"))}function n(a,b){var c,d,e,f,g,h,i=a.settings,j=!0,k=0,m=a.galleryWidth-2*a.border-(a.buildingRow.entriesBuff.length-1)*i.margins,n=m/a.buildingRow.aspectRatio,o=a.buildingRow.width/m>i.justifyThreshold;if(b&&"hide"===i.lastRow&&!o){for(c=0;c<a.buildingRow.entriesBuff.length;c++)d=a.buildingRow.entriesBuff[c],i.cssAnimation?d.removeClass("entry-visible"):d.stop().fadeTo(0,0);return-1}for(b&&!o&&"nojustify"===i.lastRow&&(j=!1),c=0;c<a.buildingRow.entriesBuff.length;c++)e=l(a.buildingRow.entriesBuff[c]),f=e.data("jg.imgw")/e.data("jg.imgh"),j?(g=c===a.buildingRow.entriesBuff.length-1?m:n*f,h=n):(g=i.rowHeight*f,h=i.rowHeight),m-=Math.round(g),e.data("jg.jimgw",Math.round(g)),e.data("jg.jimgh",Math.ceil(h)),(0===c||k>h)&&(k=h);return i.fixedHeight&&k>i.rowHeight&&(k=i.rowHeight),{minHeight:k,justify:j}}function o(a){a.lastAnalyzedIndex=-1,a.buildingRow.entriesBuff=[],a.buildingRow.aspectRatio=0,a.buildingRow.width=0,a.offY=a.border}function p(a,b){var c,d,e,f,g=a.settings,h=a.border;if(f=n(a,b),e=f.minHeight,b&&"hide"===g.lastRow&&-1===e)return a.buildingRow.entriesBuff=[],a.buildingRow.aspectRatio=0,void(a.buildingRow.width=0);g.maxRowHeight>0&&g.maxRowHeight<e?e=g.maxRowHeight:0===g.maxRowHeight&&1.5*g.rowHeight<e&&(e=1.5*g.rowHeight);for(var i=0;i<a.buildingRow.entriesBuff.length;i++)c=a.buildingRow.entriesBuff[i],d=l(c),m(c,h,a.offY,d.data("jg.jimgw"),d.data("jg.jimgh"),e,a),h+=d.data("jg.jimgw")+g.margins;a.$gallery.height(a.offY+e+a.border+(a.spinner.active?a.spinner.$el.innerHeight():0)),(!b||e<=a.settings.rowHeight&&f.justify)&&(a.offY+=e+a.settings.margins,a.buildingRow.entriesBuff=[],a.buildingRow.aspectRatio=0,a.buildingRow.width=0,a.$gallery.trigger("jg.rowflush"))}function q(a){a.checkWidthIntervalId=setInterval(function(){var b=parseInt(a.$gallery.width(),10);a.galleryWidth!==b&&(a.galleryWidth=b,o(a),u(a,!0))},a.settings.refreshTime)}function r(a){clearInterval(a.intervalId),a.intervalId=setInterval(function(){a.phase<a.$points.length?a.$points.eq(a.phase).fadeTo(a.timeslot,1):a.$points.eq(a.phase-a.$points.length).fadeTo(a.timeslot,0),a.phase=(a.phase+1)%(2*a.$points.length)},a.timeslot)}function s(a){clearInterval(a.intervalId),a.intervalId=null}function t(a){a.yield.flushed=0,null!==a.imgAnalyzerTimeout&&clearTimeout(a.imgAnalyzerTimeout)}function u(a,b){t(a),a.imgAnalyzerTimeout=setTimeout(function(){v(a,b)},.001),v(a,b)}function v(b,c){for(var d,e=b.settings,f=b.lastAnalyzedIndex+1;f<b.entries.length;f++){var g=a(b.entries[f]),h=l(g);if(h.data("jg.loaded")===!0||"skipped"===h.data("jg.loaded")){d=f>=b.entries.length-1;var i=b.galleryWidth-2*b.border-(b.buildingRow.entriesBuff.length-1)*e.margins,j=h.data("jg.imgw")/h.data("jg.imgh");if(i/(b.buildingRow.aspectRatio+j)<e.rowHeight&&(p(b,d),++b.yield.flushed>=b.yield.every))return void u(b,c);b.buildingRow.entriesBuff.push(g),b.buildingRow.aspectRatio+=j,b.buildingRow.width+=j*e.rowHeight,b.lastAnalyzedIndex=f}else if("error"!==h.data("jg.loaded"))return}b.buildingRow.entriesBuff.length>0&&p(b,!0),b.spinner.active&&(b.spinner.active=!1,b.$gallery.height(b.$gallery.height()-b.spinner.$el.innerHeight()),b.spinner.$el.detach(),s(b.spinner)),t(b),b.$gallery.trigger(c?"jg.resize":"jg.complete")}function w(a){function b(a){if("string"!=typeof d.sizeRangeSuffixes[a])throw"sizeRangeSuffixes."+a+" must be a string"}function c(a,b){if("string"==typeof a[b]){if(a[b]=parseFloat(a[b],10),isNaN(a[b]))throw"invalid number for "+b}else{if("number"!=typeof a[b])throw b+" must be a number";if(isNaN(a[b]))throw"invalid number for "+b}}var d=a.settings;if("object"!=typeof d.sizeRangeSuffixes)throw"sizeRangeSuffixes must be defined and must be an object";if(b("lt100"),b("lt240"),b("lt320"),b("lt500"),b("lt640"),b("lt1024"),c(d,"rowHeight"),c(d,"maxRowHeight"),d.maxRowHeight>0&&d.maxRowHeight<d.rowHeight&&(d.maxRowHeight=d.rowHeight),c(d,"margins"),c(d,"border"),"nojustify"!==d.lastRow&&"justify"!==d.lastRow&&"hide"!==d.lastRow)throw'lastRow must be "nojustify", "justify" or "hide"';if(c(d,"justifyThreshold"),d.justifyThreshold<0||d.justifyThreshold>1)throw"justifyThreshold must be in the interval [0,1]";if("boolean"!=typeof d.cssAnimation)throw"cssAnimation must be a boolean";if(c(d.captionSettings,"animationDuration"),c(d,"imagesAnimationDuration"),c(d.captionSettings,"visibleOpacity"),d.captionSettings.visibleOpacity<0||d.captionSettings.visibleOpacity>1)throw"captionSettings.visibleOpacity must be in the interval [0, 1]";if(c(d.captionSettings,"nonVisibleOpacity"),d.captionSettings.visibleOpacity<0||d.captionSettings.visibleOpacity>1)throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]";if("boolean"!=typeof d.fixedHeight)throw"fixedHeight must be a boolean";if("boolean"!=typeof d.captions)throw"captions must be a boolean";if(c(d,"refreshTime"),"boolean"!=typeof d.randomize)throw"randomize must be a boolean"}function x(b,c,d){if(c||d){var e=new Image,f=a(e);c&&f.one("load",function(){f.off("load error"),c(e)}),d&&f.one("error",function(){f.off("load error"),d(e)}),e.src=b}}var y={sizeRangeSuffixes:{lt100:"",lt240:"",lt320:"",lt500:"",lt640:"",lt1024:""},rowHeight:120,maxRowHeight:0,margins:1,border:-1,lastRow:"nojustify",justifyThreshold:.75,fixedHeight:!1,waitThumbnailsLoad:!0,captions:!0,cssAnimation:!1,imagesAnimationDuration:500,captionSettings:{animationDuration:500,visibleOpacity:.7,nonVisibleOpacity:0},rel:null,target:null,extension:/\.[^.\\/]+$/,refreshTime:100,randomize:!1};return this.each(function(c,d){var e=a(d);e.addClass("justified-gallery");var f=e.data("jg.context");if("undefined"==typeof f){if("undefined"!=typeof b&&null!==b&&"object"!=typeof b)throw"The argument must be an object";var g=a('<div class="spinner"><span></span><span></span><span></span></div>'),h=a.extend({},y,b),i=h.border>=0?h.border:h.margins;f={settings:h,imgAnalyzerTimeout:null,entries:null,buildingRow:{entriesBuff:[],width:0,aspectRatio:0},lastAnalyzedIndex:-1,"yield":{every:2,flushed:0},border:i,offY:i,spinner:{active:!1,phase:0,timeslot:150,$el:g,$points:g.find("span"),intervalId:null},checkWidthIntervalId:null,galleryWidth:e.width(),$gallery:e},e.data("jg.context",f)}else if("norewind"===b)for(var j=0;j<f.buildingRow.entriesBuff.length;j++)k(f.buildingRow.entriesBuff[j],f);else f.settings=a.extend({},f.settings,b),f.border=f.settings.border>=0?f.settings.border:f.settings.margins,o(f);if(w(f),f.entries=e.find("> a, > div:not(.spinner)").toArray(),0!==f.entries.length){f.settings.randomize&&(f.entries.sort(function(){return 2*Math.random()-1}),a.each(f.entries,function(){a(this).appendTo(e)}));var m=!1,n=!1;a.each(f.entries,function(b,c){var d=a(c),g=l(d);if(d.addClass("jg-entry"),g.data("jg.loaded")!==!0&&"skipped"!==g.data("jg.loaded")){null!==f.settings.rel&&d.attr("rel",f.settings.rel),null!==f.settings.target&&d.attr("target",f.settings.target);var h="undefined"!=typeof g.data("safe-src")?g.data("safe-src"):g.attr("src");g.data("jg.originalSrc",h),g.attr("src",h);var i=parseInt(g.attr("width"),10),j=parseInt(g.attr("height"),10);if(f.settings.waitThumbnailsLoad!==!0&&!isNaN(i)&&!isNaN(j))return g.data("jg.imgw",i),g.data("jg.imgh",j),g.data("jg.loaded","skipped"),n=!0,u(f,!1),!0;g.data("jg.loaded",!1),m=!0,f.spinner.active===!1&&(f.spinner.active=!0,e.append(f.spinner.$el),e.height(f.offY+f.spinner.$el.innerHeight()),r(f.spinner)),x(h,function(a){g.data("jg.imgw",a.width),g.data("jg.imgh",a.height),g.data("jg.loaded",!0),u(f,!1)},function(){g.data("jg.loaded","error"),u(f,!1)})}}),m||n||u(f,!1),q(f)}})}}(jQuery);
$("#justified_BLOCK_ELNY2CU0X7").justifiedGallery({
		rowHeight : 160,
		maxRowHeight : -1,
		margins : 10,
		lastRow : 'justify',
		captions: true
	}).on('jg.complete', function () {
		var justifiedLightbox =  $("#justified_BLOCK_ELNY2CU0X7").find(".justifiedLightbox").imageLightbox(
		{
		    onStart:     function() { ilbOverlayOn(); ilbNavigationOn( justifiedLightbox ); },
		    onEnd:       function() { ilbCaptionOff(); ilbOverlayOff(); ilbActivityIndicatorOff(); ilbNavigationOff(); },
		    onLoadStart: function() { ilbCaptionOff(); ilbActivityIndicatorOn(); },
		    onLoadEnd:   function() { ilbCaptionOn( justifiedLightbox ); ilbActivityIndicatorOff(); }
		});
	});
var $clicked = null;
var onRecaptchaSubmit = function(token){
	$clicked.off('valid.fndtn.abide').off('submit');
	$clicked.submit();
}
var myCall = function(e, $idxForm){
	$clicked = $(e.target);	
	grecaptcha.execute($idxForm);
}

var getFormIndex = function($formId, $form){
	var index = 0 ;
	if($formId > 0){
		$ ('form:has(.g-recaptcha)').each(function(idx) {
			if ( $ (this).is($form) ){
				index = idx ;
			}
		});
	}
	return index ;
}

$(function(){
	$('form:has(.g-recaptcha)').on('valid.fndtn.abide',function(e){
		var $formId = (typeof $(this).find('input[name="fideo"]') !== "undefined") ? $(this).find('input[name="fideo"]').val() : 0 ;
		if (typeof $formId == "undefined"){
			$formId = 0;
		}
		var $idxForm = getFormIndex($formId, $ (this));
		myCall(e, $idxForm);
	})
	.on('invalid.fndtn.abide',function(e){
		grecaptcha.reset();
	})
	.on('submit',function(e){
		e.preventDefault();
		return false;
	});
});

function verifierEtat(checkbox){
                    $(checkbox).each(function(){ 
                        if($(this).prop("checked")===true){ 
                            $(checkbox).removeAttr("required"); 
                            return false; 
                        }else{ 
                            $(checkbox).attr("required", true); 
                        } 
                    }); 
                }
$(window).on("load", function() {
                var chkboxname = "input[name='formtag0-rgpd-check-1[]']"; 
                var attribu = $(chkboxname).attr("required");
                if( attribu !== undefined && attribu !== false) {
                  verifierEtat(chkboxname);
                  $(chkboxname).on("change",function() {
                    verifierEtat(chkboxname);
                  });
                } 
            });
        
