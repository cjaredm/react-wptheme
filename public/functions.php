<?php
function add_editor_styles()
{
  add_editor_style(get_parent_theme_file_path() . 'styles.css');
}
add_action('admin_init', 'add_editor_styles');

/**
 * Admin Scripts
 */
function custom_admin_enqueue()
{
  wp_enqueue_style('custom-admin', get_template_directory_uri() . '/styles/admin.css', [], '1.0');
}

add_action('admin_enqueue_scripts', 'custom_admin_enqueue', 99);


// Trying to figure out how to get custom colors for custom blocks
// add_theme_support('editor-color-palette', array(
//   array(
//     'name'  => __('Light gray', 'genesis-sample'),
//     'slug'  => 'light-gray',
//     'color'  => '#f5f5f5',
//   ),
//   array(
//     'name'  => __('Medium gray', 'genesis-sample'),
//     'slug'  => 'medium-gray',
//     'color' => '#999',
//   ),
//   array(
//     'name'  => __('Dark gray', 'genesis-sample'),
//     'slug'  => 'dark-gray',
//     'color' => '#333',
//   ),
// ));
