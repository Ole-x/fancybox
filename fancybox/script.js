/* Если пространство имён не объявлено, объявляем его. */
var ru = ru || {};
ru.dvaslona = ru.dvaslona || {};
ru.dvaslona.popups  = ru.dvaslona.popups || {};

/* Всплывающий блок */
ru.dvaslona.popups.Popup = function()
{
	// fancybox
	this.F = $.fancybox;
	
	// родитель
	var parent = this;

	// модальность
	this.modal = false;

	// кнопки
	this.buttons = false;

	/* Задаёт модальность */
	this.setModal = function(isModal) 
	{
		this.modal = isModal;
	};

	/* Возвращает модальность */
	this.isModal = function() 
	{
		return this.modal;
	};

	/* Задаёт заголовок */
	this.setTitle = function(title) 
	{
		this.title = title;
		return this;
	};

	/* Задаёт контент */
	this.setContents = function(contents) 
	{
		//проверяем возможный селектор.
		try 
		{
		   s = jQuery.find(contents).length;
		}
		catch (e) 
		{
		   s = 0;
		}
		
		if (s > 0)
		{
			//это селектор
			this.contents = jQuery(contents);	        
	    }
		else if (jQuery.isPlainObject(contents)) 
		{
			//это объект
			this.contents = contents.contents;			    
			this.title = contents.title;			    
		}
		else
		{
			//это контент
			this.contents = contents;
		}
		return this;
	};

	if (arguments[0]) 
	{
		this.setContents(arguments[0]);
	}

	/* Показывает блок */
	this.show = function() 
	{
		if (this.buttons) 
		{
		    var buttons = {};
		}
		else 
		{
		    var buttons = false;
		}

		this.F(this.contents,
		{
			title: this.title, 
			helpers : 
			{
				overlay : this.modal,
				buttons	: buttons
			}
		});
	   return this;
    };

	/* Прячет блок */
	this.hide = function() 
	{
       this.F.close();
	   return this;
    };

	/* Уничтожает блок */
	this.destroy = function() 
	{
       delete this.F; 
    };

	/* слайдшоу */
	this.slideshow = 
	{
		next: function() 
		{
			parent.F.next();
		},
		prev: function() 
		{
			parent.F.prev();
		},
		pause: function() 
		{
			parent.F.play();
		},
		play: function() 
		{
			parent.F.play(true);
		},
	};
};     









/////////////////////////
//  демо
/////////////////////////
var popup1;

function f_1() 
{
	popup1 = new ru.dvaslona.popups.Popup();
}
function f_2() 
{
	popup1.show();   
	//setTimeout(f_3, 2000);
}
function f_3() 
{
	popup1.hide();    
}
function f_4() 
{
	popup1.destroy();    
}
function f_5() 
{
	popup1.setTitle('Какой то заголовок');    
}
function f_6() 
{
	popup1.setContents('Какой то текст');    
}
function f_8() 
{
	popup1.setContents('http://popup.lanpicture.com/data/gallery/1.jpg');    
}
function f_9() 
{
	popup1.setContents('#demoID');    
}
function f_10() 
{
	popup1.setContents('.democlass');    
}
function f_11() 
{
	a = ['http://popup.lanpicture.com/data/gallery/1.jpg', 'http://popup.lanpicture.com/data/gallery/2.jpg', 'http://popup.lanpicture.com/data/gallery/3.jpg'];
	popup1.setContents(a);    
}
function f_12() 
{
	popup1.setContents('http://www.adobe.com/jp/events/cs3_web_edition_tour/swfs/perform.swf');    
}

function f_13() 
{
	popup1.slideshow.play();   
}
function f_14() 
{
	popup1.slideshow.pause();   
}
function f_15() 
{
	popup1.slideshow.prev();   
}
function f_16() 
{
	popup1.slideshow.next();   
}

function f_7() 
{
	popup = new ru.dvaslona.popups.Popup('<div>тест модальный</div>');
	popup.setModal(true);
	popup.show();
}

function f_17() 
{
var popup = new ru.dvaslona.popups.Popup();
popup.
  setTitle('Заголовок').
  setContents('.democlass').
  show();
}

function f_18() 
{
	var popup = new ru.dvaslona.popups.Popup({
	  title: 'Заголовок',
	  contents: 'Контент'
	}).show();
}

function f_19() 
{
	var popup = new ru.dvaslona.popups.Popup({
	  title: jQuery('#inputtitle').val(),
	  contents: jQuery('#inputcontent').val()
	}).show();
}