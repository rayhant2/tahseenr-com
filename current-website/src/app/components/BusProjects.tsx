"use client"

import ProjectsBox from "./ProjectsBox";
import BDOLogo from '../../../public/bdo_casecomp.png'
import Tapi from '../../../public/tapi.png'


const BusProj = (): React.ReactElement => {
    return (
        <div className="">
            <ProjectsBox
                project_name="Top 6 - BDO x Laurier | SME ESG Strategy Case Competition"
                description="Strategy for Food/Beverage SMEs to boost ESG efforts via a low-cost donation-based loyalty program, aligning with customer demand."
                project_img={BDOLogo}
                gh_link="#"
                tech_tags={[]}
            />
            <ProjectsBox
                project_name="Best Tech - Canada | JA Company Program"
                description="Helped create a platform to connect users and bubble tea stores via a loyalty program and interactive mapping features. We helped uplift local stores’ digital presence, promote their services, and help compete against much larger franchises."
                project_img={Tapi}
                gh_link="#"
                tech_tags={[]}
            />
        </div>
    );
}

export default BusProj;