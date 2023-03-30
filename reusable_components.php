<?php

/**
 * Plugin Name: Reuseable Components
 */

// Exit if accessed directly.
if (! defined('ABSPATH')) {
	exit;
}

//Define absolute of plugin directiry path
if(!defined('RESUSE_DIRPATH'))
define('RESUSE_DIRPATH',plugin_dir_path(__FILE__));

function organon2_gutenberg_reusable_components_assets() {

wp_enqueue_script('gutenberg-organon2-reusable-block', plugins_url( '/build/index.js', __FILE__),
array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), '1.0', 'all');

}

add_action('enqueue_block_assets', 'organon2_gutenberg_reusable_components_assets');

/**
 * Block Initializer.
 */
require_once RESUSE_DIRPATH . 'components/two-column-block/two-column-block.php';
