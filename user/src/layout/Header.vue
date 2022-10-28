<template>
    <div>
        <div id="headerarea">
            <a href="/">
                <img id="logo" src="@/assets/logo.png">
            </a>
            <form id="searchspace" action="검색.....">
                <input id="searchText" type="text" name="searchWord">
                <input id="searchIcon"  type="image" src="@/assets/image/icon/search-removebg.png">
            </form>
            <img id="menutab_buttom" src="@/assets/image/icon/catalog.png" v-on:click="menutabOpen">
            <div id="menutab">
                <img id="menutab_close" src="@/assets/image/icon/close.png" onclick="menutabClose">
                <div id="login">
                </div>
                <div id="mypage_package">
                    <div>
                        <a href="예약리스트 페이지">
                        <img src="image/icon/reservation.png"><br>
                        <p>예약리스트</p>
                        </a>
                    </div>
                    <div>
                        <a href="이용후기 Q&A관리 페이지">
                        <img src="image/icon/qna.png"><br>
                        <p>이용후기<br>Q&A 관리</p>
                        </a>
                    </div>
                    <div>
                        <a href="결제내역 마일리지 페이지">
                        <img src="image/icon/payment.png"><br>
                        <p>결제내역<br>마일리지</p>
                        </a>
                    </div>
                </div>
                <div id="menutab_bottom">
                    <div class="menutab_bottom_item">
                        <a href="1:1문의 페이지">
                            1:1문의
                        </a>
                    </div>
                    <div class="menutab_bottom_item">
                        <a href="공지사항 페이지">
                            공지사항
                        </a>
                    </div>
                    <div class="menutab_bottom_item">
                        <a href="이용가이드">
                            이용가이드
                        </a>
                    </div>
                    <div class="menutab_bottom_item">
                        <a href="워크토크 소개">
                            워크토크 소개
                        </a>
                    </div>
                    <div class="menutab_bottom_item">
                        <a>공급자페이지로 이동</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        menutabOpen() {
            const menutab = document.getElementById('menutab');
            menutab.setAttribute('style','dispaly:block');
        }
    }
}
</script>
<style>
/* header css */
#header {
    height: 100px;
    display: flex;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid rgba(128, 128, 128, 0.205);
}
#headerarea {
    width: 1024px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
}
#logo {
    width: 200px;
    object-fit: contain;
}
#searchspace {
    width: 200px;
    height: 40%;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid gray;
    border-radius: 5px;
}
#searchText {
    height: 90%;
    border : 0;
}
#searchIcon {
    width: 15%;
    object-fit: contain;
}
#menutab_buttom {
    width: 35px;
    object-fit: contain;
    position: absolute;
    top: 30%;
    right: 1.5%;
    cursor: pointer;
}
/* menutab */
#menutab {
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top:30px;
    right: 20px;
    width: 300px;
    height: 350px;
    text-align: center;
    font-size: 12%;
    font-weight: bold;
    display: none;
}
#menutab_close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
}
#menutab div {
    display: flex;
}
#login {
    background-color: rgb(146, 146, 240);
    height: 60px;
    font-size: small;
    justify-content: center;
    align-items: center;
}
#login a {
    display: inline-flex;
    align-items: center;
}
#login p {
    color: white;
}
#login img {
    width: 30px;
    margin-right: 10px;
}
#mypage_package {
    height: 90px;
    font-size: 13px;
    justify-content: space-around;
    object-fit: contain;
    align-items: center;
}
#mypage_package div {
    display: block;
}
#mypage_package img {
    width: 15px;
}
#menutab_bottom {
    height: 200px;
    flex-direction: column;
}
.menutab_bottom_item {
    width: 100%;
    height: 20%;
    font-size: 13px;
    border-top: 1px solid gray;
    align-items: center;
    justify-content: center;
}
.menutab_bottom_item:last-child {
    background-color: rgb(146, 146, 240);
}
.menutab_bottom_item:last-child a {
    color: rgb(239, 250, 91);
    font-size: 15px;
    font-weight: bold;
}
</style>
