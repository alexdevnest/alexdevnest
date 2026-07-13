import { useParams } from "react-router-dom";


export default function ProjectDetails () {
  const { id } = useParams()

  return (
    <main>
      Project: { id }
    </main>
  );
}