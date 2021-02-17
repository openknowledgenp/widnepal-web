<?php
/**
 * @package           WID customs
 * @author            Open Knowledge Nepal
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       WID Custom plugin
 * Description:       Plugin for for media taxonomy, events form and url field for images
 * Version:           0.1
 */

// Allow tags and Category in media
require_once( 'media_taxonomy.php' );

// Add event post type
require_once( 'event_menuitem.php' );

// add local fields
if( function_exists('acf_add_local_field_group') ):
  require_once( 'event_form.php' );
  require_once( 'image_website_link.php' );
endif;
