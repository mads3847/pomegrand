/* Simple Scroll Reveal
 * @author Machine Agency [hello@machine-agency.com]
 * @link http://machine-agency.com
 */
jQuery(document).ready( function($) {
    var revealClass = '.animated';
    var targetClass = '.has-scroll-reveal:not(' + revealClass + ')';
    var offset = 50; // Offset from bottom of viewport in pixels.

    var winHeight = $(window).height();

    // Recalc height of window in case of resize
    $(window).bind('resizeEnd', function() {
      winHeight = $(window).height();
    });

    // Fire when page loads
    triggerAnimation(revealClass, targetClass, offset, winHeight);

    // Also fire on scroll
    $(window).on('scroll', function() {
        triggerAnimation(revealClass, targetClass, offset, winHeight);
    }); // window.on('scroll')

}); // document.ready

function triggerAnimation(revealClass, targetClass, offset, winHeight) {

      // Get current scrollPos
      var trigger = $(window).scrollTop() + winHeight - offset;

      // Loop through elements we're affecting
      $(targetClass).each(function() {
        var elementOffset = $(this).offset().top;

        if( elementOffset < trigger ) {

          $(this).addClass( revealClass.replace('.','') );
        }
      });

}

/*
 * ResizeEnd
 *
 * Example:
 * $(window).bind('resizeEnd', function() {
 *  console.log('resize ended 500ms ago');
 * });
 */
$(window).resize(function() {

    if(this.resizeTO) clearTimeout(this.resizeTO);

    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);

});
















$(function () { // DOM ready for jQuery??
  //write your code below

  //The two go to debugging tools: alert & console.log - uncomment them using // or /* .... */
  //alert("hey");
  console.log('hi there from "js/scripts.js" - good to see you');
  //console.error('Just checking if YOU are checking the console. You should always open Chrome DevTools and check the console when doing web development. \n\nPlease uncomment or delete these messages from the js-file. \n\nBUT remember the syntax for alert and console.log \(e.g. by keeping then in the comments in the file\). \n\n//Lasse');
}); //END DOM ready



var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}




