<?php
acf_add_local_field_group(array(
	'key' => 'group_602c90f28e5f4',
	'title' => 'Event details',
	'fields' => array(
		array(
			'key' => 'field_6035bfdcd81c9',
			'label' => 'Page',
			'name' => 'page',
			'type' => 'select',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
			'choices' => array(
				'Upcoming Events' => 'Upcoming Events',
				'Women in Data Conference' => 'Women in Data Conference',
				'Other' => 'Other',
			),
			'default_value' => false,
			'allow_null' => 0,
			'multiple' => 0,
			'ui' => 0,
			'return_format' => 'value',
			'ajax' => 0,
			'placeholder' => '',
		),
		array(
			'key' => 'field_6035c0a53ac58',
			'label' => 'Page Title',
			'name' => 'page_title',
			'type' => 'text',
			'instructions' => 'If your are adding to a page that already exists. Double check the Page Title that you insert.',
			'required' => 1,
			'conditional_logic' => array(
				array(
					array(
						'field' => 'field_6035bfdcd81c9',
						'operator' => '==',
						'value' => 'Other',
					),
				),
			),
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
		array(
			'key' => 'field_60366c3145a86',
			'label' => 'Is Pinned',
			'name' => 'is_pinned',
			'type' => 'true_false',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'show_in_graphql' => 1,
			'message' => '',
			'default_value' => 0,
			'ui' => 0,
			'ui_on_text' => '',
			'ui_off_text' => '',
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
