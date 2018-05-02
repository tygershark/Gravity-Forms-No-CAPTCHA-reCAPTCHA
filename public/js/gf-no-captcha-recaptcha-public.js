(function( $ ) {

    'use strict';

    var HEADER_HEIGHT = 0;
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    var grecaptchaPosition;

    var isScrolledIntoView = function ( elem ) {
        var elemRect = elem.getBoundingClientRect();
        var isVisible = ( elemRect.top - HEADER_HEIGHT >= 0 && elemRect.bottom <= window.innerHeight );

        return isVisible;
    };

    if ( isIOS ) {
        var recaptchaElements = document.querySelectorAll( '.g-recaptcha' );

        window.addEventListener( 'scroll', function () {
            Array.prototype.forEach.call( recaptchaElements, function ( element ) {
                if ( isScrolledIntoView( element ) ) {
                    grecaptchaPosition = document.documentElement.scrollTop || document.body.scrollTop;
                }
            } );
        }, false );
    }

    var recaptchaCallback = function() {
        if ( isIOS && grecaptchaPosition !== undefined ) {
            window.scrollTo( 0, grecaptchaPosition );
        }
    };

    $( window ).load( function() {

        // Render the CAPTCHA on "gform_post_render" event (maintains compatibility with AJAX)
        $( document ).bind( 'gform_post_render', function() {

            // Iterate over each "g-recaptcha" div
            $( '.g-recaptcha' ).each( function( index, element ) {

                // Ensure field is empty before rendering CAPTCHA
                if( $( this ).is( ':empty' ) ) {

                    // Site key
                    var site_key = $( this ).attr( 'data-sitekey' );

                    // CAPTCHA theme
                    var theme = $( this ).attr( 'data-theme' );

                    // CAPTCHA size
                    var size = $( this ).attr( 'data-size' );

                    // Native DOM element
                    var element  = $( this ).get( 0 );

                    // Render CAPTCHA
                    grecaptcha.render( element, { 'sitekey': site_key, 'theme': theme, 'size': size, 'callback': recaptchaCallback } );
                }
            });
        });

        // Manually render CAPTCHA on window load
        $( document ).trigger( 'gform_post_render' );
    });

})( jQuery );