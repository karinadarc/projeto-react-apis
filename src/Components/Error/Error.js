import {images} from '../../assets/importImages'
import { ContainerError, TituloError } from './ErrorStyle'


export const Error = ({name}) =>{
    return(
        <ContainerError>
            <TituloError>Não foi possível carregar o pokémon {name} </TituloError>
            <img src={images.pokeError}/>
        </ContainerError>
    )
}