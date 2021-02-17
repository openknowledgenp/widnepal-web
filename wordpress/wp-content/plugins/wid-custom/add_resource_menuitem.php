<?php

add_action( 'init', 'resources_cpt' );
function resources_cpt() {
  $labels = array(
    'name'               => _x( 'Resources', 'post type general name', 'resource-plugin' ),
    'singular_name'      => _x( 'resource', 'post type singular name', 'resource-plugin' ),
    'menu_name'          => _x( 'Resources', 'admin menu', 'resource-plugin' ),
    'name_admin_bar'     => _x( 'resource', 'add new on admin bar', 'resource-plugin' ),
    'add_new'            => _x( 'Add New', 'resource', 'resource-plugin' ),
    'add_new_item'       => __( 'Add New resource', 'resource-plugin' ),
    'new_item'           => __( 'New resource', 'resource-plugin' ),
    'edit_item'          => __( 'Edit resource', 'resource-plugin' ),
    'view_item'          => __( 'View resource', 'resource-plugin' ),
    'all_items'          => __( 'All resources', 'resource-plugin' ),
    'search_items'       => __( 'Search resources', 'resource-plugin' ),
    'parent_item_colon'  => __( 'Parent resources:', 'resource-plugin' ),
    'not_found'          => __( 'No resources found.', 'resource-plugin' ),
    'not_found_in_trash' => __( 'No resources found in Trash.', 'resource-plugin' ),
  );

  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'resource-plugin' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'menu_icon'         => 'dashicons-screenoptions',
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'resource' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'show_in_rest'       => true,
    'rest_base'          => 'resources',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'thumbnail', 'title' ),
    'show_in_graphql' => true,
    'hierarchical' => true,
    'graphql_single_name' => 'resource',
    'graphql_plural_name' => 'resources',
  );

  register_post_type( 'resource', $args );
}
