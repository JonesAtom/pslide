(function($){
	$.fn.slide = function(options){
		$.fn.slide.defaults = {
			main:".slide",
			tabs:"span",
			pagecell:"",
			child:"img",
			move:"margin-left",
			speed:600,
			mwidth:1000,
			mheight:500,

			radix:1,
			effect:"fade",
			prevbtn:".pre-btn",
			nextbtn:".next-btn",
		};
		return this.each(function() {
			var opt = $.extend({},$.fn.slide.defaults,options);
			var slidebox = $(this);
			var main = $(opt.main),child = $(opt.child,opt.main),tabs = $(opt.tabs,slidebox.children(".tabs"));

			var move = opt.move,radix = opt.radix,effect = opt.effect,speed=opt.speed,mwidth = opt.mwidth,mheight = opt.mheight;
			var childSize = child.size();
			var a = child.length,c = 0;

			main.css(move,0);
			
			child.css({
				height: mheight + "px",
				width: mwidth + "px",
				
			});
			
			slidebox.css({
				width: mwidth + "px",
				overflow: "hidden",
				margin: "0 auto"
			});
			

			if (childSize >= radix) {
				if (move=="margin-left") {
					main.css({
						width: mwidth * a + "px",
						height: mheight + "px"
					});
					effectfn(mwidth)
				};
				if (move=="margin-top") {
					var wrap = "<div class='wrapper' style=width:"+mwidth+"px;height:"+mheight+"px;overflow:hidden;margin:0 auto>";
					slidebox.append(wrap);
					$(".wrapper").append(main);
					main.css({
						width: mwidth+"px",
						height: mheight * a + "px"
					});
					effectfn(mheight)
				};
			};

			function effectfn(x){
				switch(effect){
					case "fade":
						child.css('opacity', '0').eq(0).animate({opacity:1}, opt.speed);
						tabs.click(function(event) {
							main.css(move,-$(this).index() * x + "px");
							child.css('opacity', '0').eq($(this).index()).animate({opacity:1}, speed);
						});
						break;
					case "slide":
						main.css('transition', move +" "+speed+"ms");
						tabs.click(function(event) {
							main.css(move,-$(this).index() * x + "px");
						});
						break;
				}
			}


	
		});
	}
})(jQuery);