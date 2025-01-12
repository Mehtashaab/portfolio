const ProjectCard = ({ title, description, link }: { title: string; description: string; link: string }) => {
    return (
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2">{description}</p>
        <a href={link} className="text-blue-500 hover:underline mt-4 block">
          View Project
        </a>
      </div>
    );
  };
  
  export default ProjectCard;
  