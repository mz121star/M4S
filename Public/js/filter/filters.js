define(['app'], function (app) {
    app.filter('highlightWords', function () {
        return function (input, text) {
            var r = new RegExp(text, 'gmi');
            if (r.exec(input)) {
                return input;
            }
            else
                return "";
        };
    });
    app.filter('kimissList', function () {
        return function (input, text) {
            var childs = input[0].childs;
            for (var i = 0, l = childs.length; i < l; i++) {
                if (childs[i].name === text) {
                    return childs[i].content.trim();
                }
            }

        };
    });
    app.filter('maxlen', function () {
        return function (input, text) {
            if (!!input) {
                var len = text || 40;
                if (input.length <= len)
                    return input;
                return input.substring(0, len) + "...";
            }
            else {
                return ""
            }
        };
    });
    app.filter('statuschange', function () {
        return function (input, text) {
           if(input==0){
               return "有效"
           }
           else{
               return "无效"
           }
        };
    });


    /***
     * AngularJS For Loop with Numbers & Ranges
     */
    app.filter('range', function () {
        return function (input, total) {
            total = parseInt(total);
            for (var i = 0; i < total; i++)
                input.push(i);
            return input;
        };
    });
    app.filter('PagerRange', function () {
        return function (input, total) {
            total = parseInt(total);
            if (total > 20) total = 20
            for (var i = 0; i < total; i++)
                input.push(i);
            return input;
        };
    });
    app.filter("numToTxt", function () {
        return function (input, text) {
            if (input === 1)
                return "Start";
            if (input === 0)
                return "Stop";
        };
    });
    app.filter("statust", function () {
        return function (input, text) {
            if (input == "1")
                return "无效";
            if (input == "0")
                return "有效";
        };
    });

    app.filter("statusChange", function () {
        return function (input, text) {
            if (input === "1")
                return "已处理";
            if (input === "0")
                return "未处理";
        };
    });

    app.filter("statuss", function () {
        return function (input, text) {
            if (input === "0")
                return "未发布";
            if (input === "1")
                return "已发布";
            if (input === "2")
                return "拒绝";
            if (input === "3")
                return "撤销";
            return input;
        };
    });

    app.filter("join", function () {
        return function (input, text) {
            if (input === "0")
                return "报名";
            if (input === "1")
                return "参加";
            if (input === "2")
                return "取消";
            return input;
        };
    });
    app.filter("categoryname", function () {
        return function (input, text) {
            if (input === "0")
                return "注册";
            if (input === "1")
                return "出行";
            if (input === "2")
                return "车健康";
            return input;
        };
    });

});