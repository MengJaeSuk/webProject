/**
 * Created by cmm on 12/8/14.
 */
function ToCandidate($scope, $http, $location){
    $scope.candidates = {};
    $scope.search = "";

    $scope.pageing={
        pageNo : 1,
        itemsCount : 10,
        pageSize :8
    };

    $(function(){
        $('#gridView').show();
        $('#listView').hide();
        $("#gridSpan").click(function(){
            $('#gridView').show();
            $('#listView').hide();
        });
        $("#listSpan").click(function(){
            $('#listView').show();
            $('#gridView').hide();
        });
        $("#search").keyup(function(){
            if(event.keyCode == 13){
                abc();
            }
        });
        paging();
    });

    $scope.list = function () {
        if($scope.search == ""){
            paging();
        }else{
            searchPaging();
        }
    };

    function paging(){
        var api = "/listAll";
        $http({
            method: 'GET',
            url: api + '?pageNo=' + $scope.pageing.pageNo + '&pageSize='+$scope.pageing.pageSize
        }).success(function(data, status) {
            $scope.candidates = data.root;
            $scope.pageing.itemsCount = data.total;
        }).error(function(data, status) {

        });
    }

    $scope.searchCandidate = function(){
        var api = "/search";
        if($scope.search == ""){
            paging();
        }else{
            $scope.pageing.pageNo = 1;
            $http({
                method: 'GET',
                url: api + '?pageNo=' + $scope.pageing.pageNo + '&pageSize='+$scope.pageing.pageSize +'&queryStr=' + $scope.search
            }).success(function(data, status) {
                $scope.candidates = data.root;
                $scope.pageing.itemsCount = data.total;
            }).error(function(data, status) {

            });
        }
    };

    function searchPaging(){
        var api = "/search";
        $http({
            method: 'GET',
            url: api + '?pageNo=' + $scope.pageing.pageNo + '&pageSize='+$scope.pageing.pageSize +'&queryStr=' + $scope.search
        }).success(function(data, status) {
            $scope.candidates = data.root;
            $scope.pageing.itemsCount = data.total;
        }).error(function(data, status) {

        });
    }

    function abc(){
        var api = "/search";
        if($scope.search == ""){
            paging();
        }else{
            $scope.pageing.pageNo = 1;
            $http({
                method: 'GET',
                url: api + '?pageNo=' + $scope.pageing.pageNo + '&pageSize='+$scope.pageing.pageSize +'&queryStr=' + $scope.search
            }).success(function(data, status) {
                $scope.candidates = data.root;
                $scope.pageing.itemsCount = data.total;
            }).error(function(data, status) {

            });
        }
    }
}
