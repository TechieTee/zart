import React from "react";
import Navigationitems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";

const headStyle = {
  fontSize: "24px",
  lineHeight: "16px",
  margin: "0 0 0 50px",
  fontWeight: "600",
  textTransform: "capitalize",
};

const Header = ({toggleSettings, title}) => {
  // const [title, setTitle] = useState();

  // const changeTitle = (newTitle) => {
  //     setTitle(newTitle);
  // }

  // useEffect(() => {
  //     props.history.listen(() => {
  //         console.log(window.location.pathname)
  //         changeTitle(window.location.pathname)
  // })

  // }, [props.history])

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
      <Logo />
      <h2 style={headStyle}>
        {/* {title} */}
        {title}
      </h2>

      <Navigationitems toggleSettings={toggleSettings} />
    </nav>
  );
};
export default Header;

Header.defaultProps={
  title: 'Enrollment'
}