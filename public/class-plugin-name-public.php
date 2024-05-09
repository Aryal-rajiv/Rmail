<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Plugin_Name
 * @subpackage Plugin_Name/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Rmail
 * @subpackage Plugin_Name/public
 * @author     <aryalrajiv class="com np"></aryalrajiv>
 */
class Rmail_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $Rmail    The ID of this plugin.
	 */
	private $Rmail;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $Rmail       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $Rmail, $version ) {

		$this->plugin_name = $Rmail;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
}
	class SimpleContactForm{

       public function Contact_construct(){
          add_action('init',array($this,'Create_custom_post_type'));

	   }

	   public function Create_custom_post_type(){
           echo " <script> alert('Itloaded')</script>";
	   }



	}

	new SimpleContactForm;



