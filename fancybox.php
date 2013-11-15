<?php
/**
 * Fancybox
 *
 * Подключение библотеки Fancybox
 *
 * @version 1.00a
 *
 * @copyright 2010, ООО "Два слона", http://dvaslona.ru/
 * @license http://www.gnu.org/licenses/gpl.txt  GPL License 3
 * @author Olex <olex.goooogle@gmail.com>
 *
 * Данная программа является свободным программным обеспечением. Вы
 * вправе распространять ее и/или модифицировать в соответствии с
 * условиями версии 3 либо (по вашему выбору) с условиями более поздней
 * версии Стандартной Общественной Лицензии GNU, опубликованной Free
 * Software Foundation.
 *
 * Мы распространяем эту программу в надежде на то, что она будет вам
 * полезной, однако НЕ ПРЕДОСТАВЛЯЕМ НА НЕЕ НИКАКИХ ГАРАНТИЙ, в том
 * числе ГАРАНТИИ ТОВАРНОГО СОСТОЯНИЯ ПРИ ПРОДАЖЕ и ПРИГОДНОСТИ ДЛЯ
 * ИСПОЛЬЗОВАНИЯ В КОНКРЕТНЫХ ЦЕЛЯХ. Для получения более подробной
 * информации ознакомьтесь со Стандартной Общественной Лицензией GNU.
 *
 * Вы должны были получить копию Стандартной Общественной Лицензии
 * GNU с этой программой. Если Вы ее не получили, смотрите документ на
 * <http://www.gnu.org/licenses/>
 *
 * @package Fancybox
 *
 * $Id$
 */

/**
 * Основной класс плагина
 *
 * @package [Имя пакета]
 */
class Fancybox extends Plugin
{
	/**
	 * Версия плагина
	 * @var string
	 */
	public $version = '1.00a';

	/**
	 * Требуемая версия ядра
	 * @var string
	 */
	public $kernel = '2.16';

	/**
	 * Название плагина
	 * @var string
	 */
	public $title = 'Fancybox';

	/**
	 * Опиание плагина
	 * @var string
	 */
	public $description = 'Подключение библотеки Fancybox';

	/**
	 * Настройки плагина
	 *
	 * @var array
	 */
	public $settings = array(
	);

	/**
	 * Конструктор
	 *
	 * @return Fancybox
	 *
	 * @since 1.00
	 */
	public function __construct()
	{
		parent::__construct();
		$this->listenEvents('clientOnPageRender');
	}
	//-----------------------------------------------------------------------------

	/**
	 * Добавление библиотеки fancybox
	 *
	 * @param string $html  HTML
	 * @return string  HTML
	 */
	public function clientOnPageRender($html)
	{
		$page = Eresus_Kernel::app()->getPage();

		$page->linkScripts($GLOBALS['Eresus']->root . 'core/jquery/jquery.min.js');
		$page->linkStyles($this->urlCode . 'jquery.fancybox.css');
		$page->linkScripts($this->urlCode . 'jquery.fancybox.pack.js');
		$page->linkStyles($this->urlCode . 'helpers/jquery.fancybox-thumbs.css');
		$page->linkScripts($this->urlCode . 'helpers/jquery.fancybox-thumbs.js');
		$page->linkStyles($this->urlCode . 'helpers/jquery.fancybox-buttons.css');
		$page->linkScripts($this->urlCode . 'helpers/jquery.fancybox-buttons.js');
		$page->linkScripts($this->urlCode . 'script.js');
		return $html;
	}
	//-----------------------------------------------------------------------------
}
