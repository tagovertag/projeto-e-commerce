import { BannerImg, LogoBanner, TitleBanner } from "./styles"
import banner from "../../assets/imagens/Home/banner.png"
import logo from "../../assets/imagens/Home/logo.png"

const Banner = () => (
    <BannerImg style={{ backgroundImage: `url(${banner})` }}>
        <LogoBanner src={logo} alt="logo" />
        <TitleBanner>Viva experiências gastronômicas no conforto da sua casa</TitleBanner>
    </BannerImg>
)

export default Banner;