<?php
//Payment page links
$_['text_amazon_checkout'] = '<a onclick="window.open(\'http://go.amazonservices.com/UKCBASPOpenCart.html\');"><img src="view/image/payment/amazon.png" alt="Amazon Payments" title="Amazon Payments" style="border: 1px solid #EEEEEE;" /></a>';
$_['text_amazon_join'] = '<a href="http://go.amazonservices.com/UKCBASPOpenCart.html" title="Click here to join Amazon Payments">Кликнете тук, за да създадете своя акаунт в Амазон Плащания</a>';

//Headings
$_['heading_title']               = 'Амазон Плащания';
$_['text_home']                   = 'Начало';
$_['text_payment']                = 'Плащане';

//Text
$_['text_cron_job_url']           = "Защитен URL:";
$_['help_cron_job_url']           = "Например :";
$_['text_cron_job_token']         = "Секретен ключ";
$_['help_cron_job_token']         = "Направете го дълъг с цифри и букви за по-голяма сигурност";
$_['text_access_key']             = 'Ключ за достъп :';
$_['text_access_secret']          = 'Секретен код :';
$_['text_merchant_id']            = 'Търговски № :';
$_['text_marketplace']            = 'Пазари :';
$_['text_germany']                = 'Германия';
$_['text_uk']                     = 'Обединено Кралство';
$_['text_checkout_mode']          = 'Режим на плащане :';
$_['text_geo_zone']               = 'Географска зона :';
$_['text_status']                 = 'Статус :';
$_['text_live']                   = 'Live';
$_['text_sandbox']                = 'Sandbox';
$_['text_sort_order']             = 'Ред :';
$_['text_minimum_total']          = 'Минимална поръчка :';
$_['text_all_geo_zones']          = 'Всички географски зони';
$_['text_status_enabled']         = 'Разрашен';
$_['text_status_disabled']        = 'Забранен';
$_['text_default_order_status']   = 'Очакваща:';
$_['text_ready_order_status']     = 'Статус на доставка :';
$_['text_canceled_order_status']  = 'Статус на анулирана поръчка :';
$_['text_shipped_order_status']   = 'Статус на реда на доставка :';
$_['text_last_cron_job_run']      = "Последно работно място по време на изпълнение :";
$_['text_allowed_ips']            = "Разрешени IP адреси";
$_['text_add']                    = "Добави";
$_['text_upload_success']         = 'Файла е качен успешно';
$_['help_adjustment']             = 'Удебелените полета и най-малко едно "-adj" поле е задължително';
$_['help_allowed_ips']            = "Оставете празно, ако искате всички да видят бутона на касата";

// Buttons
$_['button_cancel']               = 'Откажи';
$_['button_save']                 = 'Запамети';

// Errors
$_['error_permissions']           = 'Внимание: нямате права да променяте модула Амазон Плащания !';
$_['error_empty_access_secret']   = 'Внимание: Секретния код е задължителен !';
$_['error_empty_access_key']      = 'Внимание: Секретния ключ е задължителен !';
$_['error_empty_merchant_id']     = 'Внимание: Търговския № е задължителен !';
$_['error_curreny']               = 'Внимание: Вашият магазин, трябва да има инсталирана % валута !';
$_['error_upload']                = 'Внимание: Неуспешно качване !';

// Checkout button settings
$_['text_button_settings']        = 'Настройки на бутоните за плащане';
$_['text_colour']                 = 'Цвят :';
$_['text_orange']                 = 'Оранжев';
$_['text_tan']                    = 'Светлокафяв';
$_['text_white']                  = 'Бял';
$_['text_light']                  = 'Светъл';
$_['text_dark']                   = 'Тъмен';
$_['text_size']                   = 'Размер :';
$_['text_medium']                 = 'Среден';
$_['text_large']                  = 'Голям';
$_['text_x_large']                = 'Много голям';
$_['text_background']             = 'Фон :';
$_['text_download']               = '<a href="%s">Изтегляне</a> template file';

// Messages
$_['text_success']                = 'Модула Амазон Плащания е актуализиран';

// Order Info
$_['text_amazon_details']         = 'Амазон Детайли';
$_['text_amazon_order_id']        = 'Амазон Поръчка № :';
$_['text_upload']                 = 'Качване';
$_['text_upload_template']        = 'Качете попълнения шаблон, като кликнете върху бутона по-долу. Уверете се, че той е записан като файл на табулатори.';
$_['tab_order_adjustment']        = 'Корекция на поръчка';

//Table columns
$_['column_submission_id']        = 'Подаване на №';
$_['column_status']               = 'Статус';
$_['column_text']                 = 'Отговор';
$_['column_amazon_order_item_code'] = 'Код на продукта в Амазон';
?>