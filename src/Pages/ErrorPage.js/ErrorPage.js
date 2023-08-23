import Header from "../../Components/Header/Header";
import { images } from "../../assets/importImages";
import { ContainerPageError, TituloPageError } from "./ErrorPageStyle";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <ContainerPageError>
        <TituloPageError>Página não encontrada!</TituloPageError>
        <img src={images.pikachu} alt="Imagem de erro" />
      </ContainerPageError>
    </>
  );
};

export default ErrorPage;
