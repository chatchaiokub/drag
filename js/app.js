
/*global $, angular*/
angular.module('dragApp', [])
.controller('dragCtrl', function ($scope) {
  $scope.drag = []
  $scope.addDrag = function (day) {
    var countOfDrag = $scope.drag.length
    $scope.drag.push({days: day, counts: countOfDrag, css: {top: 200, left: 250, position: 'absolute'}})
  }
  $scope.dragCir = function (index) {
    $scope.drag[index].css = $('#' + index).position()
  }
  $scope.init = function () {
    $scope.drag.forEach(function (item) {
      console.log(item)
      $('#' + item.counts).draggable()
      $('#' + item.counts).css(item.css)
    })
  }
  $scope.addDragCustom = function () {
    $('#modal1').openModal()
  }
  // $scope.eachModal = function (days) {
  //   $('#modal1').openModal()
  // }
  $scope.customDay = function (date) {
    var countOfDrag = $scope.drag.length
    var now = new Date()
    var datePick = new Date(date)
    var datePicked = datePick.getDate() + (datePick.getMonth() * 30)
    var dateNow = now.getDate() + (now.getMonth() * 30)
    $scope.drag.push({days: datePicked - dateNow, counts: countOfDrag, css: {top: 200, left: 250, position: 'absolute'}})
  }
})
