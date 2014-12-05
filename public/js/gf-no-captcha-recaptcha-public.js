(function( $ ) {

    'use strict';

    $( window ).load( function() {

        var site_key = $( '#g_no_captcha_recaptcha' ).attr( 'data-sitekey' );

        // Render the CAPTCHA on "gform_post_render" event (maintains compatibility with AJAX)
        $( document ).bind( 'gform_post_render', function() {

            grecaptcha.render( 'g_no_captcha_recaptcha', { 'sitekey': site_key } );
        });

        // Manually render CAPTCHA on window load
        $( document ).trigger( 'gform_post_render' );
    });

})( jQuery );