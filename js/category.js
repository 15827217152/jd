 window.addEventListener('load', function() {
 	  //初始化左侧分类swiper内容滚动
     var swiper = new Swiper('.category-left .swiper-container', {
         direction: 'vertical',
         slidesPerView: 'auto',
         freeMode: true,
     });
 	  //初始化右侧分类swiper内容滚动
     var swiper = new Swiper('.category-right .swiper-container', {
         direction: 'vertical',
         slidesPerView: 'auto',
         freeMode: true,
         scrollbar: {
             el: '.swiper-scrollbar',
         },
         mousewheel: true,
     });
 })

//获取到所有的li标签 给每一个li标签加上点击事件
var lis = document.querySelectorAll('.category-left ul li');
//遍历所有的li标签
for(var i = 0; i < lis.length;i++){
    lis[i].onclick = function(){
        //给每一个li标签添加索引
        //对象法
        lis[i].index = i 
        //属性法
    //    lis[i].setAttribute('index',i)
      lis[i].addEventListener('click',function(){
          //获取到当前的电机的li标签的索引
          var index = this.index;
        // console.log(this.getAttribute('index'));
        //获取当前点击的li的高度
        var liHeight = this.offsetHeight;
        //计算当前需要移动的位移
        var translateY = -index * liHeight;
        //计算出要移除的最小的位移
        //parentNode是获取到父元素的节点,没有就返回null
        var minTranslateY =  document.querySelector('.category-left').offsetHeight - this.parentNode.offsetHeight;
          // 9. 判断 如果当前计算的位移值的值 大于最小位移值 可以滑动 小于最小位移值就不能滑动 设置了最小位移值
          if(translateY < minTranslateY){
            // 如果小于就设置为最小位移值
            translateY = minTranslateY;
        }
        document.querySelector('.swiper-wrapper').style.transform = 'translate3d(0px, '+translateY+'px, 0px)';
        // 11. 如果需要慢慢位移就可以给当前元素添加一个过渡 慢慢位移
        document.querySelector('.swiper-wrapper').style.transition = 'all 0.3s';
        // 12. 把所有li的active删掉
        for (var i = 0; i < lis.length; i++) {
            lis[i].classList.remove('active');
        }
        // 13. 给当前点击li添加
        this.classList.add('active');
      })
    }
}










