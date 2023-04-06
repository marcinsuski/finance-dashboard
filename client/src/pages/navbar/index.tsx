import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";

type Props = {};

const Navbar = (props: Props) => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");
    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]} >
            {/* LEFT SIDE */}
            <FlexBetween gap="0.75rem" >
                <img alt="icon" src="../../../public/icon-white.svg" width="30px" height="30px"></img>
                {/* <PixIcon sx={{ fontSize: "28px" }} /> */}
                <Typography variant="h4" fontSize="16px" style={{margin: '10px 0 0 0'}}>
                    Finance dashboard
                </Typography>
            </FlexBetween>
            {/* RIGHT SIDE */}
            <FlexBetween gap="2rem">
                <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                    <Link
                        to="/"
                        onClick={() => setSelected("dashboard")}
                        style={{
                            color:
                                selected === "dashboard"
                                    ? "inherit"
                                    : palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                        dahsboard
                    </Link>
                </Box>
                <Box>
                    {" "}
                    <Link
                        to="/"
                        onClick={() => setSelected("predictions")}
                        style={{
                            color:
                                selected === "predictions"
                                    ? "inherit"
                                    : palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                        predictions
                    </Link>
                </Box>
            </FlexBetween>
        </FlexBetween>
    );
};

export default Navbar;
