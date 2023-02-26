import { Button, Grid, Stack, Typography } from "@mui/material";
import Cached from '@mui/icons-material/Cached';
import Home from '@mui/icons-material/Home';

export default function Message(props) {
    return(
        <>
            <Grid container height="100vh">
                <Grid item xs={11} sm={8} md={6} lg={5} xl={4} margin="auto">
                    <Stack direction="column" alignItems="center" spacing={2}>
                        {props?.icon}
                        <Typography variant="h4" component="h1" textAlign="center">
                            {props?.title}
                        </Typography>
                        <Typography variant="subtitle1" component="po" textAlign="center">
                            {props?.subtitle}
                        </Typography>
                        <Typography variant="subtitle1" component="po" textAlign="center">
                            {props?.description}
                        </Typography>
                        {props.children}

                        {(props?.tryAgainButton) && (
                            <Button variant="outlined" startIcon={<Cached />} onClick={() => { window.location.reload(); }}>
                                Tentar novamente!
                            </Button>
                        )}

                        {(props?.homeButton) && (
                            <Button variant="outlined" startIcon={<Home />} onClick={() => { window.location.href = "/" }}>
                                Tentar novamente!
                            </Button>
                        )}
                    </Stack>
                </Grid>
            </Grid>
        
        </>
    );
}