<?php

add_action( 'init', 'blogs_cpt' );
function blogs_cpt() {
  $labels = array(
    'name'               => _x( 'Blogs', 'post type general name', 'blog-plugin' ),
    'singular_name'      => _x( 'blog', 'post type singular name', 'blog-plugin' ),
    'menu_name'          => _x( 'Blogs', 'admin menu', 'blog-plugin' ),
    'name_admin_bar'     => _x( 'blog', 'add new on admin bar', 'blog-plugin' ),
    'add_new'            => _x( 'Add New', 'blog', 'blog-plugin' ),
    'add_new_item'       => __( 'Add New blog', 'blog-plugin' ),
    'new_item'           => __( 'New blog', 'blog-plugin' ),
    'edit_item'          => __( 'Edit blog', 'blog-plugin' ),
    'view_item'          => __( 'View blog', 'blog-plugin' ),
    'all_items'          => __( 'All blogs', 'blog-plugin' ),
    'search_items'       => __( 'Search blogs', 'blog-plugin' ),
    'parent_item_colon'  => __( 'Parent blogs:', 'blog-plugin' ),
    'not_found'          => __( 'No blogs found.', 'blog-plugin' ),
    'not_found_in_trash' => __( 'No blogs found in Trash.', 'blog-plugin' ),
  );

  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'blog-plugin' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'menu_icon'         => 'dashicons-welcome-write-blog',
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'blog' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'show_in_rest'       => true,
    'rest_base'          => 'blogs',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'thumbnail', 'title' ),
    'show_in_graphql' => true,
    'hierarchical' => true,
    'graphql_single_name' => 'blog',
    'graphql_plural_name' => 'blogs',
  );

  register_post_type( 'blog', $args );
}
