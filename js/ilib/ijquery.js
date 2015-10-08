(function($) {
	var $$ = $.fn;
	//将form表单的数据转换成对象
   	$$.i_serializeObject  = function() {
    		var obj = {};
	    var arr = this.serializeArray();
	    $.each(arr, function() {
	        if (obj[this.name] !== undefined) {
	            if (!obj[this.name].push) {
	                obj[this.name] = [obj[this.name]];
	            }
	            obj[this.name].push(this.value || '');
	        } else {
	            obj[this.name] = this.value || '';
	        }
	    });
	    return obj;
    };
    
    //解析url
    $.i_parseURL = function(url) {
	  var a =  document.createElement('a');
	  a.href = url;
	  return {
	      source: url,
	      protocol: a.protocol.replace(':',''),
	      host: a.hostname,
	      port: a.port,
	      query: a.search,
	      params: (function(){
	          var ret = {},
	            seg = a.search.replace(/^\?/,'').split('&'),
	            len = seg.length, i = 0, s;
	          for (;i<len;i++) {
	              if (!seg[i]) { continue; }
	              s = seg[i].split('=');
	              ret[s[0]] = s[1];
	          }
	          return ret;
	      })(),
	      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
	      hash: a.hash.replace('#',''),
	      path: a.pathname.replace(/^([^\/])/,'/$1'),
	      relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
	      segments: a.pathname.replace(/^\//,'').split('/')
	  }
	};
	//重写系统console.log (不需要jquery环境)
	console.i_log =  function() {
		console.log.call(console, '%c' + [].slice.call(arguments).join(' '), 'color:transparent;text-shadow:0 0 1px rgba(0,200,100,.9);');
	};
	
})(jQuery);
