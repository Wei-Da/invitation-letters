<template>
  <div id="app">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img class="swiper-img" src="@/assets/images/科技_01.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="@/assets/images/科技_02.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="@/assets/images/科技_03.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="@/assets/images/科技_04.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="@/assets/images/科技_05.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="@/assets/images/科技_06.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="@/assets/images/科技_07.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="@/assets/images/科技_08.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="@/assets/images/科技_09.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-item">
          <input
            class="swiper-item_input"
            type="text"
            placeholder="请输入您的姓名"
          />
          <input
            class="swiper-item_input"
            type="text"
            placeholder="请输入您的手机号码"
          />
          <input
            class="swiper-item_input"
            type="text"
            placeholder="请输入您的公司名称"
          />
          <input
            class="swiper-item_input"
            type="text"
            placeholder="请输入您的邮箱"
          />
          <textarea placeholder="备注"></textarea>
          <button>提交</button>
        </div>
        <img class="swiper-img" src="@/assets/images/科技_10.png" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          hide: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;

      .swiper-item {
        position: absolute;
        top: 125px;
        bottom: 75px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        .swiper-item_input {
          display: block;
          width: rem(278);
          height: rem(42);
          border-radius: 10px;
          padding-left: 15px;
          box-sizing: border-box;

          &::-webkit-input-placeholder {
            color: #38247b;
          }
          &:-moz-placeholder {
            /* Firefox 18- */
            color: #38247b;
          }
          &::-moz-placeholder {
            /* Firefox 19+ */
            color: #38247b;
          }
          &:-ms-input-placeholder {
            color: #38247b;
          }
        }

        textarea {
          display: block;
          width: rem(278);
          height: rem(100);
          border-radius: 10px;
          padding-left: 15px;
          padding-top: 10px;
          box-sizing: border-box;
          font-family: -apple-system,Helvetica,sans-serif;

          &::-webkit-input-placeholder {
            color: #38247b;
          }
          &:-moz-placeholder {
            /* Firefox 18- */
            color: #38247b;
          }
          &::-moz-placeholder {
            /* Firefox 19+ */
            color: #38247b;
          }
          &:-ms-input-placeholder {
            color: #38247b;
          }
        }

        button {
          display: block;
          width: rem(274);
          height: rem(30);
          -webkit-appearance: none;
          background-color: #007aff;
          border: none;
          color: #FFF;
        }
      }

      img {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
