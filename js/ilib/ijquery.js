(function($) {
	//将form表单的数据转换成对象
    $.fn.i_formDataToObject = function() {
    		var seriaArray = $(this).serializeArray();
		var paramsObj = {};
		for (var index in seriaArray){
			param = seriaArray[index];
			paramsObj[param["name"]] = param["value"];  
		}
		return paramsObj;
    };
})(jQuery);