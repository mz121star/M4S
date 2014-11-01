/**
 * Created by P0017359 on 14-9-30.
 */

define([], function () {
    var BrandController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "车型管理";
        $scope.brand = {
            name:"",
            module:"",
            id:"",
            pId:"",
            level:"",
            remark:""
        };
        var newCount=100;
        var log, className = "dark";
        $scope.treeNode={};
        $scope.AddHoverDom=function(treeId, treeNode){
            var sObj = $("#" + treeNode.tId + "_span");
            if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
            var addStr = "<span class='button add12' id='addBtn_" + treeNode.tId
                + "' title='add node' onfocus='this.blur();'></span>";
            sObj.after(addStr);
            var btn = $("#addBtn_"+treeNode.tId);
            if (btn) btn.bind("click", function(){
                $scope.addNode(treeNode);
            });
        }

        $scope.removeHoverDom=function(treeId, treeNode) {
            $("#addBtn_"+treeNode.tId).unbind().remove();
        };

        $scope.addNode=function(treeNode){
            $scope.brand={};
            $('#example').modal('show');
            $scope.treeNode=treeNode;
        }

        $scope.beforeEditName =function(treeId, treeNode, newName, isCancel) {
            className = (className === "dark" ? "":"dark");
            $scope.treeNode=treeNode;
            if(treeNode==null){
                alert("该商标没有跟目录");
                return false;
            }

            $scope.brand.id=treeNode.id;
            $('#id').val(treeNode.id);

            $http.get('../Brand/detail?id='+treeNode.id).success(function(data){
                var result=JSON.parse(eval(data)).detail;
                $scope.brand.name=result.name;
                $('#example').modal('show');
            });


            return false;
        }


        // 从数据库删除数据
        $scope.beforeRemove = function(treeId, treeNode){

            var f=confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
            if(f){
                $http.get('../Brand/delete?id='+treeNode.id).success(function(data){
                    if(data!=null){
                        f = true;
                    }else{
                        f = false;
                    }
                });
            }

            return f;
        }
        // 前台删除数据
        $scope.onRemove=function(treeId, treeNode) {
            className = (className === "dark" ? "":"dark");
            var zTree = $.fn.zTree.getZTreeObj("treeDemo");
            zTree.selectNode(treeNode);

        }


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

        $scope.list=function(){
            $http.get('../Brand/list').success(function (data) {
                if(data!=null){
                    $scope.nodes=JSON.parse(eval(data)).list;
                   $.fn.zTree.init($("#treeDemo"), setting,$scope.nodes);


                    /*var treeObj = $("#treeDemo");
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
        $scope.list();
        var setting={
            view: {
                addHoverDom:$scope.AddHoverDom,
                removeHoverDom:$scope.removeHoverDom,

                showLine: false,
                showIcon: false,
                selectedMulti: false,
                dblClickExpand: false
                //addDiyDom: addDiyDom
            },
            edit: {
                enable: true
            },
            data: {
                simpleData: {
                    enable: true
                }
            },
            check: {
                enable: false
            },
            callback: {
                beforeRemove: $scope.beforeRemove,
                beforeEditName : $scope.beforeEditName,
                onRemove: $scope.onRemove
            }
        };

        $scope.edit=function(value){
            alert(1234);
            $scope.brand.name=123;
        };


        $scope.submit=function(value){
            var treeNode=$scope.treeNode;
            if(value.id==null||value.id==undefined||value.id==""){
                $scope.brand.pId=treeNode.id;
            }else{
                $scope.brand.pId=treeNode.pId;
            }
            $http.get('../Brand/update?'+ $.param($scope.brand)).success(function(data){
                var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                if(value.id==null||value.id==undefined||value.id==""){
                    zTree.addNodes(treeNode, {id:JSON.parse(eval(data)).id, pId:treeNode.id, name:value.name});
                    zTree.refresh();
                    $scope.brand={};
                }else{
                    treeNode.name=value.name;
                    zTree.updateNode(treeNode);
                    zTree.refresh();
                    $scope.brand={};
                }
            });
        };

    }];

    return BrandController;
});