export default {
  data() {
    return {
      screenWidth: window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth,
    };
  },
  created() {
    window.onresize = () => {
      this.screenWidth = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    };
  },
  computed: {
    xs$() {
      return this.screenWidth < 768;
    },
    sm$() {
      return this.screenWidth >= 768 && this.screenWidth < 992;
    },
    md$() {
      return this.screenWidth >= 992 && this.screenWidth < 1200;
    },
    lg$() {
      return this.screenWidth >= 1200;
    },
  },
};
