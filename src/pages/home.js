import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Home() {
    return(
    <>       
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        height="100vh"
        >
            <Typography variant="h3" component="h2" textAlign="center">
                Conheça os planetas do Sistema Solar
            </Typography>

            <img className="floating-effect" src="/img/rickmorty.png" alt="Astronauta flutuando" />

            <Link to="/planets">
                <Button variant="contained" size="large" endIcon={<ArrowForwardIosIcon />}>
                    Vamos lá 
                </Button>
            </Link>
        </Stack>
    </>
    );
}