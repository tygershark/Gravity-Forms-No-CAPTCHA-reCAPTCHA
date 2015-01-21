=== Gravity Forms No CAPTCHA reCAPTCHA ===
Contributors: folkhack
Tags: CAPTCHA, Gravity Forms, No CAPTCHA, reCAPTCHA
Requires at least: 4.0.0
Tested up to: 4.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Stable tag: trunk

Adds a No CAPTCHA reCAPTCHA to field Gravity Forms

[Official GitHub Repository](https://github.com/folkhack/Gravity-Forms-No-CAPTCHA-reCAPTCHA)

== Description ==

Adds a No CAPTCHA reCAPTCHA to field type Gravity Forms form builder with light/dark theme options. Forms with No CAPTCHA reCAPTCHA will then validate the field before successful submission.

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

= What versions of Gravity Forms/WordPress have you formally tested this with? =

* Gravity Forms: 1.8.19
* WordPress: 4.0.0, 4.0.1, 4.1.0

= Can I have multiple No CAPTCHA reCAPTCHA fields on one page? =

Normally this situation comes up if you have more than one Gravity Form with CAPTCHA on one page. As of version 1.0.2 this is supported.

== Screenshots ==

1. Plugin in action on contact form
2. Plugin administrative settings page with "Site" and "Secret" key settings
3. Adding the No CAPTCHA field to the Gravity Forms form builder

== Changelog ==

= 1.0.3 =
* Updated README.txt documentation
* Added README.txt documentation to README.md and CHANGELOG.md
* Added icon, banner, and screenshots
* Re-organized assets into "trunk" and "assets" directories
* Prepping to submit to WordPress Plugin Directory

= 1.0.2 =
* Added theme support (light/dark)
* Fixed "Cannot use reCAPTCHA more than once on a page" bug (resolves issue #1)

= 1.0.1 =
* Fixed tabs->spaces formatting issue
* Added better URL validation/sanitization/filtering
* Fixed missing documentation issue

= 1.0 =
* Preliminary version developed based on Tom McFarlin's [WP Plugin Boilerplate](https://tommcfarlin.com/wordpress-plugin-boilerplate/) - [GitHub Project](https://github.com/tommcfarlin/WordPress-Plugin-Boilerplate)