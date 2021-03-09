<?php

add_action( 'init', 'custom_sidebar_items_cpt' );
function custom_sidebar_items_cpt() {
  $labels = array(
    'name'               => _x( 'Sidebar Items', 'post type general name', 'custom_sidebar_item-plugin' ),
    'singular_name'      => _x( 'sidebar item', 'post type singular name', 'custom_sidebar_item-plugin' ),
    'menu_name'          => _x( 'Sidebar Items', 'admin menu', 'custom_sidebar_item-plugin' ),
    'name_admin_bar'     => _x( 'sidebar item', 'add new on admin bar', 'custom_sidebar_item-plugin' ),
    'add_new'            => _x( 'Add New', 'sidebar item', 'custom_sidebar_item-plugin' ),
    'add_new_item'       => __( 'Add New sidebar item', 'custom_sidebar_item-plugin' ),
    'new_item'           => __( 'New sidebar item', 'custom_sidebar_item-plugin' ),
    'edit_item'          => __( 'Edit sidebar item', 'custom_sidebar_item-plugin' ),
    'view_item'          => __( 'View sidebar item', 'custom_sidebar_item-plugin' ),
    'all_items'          => __( 'All sidebar items', 'custom_sidebar_item-plugin' ),
    'search_items'       => __( 'Search sidebar items', 'custom_sidebar_item-plugin' ),
    'parent_item_colon'  => __( 'Parent sidebar items:', 'custom_sidebar_item-plugin' ),
    'not_found'          => __( 'No sidebar items found.', 'custom_sidebar_item-plugin' ),
    'not_found_in_trash' => __( 'No sidebar items found in Trash.', 'custom_sidebar_item-plugin' ),
  );

  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'custom_sidebar_item-plugin' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'menu_icon'         => 'dashicons-welcome-widgets-menus',
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'custom_sidebar_item' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'show_in_rest'       => true,
    'rest_base'          => 'custom_sidebar_items',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'thumbnail' ),
    'show_in_graphql' => true,
    'hierarchical' => true,
    'graphql_single_name' => 'custom_sidebar_item',
    'graphql_plural_name' => 'custom_sidebar_items',
  );

  register_post_type( 'custom_sidebar_item', $args );
}
