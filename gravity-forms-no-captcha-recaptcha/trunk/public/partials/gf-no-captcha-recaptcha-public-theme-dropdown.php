<li class="recaptcha_theme_setting field_setting">

	<label for="field_recaptcha_theme_value"><?php _e( 'CAPTCHA Theme', 'gravityforms' ); ?></label>

	<select id="field_recaptcha_theme_value" onchange="SetFieldProperty( 'recaptcha_theme', this.value );">
		<option value="light">Light</option>
		<option value="dark">Dark</option>
	</select>
</li>