//TODO Define module
define([ 'i18n!resources/nls/res'], function (res) {
    var ProductController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "Product - " + res.title;
        $rootScope.menuUrl = "";
        $rootScope.show = true
        $scope.product = {
            category: "",
            brand: "" ,
            url:"" ,
            pageIndex:1
        }
        $http.post("api/product").success(function (d) {
            $scope.productContent = d.products;
            $scope.pages = d.count > 20 ? 20 : parseInt(d.count, 10);
        });
        $http.get("api/productcategory").success(function (d) {
            $scope.productcategory = d
        });
        $http.get("api/productbrand").success(function (d) {
            $scope.productbrand = d
        });
        /*   $scope.brand="" ;
         $scope.category="" ;*/
        $scope.searchProduct = function () {
            console.log($scope.product.category)
            $http.post("api/product", {brand: $scope.product.brand, category: $scope.product.category,pageindex: $scope.product.pageIndex}).success(function (d) {
                $scope.productContent = d.products;
                $scope.pages = d.count > 20 ? 20 : parseInt(d.count, 10);
            });
        };
        $scope.PagerData = function (pageindex) {
            $scope.product.pageIndex = pageindex;
            $scope.searchProduct();
        };
        $scope.showDetail = function (obj) {
            $scope.product.url=obj.ProductURL
            var price=parseInt(obj.Price.replace("$", ""))   ;
            $scope.draw(price)
        }
        $scope.draw = function (price) {
            var prices = []
            for (var i = 0; i < 12; i++) {
                prices.push(price)
            }
            var data = [
                {
                    name: '北京',
                    value: prices,
                    color: '#C4B616',
                    line_width: 3
                }
            ];
            var chart = new iChart.LineBasic2D({
                render: 'canvas',
                data: data,
                title: "",
                width: 550,
                height: 200,
                border:false,
                coordinate: {height: '90%', background_color: ''},
                sub_option: {
                    hollow_inside: false,//设置一个点的亮色在外环的效果
                    point_size: 16
                },
                labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
            });
            chart.draw();
        }
        $(function () {
            $scope.draw(12)
        })


    }];
    return ProductController;
});