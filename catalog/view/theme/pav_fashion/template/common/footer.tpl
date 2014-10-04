<?php 
	/******************************************************
	 * @package Pav Megamenu module for Opencart 1.5.x
	 * @version 1.1
	 * @author http://www.pavothemes.com
	 * @copyright	Copyright (C) Feb 2013 PavoThemes.com <@emai:pavothemes@gmail.com>.All rights reserved.
	 * @license		GNU General Public License version 2
	*******************************************************/

	require_once( DIR_TEMPLATE.$this->config->get('config_template')."/development/libs/framework.php" );
	$themeConfig = $this->config->get('themecontrol');
	$themeName =  $this->config->get('config_template');
	$helper = ThemeControlHelper::getInstance( $this->registry, $themeName );
	$LANGUAGE_ID = $this->config->get( 'config_language_id' );  
?>
</div></div></section>


<?php
 /**
  * Mass Bottom Position
  * $ospans allow overrides width of columns base on thiers indexs. format array( 1=> 3 )[value from 1->12]
 */

	 $modules = $helper->getModulesByPosition( 'mass_bottom' ); 
	 $ospans = array(1 => 9, 2 => 3);
	 
	 if( count($modules) ) { 
	 $cols =  count($modules)?count($modules):1;
	 $class = $helper->calculateSpans( $ospans, $cols );
?>
<section id="pav-mass-bottom">
 <div class="container">
  <div class="inner">
   <?php $j=1;foreach ($modules as $i =>  $module) {   ?>
    <?php if( $i++%$cols == 0 || count($modules)==1 ){  $j=1;?><div class="row"><?php } ?> 
    <div class="<?php echo $class[$j];?>"><?php echo $module; ?></div>
    <?php if( $i%$cols == 0 || $i==count($modules) ){ ?></div><?php } ?> 
   <?php  $j++;  } ?>
  </div>
 </div>
</section>

<?php } ?>



<section id="footer">
	<?php
	/**
	 * Footer Top Position
	 * $ospans allow overrides width of columns base on thiers indexs. format array( 1=> 3 )[value from 1->12]
	 */
	$modules = $helper->getModulesByPosition( 'footer_top' ); 
	$ospans = array(   );
	
	if( count($modules) ){
	$cols = isset($themeConfig['block_footer_top'])&& $themeConfig['block_footer_top']?(int)$themeConfig['block_footer_top']:1;
	//if( $cols < count($modules) ){ $cols = count($modules); }
	$class = $helper->calculateSpans( $ospans, $cols );
	?>
	<div class="footer-top">
		<div class="container"><div class="inner">
			<?php $j=1;foreach ($modules as $i =>  $module) {   ?>
				<?php if( $i++%$cols == 0 || count($modules)==1 ){  $j=1;?><div class="row"><?php } ?>	
				<div class="<?php echo $class[$j];?>  col-md-6"><?php echo $module; ?></div>
				<?php if( $i%$cols == 0 || $i==count($modules) ){ ?></div><?php } ?>	
			<?php  $j++;  } ?>
		</div></div>
	</div>
	<?php }   ?>
	 
	<?php
	/**
	 * Footer Center Position
	 * $ospans allow overrides width of columns base on thiers indexs. format array( 1=> 3 )[value from 1->12]
	 */
	$modules = $helper->getModulesByPosition( 'footer_center' ); 
	$ospans = array();
	
	if( count($modules) ){
	$cols = isset($themeConfig['block_footer_center'])&& $themeConfig['block_footer_center']?(int)$themeConfig['block_footer_center']:count($modules);
	$class = $helper->calculateSpans( $ospans, $cols );
	?>
	<div class="footer-center">
		<div class="container">
		<?php $j=1;foreach ($modules as $i =>  $module) {  ?>
				<?php if( $i++%$cols == 0 || count($modules)==1 ){  $j=1;?><div class="row"><?php } ?>	
				<div class="<?php echo $class[$j];?>"><?php echo $module; ?></div>
				<?php if( $i%$cols == 0 || $i==count($modules) ){ ?></div><?php } ?>	
		<?php  $j++;  } ?>	
		</div>
	</div>
	<?php } elseif((isset($themeConfig['enable_footer_center'])&&$themeConfig['enable_footer_center'])) { ?>
	
	<div class="footer-center">
		<div class="container"><div>
			<!--
			<div class="row footer-description">
					<?php if( isset($themeConfig['footer_logo_data'][$LANGUAGE_ID]) ) { ?>
					<section class="col-lg-3 col-md-3 col-sm-6 col-xs-12">								
						<?php echo html_entity_decode( $themeConfig['footer_logo_data'][$LANGUAGE_ID], ENT_QUOTES, 'UTF-8' ); ?>
					</section>
					<?php } ?>
					
					<?php if( isset($themeConfig['about_data'][$LANGUAGE_ID]) ) { ?>
					<section class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
						<div class="box about">	
							<div class="box-heading"><span><?php echo $this->language->get('text_about_us'); ?></span></div>							
							<?php echo html_entity_decode( $themeConfig['about_data'][$LANGUAGE_ID], ENT_QUOTES, 'UTF-8' ); ?>
						</div>	
					</section>
					<?php } ?>
					
					
					<?php if( isset($themeConfig['social_data'][$LANGUAGE_ID]) ) { ?>
					<section class="col-lg-3 col-md-3 col-sm-6 col-xs-12">		
						<div class="box social">	
							<div class="box-heading"><span><?php echo $this->language->get('text_social'); ?></span></div>								
							<?php echo html_entity_decode( $themeConfig['social_data'][$LANGUAGE_ID], ENT_QUOTES, 'UTF-8' ); ?>
						</div>
					</section>
					<?php } ?>
					
			</div>
			-->
			<div class="row">
				
				<div class="column col-xs-12 col-sm-6 col-lg-3 col-md-3">
					<div class="box">
						<div class="box-heading"><span><?php echo $text_footer_products; ?></span></div>
						<ul class="list">
						  <li><a href="<?php echo $footer_category_clothes; ?>"><?php echo $text_footer_category_clothes; ?></a></li>
						  <li><a href="<?php echo $footer_category_bags; ?>"><?php echo $text_footer_category_bags; ?></a></li>
						  <li><a href="<?php echo $footer_category_shoes; ?>"><?php echo $text_footer_category_shoes; ?></a></li>
						  <li><a href="<?php echo $footer_category_jewelry; ?>"><?php echo $text_footer_category_jewelry; ?></a></li>
						  <li><a href="<?php echo $footer_category_accessories; ?>"><?php echo $text_footer_category_accessories; ?></a></li>
						</ul>
					</div>
				</div>
				
				  
				<div class="column col-xs-12 col-sm-6 col-lg-3 col-md-3">
					<div class="box">
						<div class="box-heading"><span><?php echo $text_service; ?></span></div>
						<ul class="list">
						  <li><a href="<?php echo $contact; ?>"><?php echo $text_contact; ?></a></li>
						  <li><a href="<?php echo $return; ?>"><?php echo $text_return; ?></a></li>
						  <li><a href="<?php echo $sitemap; ?>"><?php echo $text_sitemap; ?></a></li>
						   <li><a href="<?php echo $manufacturer; ?>"><?php echo $text_manufacturer; ?></a></li>
						  <li><a href="<?php echo $voucher; ?>"><?php echo $text_voucher; ?></a></li>
						</ul>
					</div>
				</div>
				  
				<?php if ($informations) { ?>
					<div class="column col-xs-12 col-sm-6 col-lg-3 col-md-3">
						<div class="box info">
							<div class="box-heading"><span><?php echo $text_information; ?></span></div>
							<div class="box-content">
								<ul class="list">
								  <?php foreach ($informations as $information) { ?>
								  <li><a href="<?php echo $information['href']; ?>"><?php echo $information['title']; ?></a></li>
								  <?php } ?>
								</ul>
							</div>					
						</div>
					</div>
				  <?php } ?>
				  
				<div class="column col-xs-12 col-sm-6 col-lg-3 col-md-3">
					<div class="box">
						<div class="box-heading">
							<span><?php echo $text_newsletter; ?></span>
						</div>		
						<div class="block_content nl clearfix">
							<p><?php echo $text_newsletter2; ?></p>
							<form id="formNewLestter" method="post">						
								<input type="text" class="inputNew" size="18" name="email" />
								<input type="submit" class="button" value="Изпрати" / 
							</form>
						</div>
					</div>
				</div>

			 </div>  </div>
		</div>
	</div>
	<?php  } ?>	
	<?php
	/**
	 * Footer Bottom
	 * $ospans allow overrides width of columns base on thiers indexs. format array( 1=> 3 )[value from 1->12]
	 */
	$modules = $helper->getModulesByPosition( 'footer_bottom' ); 
	$ospans = array();
	
	if( count($modules) ){
	$cols = isset($themeConfig['block_footer_bottom'])&& $themeConfig['block_footer_bottom']?(int)$themeConfig['block_footer_bottom']:count($modules);	
	$class = $helper->calculateSpans( $ospans, $cols );
	?>
	<div class="footer-bottom">
		<div class="container">
		<?php $j=1;foreach ($modules as $i =>  $module) {  ?>
				<?php if( $i++%$cols == 0 || count($modules)==1 ){  $j=1;?><div class="row"><?php } ?>	
				<div class="<?php echo $class[$j];?>"><?php echo $module; ?></div>
				<?php if( $i%$cols == 0 || $i==count($modules) ){ ?></div><?php } ?>	
		<?php  $j++;  } ?>	
		</div>
	</div>
	<?php } ?>

	<!--
	OpenCart is open source software and you are free to remove the powered by OpenCart if you want, but its generally accepted practise to make a small donation.
	Please donate via PayPal to donate@opencart.com
	//-->
	<div id="powered">
		<div class="container"><div class="inner clearfix">
			<div class="copyright">
				<?php if( isset($themeConfig['enable_custom_copyright']) && $themeConfig['enable_custom_copyright'] ) { ?>
					<?php echo $themeConfig['copyright'];?>
				<?php } else { ?>
					<?php echo $powered; ?>. 
				<?php } ?>
				Design By <a href="http://www.pavothemes.com" title="pavothemes - opencart themes clubs">PavoThemes</a>
			</div>
			<?php if( isset($themeConfig['widget_paypal_data'][$LANGUAGE_ID]) ) {?>
				<div class="paypal pull-right">
					<?php echo html_entity_decode( $themeConfig['widget_paypal_data'][$LANGUAGE_ID], ENT_QUOTES, 'UTF-8' ); ?>
			</div>
			 <?php } ?>
		</div></div>
	</div>
</section>

<!--
OpenCart is open source software and you are free to remove the powered by OpenCart if you want, but its generally accepted practise to make a small donation.
Please donate via PayPal to donate@opencart.com
//-->
<?php if( isset($themeConfig['enable_paneltool']) && $themeConfig['enable_paneltool'] ){  ?>
	<?php  echo $helper->renderAddon( 'panel' );?>
<?php } ?>
</section> 
</body></html>