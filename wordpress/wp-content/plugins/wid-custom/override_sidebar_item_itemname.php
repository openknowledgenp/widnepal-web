<?php

function custom_sidebar_item_name_updater( $post_id ) {
  $my_post = array();
  $my_post['ID'] = $post_id;

  if ( get_post_type() == 'custom_sidebar_item' ) {
    if (strcmp('Quote', strval(get_field('content_type'))) == 0) {
      $my_post['post_title'] = get_field('content_type').' > '.get_field('quote');
    }
    if (strcmp('Image', strval(get_field('content_type'))) == 0) {
      $my_post['post_title'] = get_field('content_type');
    }
    if (strcmp('Fact', strval(get_field('content_type'))) == 0) {
      $my_post['post_title'] = get_field('content_type').' > '.get_field('fact_value').' '.get_field('fact_description');
    }
  }

  // Update the post into the database
  wp_update_post( $my_post );
}

add_action('acf/save_post', 'custom_sidebar_item_name_updater', 20);
