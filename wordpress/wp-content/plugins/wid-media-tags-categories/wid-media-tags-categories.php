<?php
/**
 * @package           WID custom tags and categories
 * @author            Open Knowledge Nepal
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       WID tags and categories plugin
 * Description:       Plugins for events/resource
 * Version:           0.1
 */

// apply categories to attachments

function add_media_cats() {

  register_taxonomy_for_object_type(

    'category',

    'attachment'

  );

}

add_action( 'init' , 'add_media_cats' );

// apply tags to attachments

function add_media_tags() {

  register_taxonomy_for_object_type(

    'post_tag',

    'attachment'

  );

}

add_action( 'init' , 'add_media_tags' );
