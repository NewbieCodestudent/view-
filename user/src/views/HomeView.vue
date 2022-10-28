<template>
  <div>
    <div id="bodyarea">
        <div id="space_category">
            <a href="데스크공간 페이지">
                <div class="space_category_item">
                    <img src="@/assets/image/icon/table.png" alt="데스크공간">
                    <p>데스크</p>
                </div>
            </a>
            <a href="회의실공간 페이지">
                <div class="space_category_item">
                    <img src="@/assets/image/icon/meeting2.png" alt="회의실공간">
                    <p>회의실</p>
                </div>
            </a>
            <a href="오피스공간 페이지">
                <div class="space_category_item">
                    <img src="@/assets/image/icon/office.png" alt="오피스공간">
                    <p>오피스</p>
                </div>
            </a>
        </div>
        <div id="recommend_space_box">
            <span id="recommend_space">오늘의 추천 공간</span>
            <div id="space_contant_all">
                <!-- 공간 모듈 출력 공간 -->
                <div class="space_contant_item dummy_space_contant_item">
                    <div class="space_slide dummy_space_slide">
                        <div class="slides_img dummy_slides_img">
                          <div><img :src="require('@/assets/image/space/${imgName}')"></div>
                          <div><img src="@/assets/image/space/dummy1.jpg"></div>
                          <div><img src="@/assets/image/space/dummy3.jpg"></div>
                        </div>
                    </div>
                    <a>
                        <div class="space_contant_text">
                                <p class="space_name">공간이름</p><br>
                                <img class="space_adress" src="@/assets/image/icon/location.png">
                                <p class="space_adress">공간주소</p><br>
                                <img src="@/assets/image/icon/star.png">
                                <p class="space_grade">평점</p>
                                <img src="@/assets/image/icon/comment.png">
                                <p class="space_review">후기</p>
                        </div>
                    </a>
                    <div class="controller">
                        <button type="button" class="prev" onclick="prev('dummy');">&lang;</button>
                        <button type="button" class="next" onclick="next('dummy');">&rang;</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgName : 'dummy1.jpg'
    }
  },
  methods: {
    prev() {

    },
  }
}
</script>
<style scoped>
#bodyarea {
    width: 1000px;
    height: 100%;
}
/* home css */
#space_category {
    display: flex;
    justify-content: space-around;
}
.space_category_item {
    display: flex;
    width: 250px;
    height: 250px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 5px;
    margin-top: 20px;
}
.space_category_item:hover {
    background-color: rgba(155, 170, 209, 0.459);
}
#space_category img {
    width: 100px;
}
#recommend_space_box {
    text-align: center;
    margin-top: 20px;
}
#recommend_space { 
    font-size: 30px;
}
/* 공간 출력 */
#space_contant_all {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
}
.space_contant_item {
    width: 200px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 7.5px;
}
.space_slide {
    width: 200px;
    height: 170px;
    position: relative;
    overflow: hidden;
}
.slides_img {
    display: flex;
}
.space_slide img {
    width: 200px;
    height: 170px;
    object-fit: contain;
}
/* 공간 텍스트 */
.space_contant_text {
    text-align: right;
    border-bottom: 2px solid gray;
}
.space_contant_text p {
    display: inline-block;
}
.space_name {
    float: left;
    font-size: 15px;
    font-weight: bold;
}
.space_adress {
    float: left;
    font-size: 12px;
    color: gray;
}
.space_contant_text img {
    width: 18px;
}
.space_grade, .space_review {
    font-size: 12px;
}
.controller button {
    position: absolute;
    width: 10px;
    height: 30px;
    top: 70px;
    font-size: 20px;
    cursor: pointer;
    border: 0px;
    border-radius: 5px;
    background-color: rgba(134, 157, 221, 0.123);
    color: white;
}
.controller button:hover {
    background-color: rgba(44, 85, 196, 0.459);
}
.prev {left: 5px;}
.next {right: 5px;}
</style>
