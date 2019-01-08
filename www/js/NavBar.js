class NavBar extends Component {
  constructor(){
    super();
    this.navItems = [
      new NavItem('Start', '/'),
    ];
  }
}
$(function() {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});