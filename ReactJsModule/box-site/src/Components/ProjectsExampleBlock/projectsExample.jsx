import React from "react";
import { ProjectsItem } from "../ProjectsExampleItem/projectsExampleItem";
import ProjectImage1 from '../../Assets/IMG/ProjectsExample1.png'
import ProjectImage2 from '../../Assets/IMG/ProjectsExample2.png'
import ProjectImage3 from '../../Assets/IMG/ProjectsExample3.png'
import ProjectImage4 from '../../Assets/IMG/ProjectsExample4.png'
import { BackNextGroup } from "../BackNextCircleGroup/backNextCircleGroup";



import './projectsExample.scss'

export const ProjectsExample = () => {
    return (
        <>
            <div className="projectcs-example-block">
                <ProjectsItem image={ProjectImage1} head="Wildstone Infra Hotel" description="2715 Ash Dr. San Jose, South Dakota"/>
                <ProjectsItem image={ProjectImage2} head="Wish Stone Building" description="2972 Westheimer Rd. Santa Ana, Illinois "/>
                <ProjectsItem image={ProjectImage3} head="Mr. Parkinston’s House" description="3517 W. Gray St. Utica, Pennsylvania"/>
                <ProjectsItem image={ProjectImage4} head="Oregano Height" description="2464 Royal Ln. Mesa, New Jersey "/>
            </div>
            <BackNextGroup />

        </>
        
            

    )
}