import { CircularProgress } from "@mui/material";
import { Error, PriorityHigh } from "@mui/icons-material";
import Message from "./message";

export default function Default(props) {
    return (<>
        {(props?.loading === true) ? (<>
            <Message icon={<CircularProgress size={100} color="white"/>}  title={'Carregando...'}/>
        </>) : (<>
            {(props?.error) ? (<>
                <Message    
                    icon={<Error fontSize="large" color="white"/>} 
                    title={`Erro`} 
                    subtitle={props?.error?.subtitle} 
                    description={props?.error?.description} 
                    tryAgainButton={true} />                
            </>) : (<>
                {(props?.msg) ? (<>
                    <Message 
                        {...props?.msg} 
                        icon={
                            props?.msg?.icon 
                            || <PriorityHigh fontSize="large" color="white"/>
                        } 
                    />    
                </>) : (<>
                    {props.children}
                </>)}
            </>)}
        </>)}
    </>)
}