<?php

function event_name_updater( $post_id ) {
  $my_post = array();
  $my_post['ID'] = $post_id;

  if ( get_post_type() == 'event' ) {
    if (strcmp('Upcoming Events', strval(get_field('page'))) == 0) {
      $my_post['post_title'] = get_field('page').' > '.get_field('title');
    }
    elseif (strcmp('Women in Data Conference', strval(get_field('page'))) == 0) {
      $my_post['post_title'] = get_field('page').' > '.get_field('title');
    }
    elseif (strcmp('Other', strval(get_field('page'))) == 0) {
      $my_post['post_title'] = get_field('page_title'). ' > '. get_field('title');
    }
  }

  // Update the post into the database
  wp_update_post( $my_post );
}

add_action('acf/save_post', 'event_name_updater', 20);
