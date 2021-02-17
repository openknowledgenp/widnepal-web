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
    'supports'           => array( 'thumbnail' )
  );

  register_post_type( 'event', $args );
}


if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_602c90f28e5f4',
	'title' => 'Event details',
	'fields' => array(
		array(
			'key' => 'field_602c9132b3fce',
			'label' => 'Title',
			'name' => 'title',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_602ca4756b809',
			'label' => 'Description',
			'name' => 'description',
			'type' => 'textarea',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
			'default_value' => '',
			'placeholder' => '',
			'maxlength' => '',
			'rows' => '',
			'new_lines' => '',
		),
		array(
			'key' => 'field_602ca4876b80a',
			'label' => 'Start time',
			'name' => 'start_time',
			'type' => 'date_time_picker',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
			'display_format' => 'F j, Y g:i a',
			'return_format' => 'F j, Y g:i a',
			'first_day' => 1,
		),
		array(
			'key' => 'field_602ca49d6b80b',
			'label' => 'End time',
			'name' => 'end_time',
			'type' => 'date_time_picker',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
			'display_format' => 'F j, Y g:i a',
			'return_format' => 'F j, Y g:i a',
			'first_day' => 1,
		),
		array(
			'key' => 'field_602ca4f78c666',
			'label' => 'Website Link',
			'name' => 'website_link',
			'type' => 'url',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
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
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_graphql' => 1,
	'graphql_field_name' => 'eventDetails',
));

acf_add_local_field_group(array(
	'key' => 'group_602a3a0965870',
	'title' => 'Website Link',
	'fields' => array(
		array(
			'key' => 'field_602a3a376624f',
			'label' => 'Website Link',
			'name' => 'website_link',
			'type' => 'url',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '100',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
			'default_value' => '',
			'placeholder' => '',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'attachment',
				'operator' => '==',
				'value' => 'image',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_graphql' => 1,
	'graphql_field_name' => 'websiteLink',
));

endif;
