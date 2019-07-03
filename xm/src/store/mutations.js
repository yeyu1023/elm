export default {
    //通过store.commit('方法名'，附加参数)调用
    //创建方法 increAdd,第一个参数：接收state状态属性，第二个参数在之后，是组件中调用该方法时，传递的参数
    fuzhi(state, a) {
      this.state.locationCityId = a;
    },
    fuzhiZB(state, a) {
      this.state.locationCityZB = a;
    },
    fuzhi_cityToWaimai_latitude(state,a){
      this.state.cityToWaimai_latitude = a
    },
    fuzhi_cityToWaimai_longitude(state,a){
      this.state.cityToWaimai_longitude = a
    },
    fuzhi_location_cityName(state,a){
      this.state.location_cityName = a;
    },
    getgeohash(state,a){
      this.state.geohasha = a;
    },
    getxiabiao(state,a){
      this.state.xiabiaoId = a;
    },
    getUsers(state, a) {
      state.userMsg = a;
    },
    getcitys(state, b) {
      state.usercitys = b;
    },
    getlogin(state, a) {
      this.state.loginac = a
    },
    getavatar(state, a) {
      this.state.imgavatar = a
    },
    getaddress(state, a) {
      this.state.address = a
    },
    cityPutname(state, a){
      this.state.suoXuanName = a
    }
  }