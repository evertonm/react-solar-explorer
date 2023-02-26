import { Container, Typography, Stack, Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from "react";
import { Link, useParams} from 'react-router-dom';
import PlanetsApi from "../api/planets";
import Default from "../components/layout/default";

export default function Planet() {
    
    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState(null);
    const [planet, setPlanet] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await PlanetsApi.getBySlug(params.slug);            
                if(response.length === 0) {
                    throw new Error("Não encontramos o planeta!");

                } 
                setPlanet(response?.[0]);
                setLoading(false);    
                
            } catch (error) {

                setError({
                    subtitle: `Ocorreu um erro em nossa api para obter os planetas. Tente novamente mais tarde.`,
                    description: String(error)
                })
                setLoading(false);    
            }
        })();
    }, []);

    async function handleShare() {
        const responseImage = await fetch(planet?.imgUrl);
        const contentType = responseImage.headers.get('content-type');
        const blob = await responseImage.blob();
        const binaryFile = new File([blob], `${planet?.slug}-${planet?.img}`, {type: contentType});

        window.navigator.share({
            url: `${window.location.href}`,
            title: `Conheça ${planet.nome}`,
            text: `Explore o planeta ${planet.nome} e descubra suas peculiaridades`,
            files: Array(binaryFile)
        });
    }

    return(
        <Default loading={loading} error={error} msg={msg}>
            <Container maxWidth="xl" className="container-margin">
                <Link to="/planets">
                    <Button variant="outlined" size="large" startIcon={<ArrowBackIosIcon />}>                        
                        Voltar
                    </Button>
                </Link>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <img className="spin-effect" src={planet?.imgUrl} alt={planet?.descrição} />
                    <Typography variant="h5" component="h1">
                        {planet?.nome}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {planet?.descrição}
                    </Typography>
                    <Button 
                        variant="contained" 
                        size="large" 
                        onClick={handleShare}
                        endIcon={<ShareIcon />}
                    >                    
                        Compartilhar
                    </Button>
                </Stack>
            </Container>
        </Default>
    );
}