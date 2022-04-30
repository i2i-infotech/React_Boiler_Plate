import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
// import Header from "../Header";
// import Footer from "../Footer";
import { Outlet, useLocation } from "react-router-dom";

import { connect } from "react-redux";

// import GlobalNotification from "../GlobalNotification";
import { bindActionCreators } from "redux";

function Layout(props) {
  const { isAuth, setCountryAction, userInfoAction, username } = props;
  const logged = isAuth;
  const location = useLocation();

  //   if (
  //     location.pathname === "/dashboard" ||
  //     location.pathname === "/profile" ||
  //     location.pathname === "/cashback" ||
  //     location.pathname === "/transactions" ||
  //     location.pathname === "/referal" ||
  //     location.pathname === "/404" ||
  //     location.pathname === "/blankpage"
  //   ) {
  //     return (
  //       <>
  //         <Outlet
  //           context={{ isAuth: isAuth, admin: false, logged: logged }}
  //           {...props}
  //         />
  //         <GlobalNotification />
  //       </>
  //     );
  //   } else if (
  //     location.pathname === "/login" ||
  //     location.pathname === "/register" ||
  //     location.pathname === "/changepassword" ||
  //     location.pathname === "/forgotpassword"
  //   ) {
  //     return (
  //       <>
  //         <Header {...props} />
  //         <Outlet
  //           context={{ isAuth: isAuth, admin: false, logged: logged }}
  //           {...props}
  //         />
  //         <GlobalNotification position="bottom-center" />
  //       </>
  //     );
  //   }
  return (
    <>
      {/* <Header {...props} /> */}
      <div className="component_container">
        <Outlet
          //   context={{ isAuth: isAuth, admin: false, logged: logged }}
          {...props}
        />
      </div>
      {/* <Footer /> */}
      {/* <GlobalNotification position="bottom-center" /> */}
    </>
  );
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {};

export default memo(connect(mapStateToProps, mapDispatchToProps)(Layout));
