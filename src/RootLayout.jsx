import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

export default function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" && <Loader />}
      <Outlet />
    </>
  );
}
