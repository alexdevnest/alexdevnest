import AddNewButton from "./AddNewButton";
import ProjectsList from "./ProjectsList";

import { PROJECTS } from "@constants/mock-data";



export default function AdminProjects () {

  async function editProject (id) {
    // TODO: Implement edit logi later on once the api is done
    console.log(`Project to be edited ${id}`);
    
  }

  async function deleteProject (id) {
    // TODO: Implement delete logi later on once the api is done
    console.log(`Project to be deleted ${id}`);
    
  }

  
  
  return (
    <section id="projects-list" className="tab-section">
      <AddNewButton name="project" />

      <ProjectsList
        projects={ PROJECTS }
        edit={ editProject }
        onDelete={ deleteProject }
      />
    </section>
  )
}