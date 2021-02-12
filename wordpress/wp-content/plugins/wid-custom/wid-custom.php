<?php
/**
 * @package           WID custom  
 * @author            Open Knowledge Nepal
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       WID Custom plugin
 * Description:       Plugins for events/resource
 * Version:           0.1
 */

 // Add event post type
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
    'supports'           => array( 'title', 'author', 'thumbnail', 'excerpt', )
  );
 
  register_post_type( 'event', $args );
}

// Added event date field on event post type
if( function_exists('acf_add_local_field_group') ):
    acf_add_local_field_group(array(
      'key' => 'read_more',
      'title' => 'Blog link',
      'fields' => array(
        array(
          'key' => 'field_link',
          'label' => 'Read more',
          'name' => 'read_more',
          'type' => 'url',
          'instructions' => '',
          'required' => 1,
          'conditional_logic' => 0,
          'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'default_value' => '',
          'placeholder' => '',
        ),
      ),
      'location' => array(
        array(
          array(
            'param' => 'post_type',
            'operator' => '==',
            'value' => 'event',
          ),
        ),
      ),
      'menu_order' => 0,
      'position' => 'side',
      'style' => 'default',
      'label_placement' => 'top',
      'instruction_placement' => 'label',
      'hide_on_screen' => '',
      'active' => true,
      'description' => '',
    ));
endif;


if( function_exists('acf_add_local_field_group') ):
    acf_add_local_field_group(array(
      'key' => 'event_date',
      'title' => 'Event Date',
      'fields' => array(
        array(
          'key' => 'field_date',
          'label' => 'Event Date',
          'name' => 'event_date',
          'type' => 'date_picker',
          'required' => 1,
          'default_value' => '',
          'placeholder' => '',
          'prepend' => '',
          'append' => '',
          'formatting' => 'html',
          'maxlength' => '',
          'display_format' => 'd/m/Y',
          'return_format' => 'd/m/Y',
          'first_day' => 0,
          'required' => 0,
          'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'default_value' => '',
          'placeholder' => '',
        ),
      ),
      'location' => array(
        array(
          array(
            'param' => 'post_type',
            'operator' => '==',
            'value' => 'event',
          ),
        ),
      ),
      'menu_order' => 0,
      'position' => 'side',
      'style' => 'default',
      'label_placement' => 'top',
      'instruction_placement' => 'label',
      'hide_on_screen' => '',
      'active' => true,
      'description' => '',
    ));
endif;

// Custom post event type rest API
function rest_route_for_post_event( $route, $post ) {
    if ( $post->post_type === 'event' ) {
        $route = '/wp/v2/events/' . $post->ID;
    }
    return $route;
}
add_filter( 'rest_route_for_post', 'rest_route_for_post_event', 10, 2 );


// GRAPHQL API
add_filter( 'register_post_type_args', function( $args, $post_type ) {
	if ( 'event' === $post_type ) { 
		$args['show_in_graphql'] = true;
		$args['graphql_single_name'] = 'event';
		$args['graphql_plural_name'] = 'events';
	}
	return $args;
}, 10, 2 );

// Exposing event date on graphql
add_action( 'graphql_register_types', function() {
	register_graphql_field( 'event', 'event_date', [
		'type' => 'String',
		'description' => __( 'Date of event', 'event' ),
		'resolve' => function($post) {
        $wid_event_date = get_post_meta($post -> ID, 'event_date', true);
		    return $wid_event_date;
		}
	]);
} );

// Exposing event readmore field on graphql
add_action( 'graphql_register_types', function() {
	register_graphql_field( 'event', 'read_more', [
		'type' => 'String',
		'description' => __( 'Organizaiton url link', 'read_more' ),
		'resolve' => function($post) {
        $wid_event_date = get_post_meta($post -> ID, 'read_more', true);
		    return $wid_event_date;
		}
	]);
} );