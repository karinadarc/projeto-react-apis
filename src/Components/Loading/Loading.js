import {images} from '../../assets/importImages'
import { ContainerLoading, TituloLoading } from './LoadingStyle'

export const Loading = () =>{
    return(
        <ContainerLoading>
            <TituloLoading>Carregando...</TituloLoading>
            <img src={images.pokechu}/>
        </ContainerLoading>
    )
}