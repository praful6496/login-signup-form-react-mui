import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundColor: "#1976d2",
                p: 6,
                width: "100%",
                bottom: 0,
                height: "auto"
            }}
            component="footer"
        >
            <Container maxWidth="sm">
                <Typography variant="body2" color="#fff" align="center">
                    {"Copyright © "}
                    <Link color="text.secondary" href="#">
                        Your Website
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
            </Container>
        </Box>
    );
}