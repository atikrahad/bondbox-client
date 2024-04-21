import Banner from "../../Components/Banner"
import Footer from "../../Components/Footer"
import Givefeadback from "../../Components/Givefeedback"
import Landingpagenavber from "../../Components/Landingpagenavber"
import Ourservises from "../../Components/Ourservices"

const Landingpage = () => {
  return (
    <div>
      <Landingpagenavber></Landingpagenavber>
      <Banner></Banner>
      <Ourservises></Ourservises>
      <Givefeadback></Givefeadback>
      <Footer></Footer>
    </div>
  )
}

export default Landingpage