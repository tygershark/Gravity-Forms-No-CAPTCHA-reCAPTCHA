# Gravity Forms No CAPTCHA reCAPTCHA

Adds a "No CAPTCHA reCAPTCHA" field type to Gravity Forms form builder with light/dark theme options. Forms with a "No CAPTCHA reCAPTCHA" will validate the field before successful submission.

* [Official WordPress Plugin Directory Page](https://wordpress.org/plugins/gravity-forms-no-captcha-recaptcha/)
* [Folkhack Studios](http://folkhack.com)

## Installation

1. Upload "gravity-forms-no-captcha-recaptcha" to "plugins" directory
2. Activate the plugin through the "Plugins" menu in WordPress
3. Sign-up for reCAPTCHA at https://www.google.com/recaptcha/
4. Drop "Site Key" and "Secret Key" in "Settings > No CAPTCHA reCAPTCHA" page
5. Add "No CAPTCHA" field into forms which you desire to have No CAPTCHA on via "Advanced Fields > No CAPTCHA" in Gravity Forms Form Editor
6. Set label for "No CAPTCHA" field in Form Editor

## Frequently Asked Questions

#### Does this work for AJAX submitted forms?

Yes, we took special consideration to ensure that validation works correctly when submitting a form via AJAX!

#### What versions of Gravity Forms/WordPress have you formally tested this with?

* Gravity Forms: 1.8.19
* WordPress: 4.0.0, 4.0.1, 4.1.0

#### Can I have multiple No CAPTCHA reCAPTCHA fields on one page?

Normally this situation comes up if you have more than one Gravity Form with CAPTCHA on one page. As of version 1.0.2 this is supported.

## Screenshots

![Plugin in action on contact form](https://raw.githubusercontent.com/folkhack/Gravity-Forms-No-CAPTCHA-reCAPTCHA/master/gravity-forms-no-captcha-recaptcha/assets/screenshot-1.png "Plugin in action on contact form")

![Plugin administrative settings page with Site and Secret key settings](https://raw.githubusercontent.com/folkhack/Gravity-Forms-No-CAPTCHA-reCAPTCHA/master/gravity-forms-no-captcha-recaptcha/assets/screenshot-2.png "Plugin administrative settings page with Site and Secret key settings")

![Adding the No CAPTCHA field to the Gravity Forms form builder](https://raw.githubusercontent.com/folkhack/Gravity-Forms-No-CAPTCHA-reCAPTCHA/master/gravity-forms-no-captcha-recaptcha/assets/screenshot-3.png "Adding the No CAPTCHA field to the Gravity Forms form builder")

## Roadmap + To-do Items

* Addition of composer.json (maybe)
* Hooks/filters for customizing things like error message, etc.
* Localization/internationalization support (ideally get someone's help who knows what they're doing)
* Add proper uninstaller (uninstall.php)

## Special Thanks

Preliminary version developed based on Tom McFarlin's [WP Plugin Boilerplate](https://tommcfarlin.com/wordpress-plugin-boilerplate/) - [GitHub Project](https://github.com/tommcfarlin/WordPress-Plugin-Boilerplate)