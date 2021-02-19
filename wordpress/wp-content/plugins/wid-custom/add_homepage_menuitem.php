<?php

add_action( 'init', 'homepageitems_cpt' );
function homepageitems_cpt() {
  $labels = array(
    'name'               => _x( 'Homepage Items', 'post type general name', 'homepageitem-plugin' ),
    'singular_name'      => _x( 'homepageitem', 'post type singular name', 'homepageitem-plugin' ),
    'menu_name'          => _x( 'Homepage Items', 'admin menu', 'homepageitem-plugin' ),
    'name_admin_bar'     => _x( 'homepageitem', 'add new on admin bar', 'homepageitem-plugin' ),
    'add_new'            => _x( 'Add New', 'homepageitem', 'homepageitem-plugin' ),
    'add_new_item'       => __( 'Add New homepageitem', 'homepageitem-plugin' ),
    'new_item'           => __( 'New homepageitem', 'homepageitem-plugin' ),
    'edit_item'          => __( 'Edit homepageitem', 'homepageitem-plugin' ),
    'view_item'          => __( 'View homepageitem', 'homepageitem-plugin' ),
    'all_items'          => __( 'All homepageitems', 'homepageitem-plugin' ),
    'search_items'       => __( 'Search homepageitems', 'homepageitem-plugin' ),
    'parent_item_colon'  => __( 'Parent homepageitems:', 'homepageitem-plugin' ),
    'not_found'          => __( 'No homepageitems found.', 'homepageitem-plugin' ),
    'not_found_in_trash' => __( 'No homepageitems found in Trash.', 'homepageitem-plugin' ),
  );

  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'homepageitem-plugin' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'menu_icon'         => 'dashicons-admin-home',
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'homepageitem' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'show_in_rest'       => true,
    'rest_base'          => 'homepageitems',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'thumbnail' ),
    'show_in_graphql' => true,
    'hierarchical' => true,
    'graphql_single_name' => 'homepageitem',
    'graphql_plural_name' => 'homepageitems',
  );

  register_post_type( 'homepageitem', $args );
}
