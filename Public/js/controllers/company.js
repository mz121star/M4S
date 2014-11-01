/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var CompanyController = ["$scope", "$rootScope", "$http", "$location",'$upload', function ($scope, $rootScope, $http, $location,$upload) {


        $scope.onFileSelect = function($files) {
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                $scope.upload = $upload.upload({
                    url: '../company/uploadpic', //upload.php script, node.js route, or servlet url
                    //method: 'POST' or 'PUT',
                    //headers: {'header-key': 'header-value'},
                    //withCredentials: true,
                    data: {myObj: $scope.myModelObj},
                    file: file  // or list of files ($files) for html5 only
                    //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
                    // customize file formData name ('Content-Disposition'), server side file variable name.
                    //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file'
                    // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
                    //formDataAppender: function(formData, key, val){}
                }).progress(function(evt) {
                    console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
                }).success(function(data, status, headers, config) {
                    // file is uploaded successfully
                    console.log(data);
                });
                //.error(...)
                //.then(success, error, progress);
                // access or attach event listeners to the underlying XMLHttpRequest.
                //.xhr(function(xhr){xhr.upload.addEventListener(...)})
            }
            /* alternative way of uploading, send the file binary with the file's content-type.
             Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.
             It could also be used to monitor the progress of a normal http post/put request with large data*/
            // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
        };


        $rootScope.title = "客户管理";
        $scope.companyList =  {
            list:[],
            pagecount:"1"

        }
        $scope.search={
            name:"",
            type:0,
            status:"",
            pagenum:0
        }
        $scope.add=function(){
            $scope.role={};
        }
        $scope.company={
          "id":"",
          name:"",
          type:"0",
          address:"",
          telephone:"",
          consultant:"",
          contactphone:"",
          contactuser:"",
          parentCustomer:"",
          email:"",
          servicebegintime:"",
          serviceendtime:"",
          status:"0",
          num:""
        };

        $scope.grouplist=[];
        $scope.dropdownlist=function(){
            $http.get('../company/GroupsForDropdownlist').success(function (data) {
                $scope.grouplist=JSON.parse(eval(data)).list;
            });
        }();

        $scope.reset=function(){
            $scope.search={};
            $scope.search.pagenum=0;
        }

        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };
        $scope.add=function(){
            $scope.company={};
        }

        $scope.list=function(){
            $http.get('../company/list?'+ $.param($scope.search)).success(function (data) {
                if(data!=null){
                        return $scope.companyList=JSON.parse(eval(data));
                }
            });
        };
        $scope.list();
        $scope.PagerPrev=function(){
            if($scope.search.pagenum>0){
                $scope.search.pagenum=$scope.search.pagenum-1;
            }
            $scope.list();
        }
        $scope.PagerAfter=function(){
            if($scope.search.pagenum<$scope.companyList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }
        $scope.PagerData = function (pageindex) {
            $scope.search.pagenum=pageindex
            $scope.list();
        };
        $scope.edit=function(value){
            $http.get('../company/detail?id='+value.id+"&type="+$scope.search.type).success(function(data){
                var detail=JSON.parse(eval(data)).detail
                $scope.company=detail;
                $scope.company.contactuser= detail.contact_user
            });
            //$scope.company=value;
        };

        $scope.listarea=function(){
            $http.get('../area/list').success(function (data) {
                if(data!=null){
                    $scope.nodes=JSON.parse(eval(data)).list;
                    $.fn.zTree.init($("#areatree"), setting,$scope.nodes);
                }
            });
        };
        $scope.listarea();
        var setting={
            view: {
                selectedMulti: false
            },edit: {
                enable: false
            },check: {
                enable: true
            },data: {
                simpleData: {
                    enable: true
                }
            }
        };

        $scope.listbrand=function(){
            $http.get('../brand/list').success(function (data) {
                if(data!=null){
                    $scope.nodes=JSON.parse(eval(data)).list;
                    $.fn.zTree.init($("#brandtree"), setting,$scope.nodes);
                }
            });
        };
        $scope.listbrand();
        var setting={
            view: {
                selectedMulti: false
            },edit: {
                enable: false
            },check: {
                enable: true
            },data: {
                simpleData: {
                    enable: true
                }
            }
        };

        $scope.settingarea=function(value){
            $scope.company=value;
            $scope.company.type=value.type;
        };


        $scope.updateArea=function(value){
            var zTree_Menu = $.fn.zTree.getZTreeObj("areatree");
            zTree_Menu.checkAllNodes(false);
            zTree_Menu.expandAll(true);
           /* var nodes = zTree_Menu.getSelectedNodes();
            if (nodes.length>0) {
                zTree_Menu.expandNode(nodes[2], true, true, true);
            }*/
            $scope.company.id=value.id;
            $scope.company.type=value.type;

            $http.get('../Company/findbynode?id='+value.id).success(function (data) {
                var result=JSON.parse(eval(data));
                $('#area').modal('show');

                $.each(result.list,function(index,value){
                    zTree_Menu.checkNode(zTree_Menu.getNodeByParam("id", value, null), true, true);
                });


            });
        }

        $scope.settingbrand=function(value){
            $scope.company=value;
            $scope.company.type=value.type;
        };
        $scope.PagerData = function (pageindex) {
            $scope.search.pagenum=pageindex
            $scope.list();
        };

        $scope.submitarea=function(value){

            console.log(value);
            console.log($scope.company);

            var id=value.id;
            var zTree = $.fn.zTree.getZTreeObj("areatree");
            var nodes = zTree.getCheckedNodes();
            var f=[];
            var index=0;
            $.each(nodes,function(key,value){
                if(!value.isParent){
                    var k={};
                    k.id=value.id;
                    f[index]=k;
                    index=index+1;
                }
            });
            var data={};
            data.list=f;
            var node="area="+JSON.stringify(data)+"&id="+id+"&type="+$scope.company.type;
            $http.get('../company/updatearea?'+node).success(function(data){

            });
        }

        $scope.submitbrand=function(value){
            var id=value.id;
            var zTree = $.fn.zTree.getZTreeObj("brandtree");
            var nodes = zTree.getCheckedNodes();
            var f=[];
            $.each(nodes,function(key,value){
                var k={};
                k.id=value.id;
                f[key]=k;
            });
            var data={};
            data.list=f;
            var node="brand="+JSON.stringify(data)+"&id="+id+"&type="+$scope.type;
            $http.get('../company/updatebrand?'+node).success(function(data){

            });
        }

        $scope.delete=function(value){
            if(window.confirm('删除是不可恢复的，你确认要删除吗？')){
                $http.get('../company/delete?id='+value.id+'&type='+value.type).success(function(data){
                    $http.get('../company/list?'+ $.param($scope.search)).success(function (dataq) {
                        if(dataq!=null){
                            return $scope.companyList=JSON.parse(eval(dataq));
                        }
                    });
                });
            }
        };
        $scope.formatedate =function(format,date)
        {
            var o = {
                "M+" : date.getMonth()+1, //month
                "d+" : date.getDate(),    //day
                "h+" : date.getHours(),   //hour
                "m+" : date.getMinutes(), //minute
                "s+" : date.getSeconds(), //second
                "q+" : Math.floor((date.getMonth()+3)/3),  //quarter
                "S" : date.getMilliseconds() //millisecond
            }
            if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
                (date.getFullYear()+"").substr(4- RegExp.$1.length));
            for(var k in o)if(new RegExp("("+ k +")").test(format))
                format = format.replace(RegExp.$1,
                    RegExp.$1.length==1? o[k] :
                        ("00"+ o[k]).substr((""+ o[k]).length));
            return format;
        }
        $scope.submit=function(value){
            $("#save").attr('data-dismiss',"modal");
            $scope.company.servicebegintime=$scope.company.servicebegintime==""?"":$scope.formatedate('yyyy-MM-dd',new Date($scope.company.servicebegintime));
            $scope.company.serviceendtime=$scope.company.serviceendtime==""?"":$scope.formatedate('yyyy-MM-dd',new Date($scope.company.serviceendtime));
            $.post('../company/update', $.param($scope.company), function(data) {
                var result=JSON.parse(data);
                if(result!=undefined&&result!=null&&result.isSuccess=='0'){
                    $scope.company={};
                    $scope.company.type=0;
                    $scope.company.status=0;
                    alert("操作成功");
                    $scope.list();
                }else{
                    alert(result.errorMessage);
                    return;
                }
            });
        };

    }];
    return CompanyController;
});