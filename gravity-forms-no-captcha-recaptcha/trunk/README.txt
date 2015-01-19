=== Plugin Name ===
Contributors: folkhack
Tags: CAPTCHA, Gravity Forms
Requires at least: 4.0.0
Tested up to: 4.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Adds a No CAPTCHA reCAPTCHA to field type Gravity Forms

== Description ==

Adds a No CAPTCHA reCAPTCHA to field type Gravity Forms. In development/testing phase.

== Installation ==

1. Upload "gravity-forms-no-captcha-recaptcha" to "plugins" directory
2. Activate the plugin through the "Plugins" menu in WordPress
3. Sign-up for reCAPTCHA at https://www.google.com/recaptcha/
4. Drop "Site Key" and "Secret Key" in "Settings > No CAPTCHA reCAPTCHA" page
5. Add "No CAPTCHA" field into forms which you desire to have No CAPTCHA on via "Advanced Fields > No CAPTCHA" in Gravity Forms Form Editor
6. Set label for "No CAPTCHA" field in Form Editor

== Frequently Asked Questions ==

= Does this work for AJAX submitted forms? =

Yes.

= What versions of Gravity Forms/WordPress have you tested this with? =

* Gravity Forms: 1.8.19
* WordPress: 4.0.0, 4.0.1

== Screenshots ==

TODO: Screenshots

== Roadmap + To-do Items ==

* Push out to WordPress plugin communities for testing/code review
* Better documentation, Screenshots/etc.
* Addition of composer.json (maybe)
* Light/dark reCAPTCHA theme support (now only light supported)
* Hooks/filters for customizing things like error message, etc.
* Localization/internationalization support (ideally get someone's help who knows what they're doing)
* Perhaps Submit to WordPress Plugin Repository
* Add proper uninstaller (uninstall.php)

== Changelog ==

= 1.0.2 =
* Added theme support (light/dark)
* Fixed "Cannot use reCAPTCHA more than once on a page" bug (resolves issue #1)

= 1.0.1 =
* Fixed tabs->spaces formatting issue
* Added better URL validation/sanitization/filtering
* Fixed missing documentation issue

= 1.0 =
* Preliminary version developed based on Tom McFarlin's [WP Plugin Boilerplate](https://tommcfarlin.com/wordpress-plugin-boilerplate/) - [GitHub Project](https://github.com/tommcfarlin/WordPress-Plugin-Boilerplate)