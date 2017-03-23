export default {
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  created() {
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  },
  methods: {

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
