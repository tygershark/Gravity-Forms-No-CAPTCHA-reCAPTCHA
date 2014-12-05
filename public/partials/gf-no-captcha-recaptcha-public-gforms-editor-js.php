<?php
/**
 * Javascript for limiting what field settings are available to new field within Gravity Forms
 *
 * @link       http://folkhack.com
 * @since      1.0.0
 *
 * @package    GFNoCaptchaReCaptcha
 * @subpackage GFNoCaptchaReCaptcha/public/partials
 */
?>
<script type="text/javascript">

    (function( $ ) {

        'use strict';

        $(function() {

            // Limit field settings to label and visiblity
            fieldSettings['<?php echo $this->gravity_forms_field_type; ?>'] = '.label_setting, .visibility_setting';
        });

    })( jQuery );

</script>