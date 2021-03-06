import { debounce } from './utils'
import logger from 'vuex/dist/logger'
import BackTop from '../../components/content/backtop/BackTop'
import {BACKTOP_DISTANCE} from '../common/const'
import {POP, NEW, SELL} from "./const";

export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null,
      newRefresh: null
    }
  },
  mounted() {
    // 1.图片加载完成的事件监听
    this.newRefresh = debounce(this.$refs.scroll.refresh, 20)

    // 对监听事件进行保存
    this.itemImageListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImageListener)
  },
}
export const tabControlMixin = {
  data () {
    return {
      // currentType: POP
    }
  },
  methods: {
    // tabClick(index) {
    //   switch (index) {
    //     case 0:
    //       this.currentType = POP
    //       break
    //     case 1:
    //       this.currentType = NEW
    //       break
    //     case 2:
    //       this.currentType = SELL
    //       break
    //   }
    //   console.log(this.currentType);
    // }
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > BACKTOP_DISTANCE
    }
  }
}
