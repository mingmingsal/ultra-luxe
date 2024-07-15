import Hero from "../components/Hero"
import Opener from "../components/Opener"
import { Accomodations } from "../components/Accomodations"
import { Gallery } from "../components/Gallery"
const FrontPage = () => {
  return (
    <div>
        <Hero />
        <Opener />
        <Accomodations />
        <Gallery />
    </div>
  )
}

export default FrontPage