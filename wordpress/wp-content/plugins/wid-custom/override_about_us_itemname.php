<?php

function about_us_name_updater( $post_id ) {
  $my_post = array();
  $my_post['ID'] = $post_id;

  if ( get_post_type() == 'about' ) {
    if (strcmp('Learn About Us', strval(get_field('page'))) !== 0) {
      $my_post['post_title'] = get_field('page').' > '.get_field('insert_option');
    }
    else {
      $my_post['post_title'] = get_field('page');
    }
  }



  // Update the post into the database
  wp_update_post( $my_post );
}

add_action('acf/save_post', 'about_us_name_updater', 20);
