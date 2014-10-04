<?php if( isset($widget_name)){
?>
<div class="menu-title"><?php echo $widget_name;?></div>
<?php
}?>
<div class="widget-collections">
	 <div class="widget-inner">
        <ul class="sub-menu-collections">
            <li>
                <ul>
                    <li><img src="http://vandona.com/design/image/data/banner/img-baner1-378x250.jpg" alt="collection1" /></li>
                    <li><img src="http://vandona.com/design/image/data/banner/img-baner1-378x250.jpg" alt="collection2" /></li>
                </ul>
            </li>


            <li>
                <ul>
                    <li><img src="http://vandona.com/design/image/data/banner/img-baner1-378x250.jpg" alt="collection3" /></li>
                    <li><img src="http://vandona.com/design/image/data/banner/img-baner1-378x250.jpg" alt="collection4" /></li>
                </ul>
            </li>


            <li>
                <ul>
                    <li><img src="http://vandona.com/design/image/data/banner/img-baner1-378x250.jpg" alt="collection5" /></li>
                    <li><img src="http://vandona.com/design/image/data/banner/img-baner1-378x250.jpg" alt="collection6" /></li>
                </ul>
            </li>
        </ul>        <div class="cart"><input type="button" value="<?php echo $this->language->get('button_cart'); ?>" onclick="addToCart('<?php echo $product['product_id']; ?>');" class="button" /></div>
      </div>
</div>
