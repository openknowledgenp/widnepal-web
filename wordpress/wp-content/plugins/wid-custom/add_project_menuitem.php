<?php

add_action( 'init', 'projects_cpt' );
function projects_cpt() {
  $labels = array(
    'name'               => _x( 'Projects', 'post type general name', 'project-plugin' ),
    'singular_name'      => _x( 'project', 'post type singular name', 'project-plugin' ),
    'menu_name'          => _x( 'Projects', 'admin menu', 'project-plugin' ),
    'name_admin_bar'     => _x( 'project', 'add new on admin bar', 'project-plugin' ),
    'add_new'            => _x( 'Add New', 'project', 'project-plugin' ),
    'add_new_item'       => __( 'Add New project', 'project-plugin' ),
    'new_item'           => __( 'New project', 'project-plugin' ),
    'edit_item'          => __( 'Edit project', 'project-plugin' ),
    'view_item'          => __( 'View project', 'project-plugin' ),
    'all_items'          => __( 'All projects', 'project-plugin' ),
    'search_items'       => __( 'Search projects', 'project-plugin' ),
    'parent_item_colon'  => __( 'Parent projects:', 'project-plugin' ),
    'not_found'          => __( 'No projects found.', 'project-plugin' ),
    'not_found_in_trash' => __( 'No projects found in Trash.', 'project-plugin' ),
  );

  $args = array(
    'labels'             => $labels,
    'description'        => __( 'Description.', 'project-plugin' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'menu_icon'         => 'dashicons-pressthis',
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'project' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'show_in_rest'       => true,
    'rest_base'          => 'projects',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'thumbnail', 'title' ),
    'show_in_graphql' => true,
    'hierarchical' => true,
    'graphql_single_name' => 'project',
    'graphql_plural_name' => 'projects',
  );

  register_post_type( 'project', $args );
}
