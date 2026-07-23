import ProjectsListCard from "./ProjectListCard";


export default function ProjectsList ({ projects, edit, onDelete }) {
  
  return (
    <section className="projects-list">
      {
        projects.map(
          (project) => (
            <ProjectsListCard
              key={ project.id }
              { ...project }
              edit={ edit }
              onDelete={ onDelete }
            />
          )
        )
      }
    </section>
  )
}