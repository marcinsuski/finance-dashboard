import React from "react";
import DashboardBox from "../../components/DashboardBox";

type Props = {};

const Row3 = (props: Props) => {
    return (
        <>
            <DashboardBox gridArea="g"></DashboardBox>
            <DashboardBox gridArea="h"></DashboardBox>
            <DashboardBox gridArea="i"></DashboardBox>
            <DashboardBox gridArea="j"></DashboardBox>
        </>
    );
};

export default Row3;
