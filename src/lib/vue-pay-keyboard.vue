
<template>
  <transition name="payAnmiation">
  <div v-show="payAnmiation" class="keyboard">
    <div class="over"><span @click="colseKeyWin">完成</span></div>
    <div class="keyType">
      <ul>
        <li>
          <span @touchstart="choseEffect" @touchend="RemoveChoseEffect">1</span>
          <span @touchstart="choseEffect" @touchend="RemoveChoseEffect">2</span>
          <span @touchstart="choseEffect" @touchend="RemoveChoseEffect">3</span>
        </li>
        <li>
          <span @touchstart="choseEffect" @touchend="RemoveChoseEffect">4</span>
          <span @touchstart="choseEffect" @touchend="RemoveChoseEffect">5</span>
          <span @touchstart="choseEffect" @touchend="RemoveChoseEffect">6</span>
        </li>
        <li>
          <span @touchstart="choseEffect" @touchend="RemoveChoseEffect">7</span>
          <span @touchstart="choseEffect" @touchend="RemoveChoseEffect">8</span>
          <span @touchstart="choseEffect" @touchend="RemoveChoseEffect">9</span>
        </li>
        <li>
          <span class="none"></span>
          <span @touchstart="choseEffect" @touchend="RemoveChoseEffect">0</span>
          <a @touchstart="DownRemoveEffect" @touchend="UpRemoveEffect"></a>
        </li>
      </ul>
    </div>
  </div>
  </transition>
</template>

<script>
  /*
   * <ke-Board ref="keyboard" @inputNum="listenValue"></ke-Board> listenValue接受用户输入的字符 赋值与当前输入input的V-model中 input设置为readonly="value"
   * upKeyWin()为调起键盘方法   this.$refs.keyboard.upKeyWin();
   * */
  import $ from 'webpack-zepto'
  export default{
    props:{},
    components: {},
    data() {
      return {
        value:[],
        payAnmiation : false,
      }
    },
    watch:{
      value(){

      }
    },
    mounted(){

    },
    methods: {
      upKeyWin(){
        this.payAnmiation = !this.payAnmiation;
      },
      colseKeyWin(){
        this.payAnmiation = !this.payAnmiation;
      },
      /*
       * 删除效果
       * */
      DownRemoveEffect(event){
        this.value.pop();
        console.log(this.value);
        let transmit = '';
        $.each(this.value,(i, obj)=> {
          console.log(obj)
          transmit += obj;
        });
        this.$emit('inputNum',transmit);
        $(event.changedTouches[0].target).addClass('downDel');
      },
      UpRemoveEffect(event){
        $(event.changedTouches[0].target).removeClass('downDel');
      },
      /*
      * 数字键盘
      * */
      choseEffect(event){
        $(event.changedTouches[0].target).addClass('downNum');
      },
      RemoveChoseEffect(event){
        this.value.push($(event.changedTouches[0].target).text());
        console.log(this.value);
        let transmit = '';
        $.each(this.value,(i, obj)=> {
            console.log(obj)
          transmit += obj;
        });
        $(event.changedTouches[0].target).removeClass('downNum');
        this.$emit('inputNum',transmit);
      }
    }
  }
</script>

<style lang="scss">
  .payAnmiation-enter-active,.payAnmiation-leave-active{
    transition:all 0.5s ease;
  }
  .payAnmiation-enter,.payAnmiation-leave-active{
    opacity: 1;
    transform: translate3d(0, 100%, 0);
    -ms-transform: translate3d(0, 100%, 0); /* IE 9 */
    -moz-transform: translate3d(0, 100%, 0); /* Firefox */
    -webkit-transform: translate3d(0, 100%, 0); /* Safari 和 Chrome */
    -o-transform: translate3d(0, 100%, 0);
  }
  .none{
    background: #d1d5db !important;
    box-shadow: none !important;
  }
  .downDel{
    background: url("../imgs/del.png") no-repeat center center !important;
    background-size: auto 0.466667rem !important;
    }
  .downNum{
    /*box-shadow:inset 0 0 25px #ddd,0 0 3px #333 !important;*/
    background: #becad9 !important;
    }
  .keyboard{
    position: fixed;
    bottom :0;
    width :100%;
    background :#d1d5db;
    z-index: 500;
    }
    .over{
      text-align: right;
      }
    .over span{
        display :inline-block;
        margin :0.2rem 0;
        margin-right: 1rem;
        font-size: 0.346667rem;
        }
    .keyType{
      width: 100%;
      }
      .keyType ul{
        width: 100%;
        }
        .keyType ul li{
          display: flex;
          justify-content: space-around;
          }
        .keyType ul li span{
          flex :1;
          width: 3.133333rem;
          height :1.266667rem;
          margin: 0.11rem;
          line-height :1.266667rem;
          text-align :center;
          font-size :0.6rem;
          color :#000;
          background: #fff;
          border-radius :0.2rem;
          box-shadow :0.2px 2px 3px #a2a7ab;
          font-family: Helvetica !important;
          }
  .keyType ul li a{
  flex: 1;
  width :3.133333rem;
  height :1.266667rem;
  margin :0.11rem;
  line-height :1.266667rem;
  background :url("../imgs/downDel.png") no-repeat center center;
  background-size :auto 0.466667rem;
  }
</style>
