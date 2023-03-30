<?php

/*
    Name : Two Column Block
    Description : Two Column Block for testing purpose
    Developed By : StartDesigns
*/

if ( ! defined( 'ABSPATH' ) ) { exit; }



function gutenbergBlocksAssetsTwoColumn() {
	
    // Enqueue the script in the editor
    register_block_type('rc/two-column-block', array(
        'editor_script' => 'gutenberg-organon-reusable-twocolumnblock',
    ));

}

add_action('init', 'gutenbergBlocksAssetsTwoColumn');
add_action('enqueue_block_assets', 'gutenbergBlocksAssetsTwoColumn');

function twoColumnBlockGutenbergAssets() {
    wp_enqueue_style('two-column-block-css', plugins_url('/css/two-column-block.css', __FILE__));
}

function twoColumnBlockGutenbergAdminAssets() {
    wp_enqueue_style('two-column-block-admin-css', plugins_url('/css/two-column-block.css', __FILE__));
}
add_action('wp_enqueue_scripts', 'twoColumnBlockGutenbergAssets');
add_action('admin_enqueue_scripts', 'twoColumnBlockGutenbergAdminAssets');
