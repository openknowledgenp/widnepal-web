<?php

add_action( 'init', 'events_cpt' );
function events_cpt() {
  $labels = array(
    'name'               => _x( 'Events', 'post type general name', 'event-plugin' ),
    'singular_name'      => _x( 'event', 'post type singular name', 'event-plugin' ),
    'menu_name'          => _x( 'Events', 'admin menu', 'event-plugin' ),
    'name_admin_bar'     => _x( 'event', 'add new on admin bar', 'event-plugin' ),
    'add_new'            => _x( 'Add New', 'event', 'event-plugin' ),
    'add_new_item'       => __( 'Add New event', 'event-plugin' ),
    'new_item'           => __( 'New event', 'event-plugin' ),
    'edit_item'          => __( 'Edit event', 'event-plugin' ),
    'view_item'          => __( 'View event', 'event-plugin' ),
    'all_items'          => __( 'All events', 'event-plugin' ),
    'search_items'       => __( 'Search events', 'event-plugin' ),
    'parent_item_colon'  => __( 'Parent events:', 'event-plugin' ),
    'not_found'          => __( 'No events found.', 'event-plugin' ),
    'not_found_in_trash' => __( 'No events found in Trash.', 'event-plugin' )
  );

  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'event-plugin' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'menu_icon'         => 'dashicons-calendar-alt',
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'event' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'show_in_rest'       => true,
    'rest_base'          => 'events',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'thumbnail' )
  );

  register_post_type( 'event', $args );
}
