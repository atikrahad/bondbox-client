import { Helmet } from "react-helmet"
import Allgroups from "./Groupcompo/Allgroups"
import Mygroups from "./Groupcompo/Mygroups"

const Groups = () => {  
  return (
    <div className='grid gap-5 grid-cols-1 max-w-screen-lg mx-auto md:grid-cols-9'>
      <Helmet title="BondBox | Group"></Helmet>
        <Mygroups></Mygroups>
        <Allgroups></Allgroups>
    </div>
  )
}

export default Groups