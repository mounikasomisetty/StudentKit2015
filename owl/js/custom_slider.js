angular.module('DemoApp',[])

        .controller('DemoCtrl', function($scope) {

            function getSlide(target) {
                var i = target.length;
                return {
                    id: (i + 1),
                    label: 'slide #' + (i + 1),
                    img: 'owl/gallery_images' +  '/' + ((i + 1)) + '.jpg' ,
                    odd: (i % 2 === 0)
                };
            }

            function addSlide(target) {
                target.push(getSlide(target));
            };

            $scope.carouselIndex = 1;

            function addSlides(target, qty) {
                for (var i=0; i < qty; i++) {
                    addSlide(target);
                }
            }

            function test(i){
                console.log(i)
            };


            // 2nd ngRepeat demo
            $scope.slides = [];
            addSlides($scope.slides, 50);



        })
