import Router from "next/router";
import React, { useLayoutEffect } from "react";
import useAuthValue from "src/Modules/AuthModule/Hooks/useAuthValue";

function withAuthRoute(WrappedComponent: any) {
  return function Wrapper(props: any) {
    const { loggedIn } = useAuthValue();

    useLayoutEffect(() => {
      if (loggedIn) {
        Router.replace("/form");
      }
    }, [loggedIn]);

    return <WrappedComponent {...props} />;
  };
}

export default withAuthRoute;
