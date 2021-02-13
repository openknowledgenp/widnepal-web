<?php
/**
 * @package           WID tag and category
 * @author            Open Knowledge Nepal
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       WID tag and category plugin for media
 * Description:       Assign tag and category to media
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
