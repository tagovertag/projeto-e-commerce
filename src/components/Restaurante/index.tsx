
import Tag from "../Tag";
import estrela from "../../assets/imagens/Home/estrela.png"
import { Card, ImgCard, HeaderCard, MainTitle, Avaliacao, Descrition, TagsContainer, ImgContainer, InfoContainer, BotaoContainer } from "./styles";
import { Link } from "react-router-dom";

type RestauranteProps = {
    name: string;
    category: string;
    id: number;
    information: string;
    nota: string;
    capa: string;
    destacado?: boolean;
    
}

const Restaurante = ({ name, category, id, information, nota, capa, destacado }: RestauranteProps) => {
    const isSushi = name.toLowerCase().includes('hioki');

    return (
        <Card>
            <ImgContainer>
                <ImgCard src={capa} alt={name} />
                <TagsContainer>{destacado && <Tag>Destaque da semana</Tag>}
                    <Tag>{category}</Tag>
                </TagsContainer>
            </ImgContainer>

            <InfoContainer>
                <HeaderCard>
                    <MainTitle>{name}</MainTitle>
                    <Avaliacao>
                        <strong>{nota}</strong>
                        <img src={estrela} alt="estrela"></img>
                    </Avaliacao>
                </HeaderCard>

                <Descrition>{information}</Descrition>
                    <BotaoContainer disabled={isSushi}>
                        {isSushi ? (
                            <Tag size="big">Em breve</Tag>
                    ) : (
                        <Link to={`/restaurante/${id}`}><Tag size="big">Saiba mais</Tag></Link>    
                        )}
                    </BotaoContainer>
                
            </InfoContainer>
        </Card>
    )
    
}

export default Restaurante