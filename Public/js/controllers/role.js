/**
 * Created by P0017359 on 14-9-30.
 */
define([], function () {
    var roleController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "角色管理";
        $scope.roleList ={
            list:[],
            pagecount:"1"

        }

        $scope.search={
            name:"",
            type:"",
            status:"",
            pagenum:0
        }
        $scope.role={
            id:"",
            name:"",
            role_level:0,
            group:"",
            company:"",
            remark:""
        };

        $scope.reset=function(){
            $scope.search={};
            $scope.search.pagenum=0;
        }
        $scope.companylist=[];
        $scope.grouplist=[];
        $scope.dropdownlist=function(){
            $http.get('../company/CompaniesForDropdownlist').success(function (data) {
                $scope.companylist=JSON.parse(eval(data)).list;
            });
            $http.get('../company/GroupsForDropdownlist').success(function (data) {
                $scope.grouplist=JSON.parse(eval(data)).list;
            });
        }();

        $scope.list=function(){
            $http.get('../role/list?'+ $.param($scope.search)).success(function (data) {
                if(data!=null){
                        return $scope.roleList=JSON.parse(eval(data));
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
            if($scope.search.pagenum<$scope.roleList.pagecount){
                $scope.search.pagenum=$scope.search.pagenum+1;
            }
            $scope.list();
        }
        $scope.PagerData = function (pageindex) {
            $scope.search.pagenum=pageindex
            $scope.list();
        };

        $scope.edit=function(value){
            $scope.role=value;
        };

        $scope.updateFuction=function(value){
            $scope.role=value;
            $http.get('../function/findbyRole?id='+value.id).success(function (data) {
                var result=JSON.parse(eval(data));
                $('#function').modal('show');
                var zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
                $.each(result.list,function(index,value){
                    zTree_Menu.checkNode(zTree_Menu.getNodeByParam("id", value.id, null), true, true);
                });

            });
        }

        $scope.query=function(){
            $scope.search.pagenum=1;
            $scope.list();
        };

        function addDiyDom(treeId, treeNode) {
            var spaceWidth = 5;
            var switchObj = $("#" + treeNode.tId + "_switch"),
                icoObj = $("#" + treeNode.tId + "_ico");
            switchObj.remove();
            icoObj.before(switchObj);

            if (treeNode.level > 1) {
                var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level)+ "px'></span>";
                switchObj.before(spaceStr);
            }
        }

        function beforeClick(treeId, treeNode) {
            if (treeNode.level == 0 ) {
                var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                zTree.expandNode(treeNode);
                return false;
            }
            return true;
        }
        $scope.listq=function(){
            $http.get('../function/list').success(function (data) {
                if(data!=null){
                    $scope.nodes=JSON.parse(eval(data)).list;
                    $.fn.zTree.init($("#treeDemo"), setting,$scope.nodes);

                   /* var treeObj = $("#treeDemo");
                    $.fn.zTree.init(treeObj, setting, $scope.nodes);
                    zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
                    curMenu = zTree_Menu.getNodes()[0].children[0].children[0];
                    zTree_Menu.selectNode(curMenu);

                    treeObj.hover(function () {
                        if (!treeObj.hasClass("showIcon")) {
                            treeObj.addClass("showIcon");
                        }
                    }, function() {
                        treeObj.removeClass("showIcon");
                    });*/
                }
            });
        };
        $scope.listq();
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

        $scope.edit=function(value){
            $http.get('../role/Detail?id='+value.id).success(function (data) {
                var result=JSON.parse(eval(data));
                if(result==undefined||result==null||result.isSuccess=='1'){
                    alert(result.errorMessage);

                    return;
                }else{
                    $scope.role=JSON.parse(eval(data)).detail;
                    $('#example').modal('show');
                }
            });
        };

        $scope.delete=function(value){
            if(window.confirm('删除是不可恢复的，你确认要删除吗？')){
                $http.get('../role/delete?id='+value.ID).success(function(data){
                    $http.get('../role/list?'+ $.param($scope.search)).success(function (dataq) {
                        if(dataq!=null){
                            return $scope.roleList=JSON.parse(eval(dataq));
                        }
                    });
                });
            }
        };

        $scope.fours=function(value){
            $http.get('../company/CompaniesForDropdownlist?company='+$scope.role.group).success(function (data) {
                $scope.companylist=JSON.parse(eval(data)).list;
            });
        }

        $scope.add=function(){
            $scope.role={};
        }

        $scope.submitfunction=function(value){
            var id=value.id;
            var zTree = $.fn.zTree.getZTreeObj("treeDemo");
            var nodes = zTree.getCheckedNodes();
            var f=[];
            $.each(nodes,function(key,value){
                var k={};
                k.node_id=value.id;
                f[key]=k;
            });
            var data={};
            data.list=f;
            var node="nodelist="+JSON.stringify(data)+"&role_id="+id;
            $http.get('../role/updatefunction?'+node).success(function(data){

            });
        }

        $scope.submit=function(value){
            $("#save").attr('data-dismiss',"modal");
            $.post('../role/update', $.param($scope.role), function(data) {
                var result=JSON.parse(data);
                if(result!=undefined&&result!=null&&result.isSuccess=='0'){
                    alert("操作成功");
                    $scope.list();
                }else{
                    alert(result.errorMessage);
                    return;
                }
            });
        };
    }];
    return roleController;
});