componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    /* Use window.innerHeight and multiply it by fraction. For example, if you want 60 vh use (window.innerHeight)*0.6. */
    if (window.pageYOffset > (window.innerHeight)*1) {
      document.querySelector(".nav-link").className = "nav-link scroll";
    } 
    else {
      document.querySelector(".nav-link").className = "nav-link";
    }
  };