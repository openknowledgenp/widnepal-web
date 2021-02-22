<?php

add_action( 'init', 'abouts_cpt' );
function abouts_cpt() {
  $labels = array(
    'name'               => _x( 'About', 'post type general name', 'about-plugin' ),
    'singular_name'      => _x( 'about', 'post type singular name', 'about-plugin' ),
    'menu_name'          => _x( 'About', 'admin menu', 'about-plugin' ),
    'name_admin_bar'     => _x( 'about', 'add new on admin bar', 'about-plugin' ),
    'add_new'            => _x( 'Add New', 'about', 'about-plugin' ),
    'add_new_item'       => __( 'Add New about', 'about-plugin' ),
    'new_item'           => __( 'New about', 'about-plugin' ),
    'edit_item'          => __( 'Edit about', 'about-plugin' ),
    'view_item'          => __( 'View about', 'about-plugin' ),
    'all_items'          => __( 'All abouts', 'about-plugin' ),
    'search_items'       => __( 'Search abouts', 'about-plugin' ),
    'parent_item_colon'  => __( 'Parent abouts:', 'about-plugin' ),
    'not_found'          => __( 'No abouts found.', 'about-plugin' ),
    'not_found_in_trash' => __( 'No abouts found in Trash.', 'about-plugin' ),
  );

  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'about-plugin' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'menu_icon'         => 'dashicons-info',
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'about' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'show_in_rest'       => true,
    'rest_base'          => 'abouts',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'thumbnail' ),
    'show_in_graphql' => true,
    'hierarchical' => true,
    'graphql_single_name' => 'about',
    'graphql_plural_name' => 'abouts',
  );

  register_post_type( 'about', $args );
}
