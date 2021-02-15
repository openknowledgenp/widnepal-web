<?php
//function to add custom media field
function custom_media_add_url_custom_field( $form_fields, $post ) {
    $field_value = get_post_meta( $post -> ID, 'website_link', true );

    $form_fields['website_link'] = array(
        'value' => $field_value ? $field_value : '',
        'label' => __( 'Website link' ),
        'helps' => __( 'Enter website link you want to go when picture is clicked. Don\'t forget to have "http://" in the beginging of the url' ),
        'input'  => 'text',
    );

    return $form_fields;
}
add_filter( 'attachment_fields_to_edit', 'custom_media_add_url_custom_field', null, 2 );

//save your custom media field
function custom_url_save_attachment( $attachment_id ) {
    if ( isset( $_REQUEST['attachments'][ $attachment_id ]['website_link'] ) ) {
        $website_link = $_REQUEST['attachments'][ $attachment_id ]['website_link'];
        update_post_meta( $attachment_id, 'website_link', $website_link );
    }
}
add_action( 'edit_attachment', 'custom_url_save_attachment' );
