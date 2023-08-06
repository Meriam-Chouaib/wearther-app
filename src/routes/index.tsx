import React from "react";
import { useRoutes } from "react-router-dom";
import { PATHS } from "../config/paths";
import { AuthLayout } from "../components/layout/authLayout/AuthLayout";


export default function Router(){
    return useRoutes([{
path: PATHS.AUTH.ROOT,
element:<AuthLayout />,

    }])
}
