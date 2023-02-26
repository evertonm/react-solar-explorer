import { 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardActionArea, 
    CardContent
} from "@mui/material";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlanetsApi from "../api/planets";
import Default from "../components/layout/default";

export default function Planets() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState(null);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await PlanetsApi.getAll();            
                setPlanets(response);
                setLoading(false);    
            } catch (error) {
                setError({
                    subtitle: `Ocorreu um erro em nossa api para obter os planetas. Tente novamente mais tarde.`
                })
                setLoading(false);    
            }
            
        })();
    }, []);

    return (
        <Default loading={loading} error={error} msg={msg}>
            <Container maxWidth="xl" className="container-margin">
                <Typography variant="h2" component="h2" textAlign="center">
                    Planetas do Sistema Solar
                </Typography>
                <Grid container spacing={2} pt={2}>
                    {planets.map((planet) => (<Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
                        <Card className="glass-card">
                            <Link to={`/planet/${planet?.slug}`}>
                                <CardActionArea>
                                    <CardContent>
                                        <img src={planet?.imgUrl} alt={planet?.descricao} width="100%" />
                                        <Typography variant="h5" component="h2">
                                            {planet.nome}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>))}
                    
                </Grid>            
            </Container>
        </Default>
    );
}