<li class="recaptcha_theme_setting field_setting">

	<label for="field_theme_setting"><?php _e( 'CAPTCHA Theme', 'gravityforms' ); ?></label>

	<select id="field_recaptcha_theme_value" onchange="SetFieldProperty( 'recaptcha_theme', this.value );">
		<option value="light">Light</option>
		<option value="dark">Dark</option>
	</select>
</li>
<li class="recaptcha_theme_setting field_setting">

	<label for="field_theme_setting_size"><?php _e( 'CAPTCHA Size', 'gravityforms' ); ?></label>

	<select id="field_theme_setting_size" onchange="SetFieldProperty( 'recaptcha_size', this.value );">
		<option value="normal">Normal</option>
		<option value="compact">Compact</option>
	</select>
</li>