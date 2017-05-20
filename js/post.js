/**
 * Created by hxsd on 2016/12/17.
 */
//angular.module("myapp",["filtermodule","ngRoute","ngMessages"]);
var myapp= angular.module("myapp",["ngMessages"]);


myapp.controller("myctrl",function ($scope,$http) {

    //$http.get("jon/pos.json").success(function (data) {
    //    $scope.conts=data;
    //    var lengt=data.length;
    //    $scope.len=lengt;
    //});
    $scope.data={
        shipping:{}
    }

    $scope.conts=[
        { is:true,name:"金刚狼II",ip:"[网易广东省手机网友]",imgsrc:"images/pic_2.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:1001,step:10},
        { is:true,name:"金刚狼II",ip:"[网易广东省手机网友]",imgsrc:"images/pic_3.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:980,step:23},
        { is:true,name:"金刚狼II",ip:"[网易广东省手机网友]",imgsrc:"images/pic_2.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:323,step:43},
        { is:true,name:"罗密欧",ip:"[网易广东省手机网友]",imgsrc:"images/pic_5.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:106,step:65},
        { is:true,name:"朱莉",ip:"[网易广东省手机网友]",imgsrc:"images/pic_7.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:234,step:60},
        { is:true,name:"嘿嘿嘿",ip:"[网易广东省手机网友]",imgsrc:"images/pic_10.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:345,step:30},
        { is:true,name:"金刚狼II",ip:"[网易广东省手机网友]",imgsrc:"images/pic_15.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:674,step:12},
        { is:true,name:"金刚狼II",ip:"[网易广东省手机网友]",imgsrc:"images/pic_18.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:754,step:56},
        { is:true,name:"金刚狼II",ip:"[网易广东省手机网友]",imgsrc:"images/pic_20.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:458,step:31},
        { is:true,name:"金刚狼II",ip:"[网易广东省手机网友]",imgsrc:"images/pic_14.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:896,step:92},
        { is:true,name:"沧海一粟",ip:"[网易湖北省武汉市网友]",imgsrc:"images/pic_12.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:218,step:30},
        { is:true,name:"沧海一粟",ip:"[网易湖北省武汉市网友]",imgsrc:"images/pic_11.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:642,step:28},
        { is:true,name:"沧海一粟",ip:"[网易湖北省武汉市网友]",imgsrc:"images/pic_15.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:459,step:55},
        { is:true,name:"沧海一粟",ip:"[网易湖北省武汉市网友]",imgsrc:"images/pic_10.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:839,step:102},
        { is:true,name:"沧海一粟",ip:"[网易湖北省武汉市网友]",imgsrc:"images/pic_3.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:589,step:124},
        { is:true,name:"沧海一粟",ip:"[网易湖北省武汉市网友]",imgsrc:"images/pic_5.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:822,step:45},
        { is:true,name:"沧海一粟",ip:"[网易湖北省武汉市网友]",imgsrc:"images/pic_7.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:238,step:132},
        { is:true,name:"小仓柚子",ip:"[手机网友]",imgsrc:"images/pic_8.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:345,step:54},
        { is:true,name:"小仓柚子",ip:"[手机网友]",imgsrc:"images/pic_2.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:654,step:27},
        { is:true,name:"小仓柚子",ip:"[手机网友]",imgsrc:"images/pic_1.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:1324,step:87},
        { is:true,name:"小仓柚子",ip:"[手机网友]",imgsrc:"images/pic_9.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:918,step:12},
        { is:true,name:"小仓柚子",ip:"[手机网友]",imgsrc:"images/pic_12.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:877,step:1},
        { is:true,name:"小仓柚子",ip:"[手机网友]",imgsrc:"images/pic_16.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:98,step:8},
        { is:true,name:"小仓柚子",ip:"[手机网友]",imgsrc:"images/pic_19.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:81,step:28},
        { is:true,name:"隔壁老邢",ip:"[网易中国手机网友]",imgsrc:"images/pic_13.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:58,step:5},
        { is:true,name:"隔壁老邢",ip:"[网易中国手机网友]",imgsrc:"images/pic_15.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:188,step:32},
        { is:true,name:"隔壁老邢",ip:"[网易中国手机网友]",imgsrc:"images/pic_2.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:385,step:36},
        { is:true,name:"隔壁老邢",ip:"[网易中国手机网友]",imgsrc:"images/pic_8.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:265,step:16},
        { is:true,name:"隔壁老邢",ip:"[网易中国手机网友]",imgsrc:"images/pic_19.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:68,step:11},
        { is:true,name:"隔壁老邢",ip:"[网易中国手机网友]",imgsrc:"images/pic_12.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:560,step:28},
        { is:true,name:"隔壁老邢",ip:"[网易中国手机网友]",imgsrc:"images/pic_10.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:31,step:1},
        { is:true,name:"隔壁老邢",ip:"[网易中国手机网友]",imgsrc:"images/pic_2.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:66,step:24},
        { is:true,name:"隔壁老邢",ip:"[网易中国手机网友]",imgsrc:"images/pic_6.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:567,step:12},
        { is:true,name:"黑摸警长",ip:"[网易海南省手机网友]",imgsrc:"images/pic_4.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:83,step:19},
        { is:true,name:"黑摸警长",ip:"[网易海南省手机网友]",imgsrc:"images/pic_1.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:233,step:54},
        { is:true,name:"黑摸警长",ip:"[网易海南省手机网友]",imgsrc:"images/pic_9.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:334,step:67},
        { is:true,name:"黑摸警长",ip:"[网易海南省手机网友]",imgsrc:"images/pic_12.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:569,step:20},
        { is:true,name:"黑摸警长",ip:"[网易海南省手机网友]",imgsrc:"images/pic_13.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:12,step:978},
        { is:true,name:"黑摸警长",ip:"[网易海南省手机网友]",imgsrc:"images/pic_14.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:1,step:0},
        { is:true,name:"黑摸警长",ip:"[网易海南省手机网友]",imgsrc:"images/pic_15.jpg",count:"小日本，害怕不。看见没这就是，中国最小的官老爷就这么厉害。难道还怕你小日本？",time:new Date().toLocaleString(),top:199,step:60}

    ];



    $scope.pageNum=1;
    $scope.pageSize=8;



    //点击顶的时候
    //var neArr=[];
    //for(var j=0;j<$scope.pageSize;j++){
    //    neArr.push(j+1);
    //}
    //$scope.di=neArr;

    $scope.ding=function(item){

        if(item.is){
            item.top++;
            return item.is=false;

        }

    }

    $scope.paging=function (p) {
        $scope.pageNum=p;
    }
    $scope.nu=Math.ceil($scope.conts.length/$scope.pageSize);
    //$scope.nex=false;
    //$scope.las=false;
    //
    $scope.next=function () {
        $scope.pageNum++;
       // alert($scope.lenxxx);
        //if ($scope.pageNum>=nu){
        //    return $scope.nex=true;
        //    $scope.nex=false;
        //}else {
        //
        //
        //    return $scope.nex=false;
        //}

    }

    $scope.last=function () {
        //console.log($scope.pageNum);
        //if ($scope.pageNum==1){
        //    return $scope.las=true;
        //}else {
        //    return $scope.las=false;
        //}
        $scope.pageNum--;


    }


    //显示参与总数
    $scope.partake=function(){
        $scope.tote=0;
        angular.forEach($scope.conts,function(item){
            $scope.tote+=item.top;
        })
        return $scope.tote;
    }

    $scope.aa=false;
    $scope.sh=function(){
        if ($scope.aa){
            $scope.con="抵制低俗，文明上网，登录发帖";
            return $scope.aa=false;
        }else {
            return $scope.aa=true;
        }
    }


    $scope.con="抵制低俗，文明上网，登录发帖";

    $scope.empty=function(){
        $scope.con="";
    }



    //往数组里添加评论
    $scope.publish=function(con){
        $scope.conts.unshift({is:true,name:$scope.data.shipping.name,ip:"[网易海南省手机网友]",imgsrc:"images/pic_15.jpg",count:con,time:new Date().toLocaleString(),top:0,step:0})
        $scope.nu=Math.ceil($scope.conts.length/$scope.pageSize);
        //$scope.conts.sort(sortNumber);
    }




});

//每页有几条评论的过滤器
myapp.filter("confilter",function () {
    return function (conts,pageNum,pageSize) {
        if (!angular.isArray(conts)||!angular.isNumber(pageNum)|| !angular.isNumber(pageSize)){
            return conts;
        }
        var stareIndex=(pageNum-1)*pageSize;
        var newArr=conts.slice(stareIndex,stareIndex+pageSize);
        return newArr;
    }
});

//分成几页
myapp.filter("numfliter",function () {
    return function (conts,pageSize) {
        var n=Math.ceil(conts.length/pageSize);
        var nArr=[];
        for (var i=0;i<n;i++){
            nArr.push(i+1);
        }
        return nArr;
    }
});