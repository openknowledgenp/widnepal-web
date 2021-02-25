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

//  function debug_to_console($data) {
//     $output = $data;
//     if (is_array($output))
//         $output = implode(',', $output);
//
//     echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
// }

// Remove some default menu items
require_once('remove_menu_items.php');
// Allow tags and Category in media
// require_once( 'media_taxonomy.php' );
// Add homepage items
require_once( 'add_homepage_menuitem.php' );
require_once( 'override_homepage_itemname.php' );
// Add homepage items
require_once( 'add_about_us_menuitem.php' );
require_once( 'override_about_us_itemname.php' );
// Add projects post type
require_once( 'add_project_menuitem.php' );
// Add resource post type
require_once( 'add_resource_menuitem.php' );
// Add event post type
require_once( 'add_event_menuitem.php' );
// Add blogs post type
require_once( 'add_blog_menuitem.php' );
// add local fields
if( function_exists('acf_add_local_field_group') ):
  require_once( 'form_homepage_item.php' );
  require_once( 'form_event.php' );
  require_once( 'form_blog.php' );
  require_once( 'form_project.php' );
  require_once( 'form_resource.php' );
  require_once( 'form_about_us.php' );
  require_once( 'form_user_additional_info.php' );
  // If "media" has image uploaded, make available the "website url field"
  // require_once( 'image_website_link.php' );
endif;
