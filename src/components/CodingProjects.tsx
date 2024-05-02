export default function CodingProjects() {
  return (
    <section className="min-h-screen">
      <h2 className="text-center text-4xl mt-20 mb-12 select-none">Coding Projects</h2>
      <div className="grid grid-cols-2">
      {codingProjects.map(({ title, description, technologies, link, image }, index) => (
        <li key={index} className={`flex flex-col items-center p-4 select-none`}>
          <a href={link} target="_blank" rel="noreferrer" className="flex justify-center items-center w-full md:w-[50%]">
            <img src={image} className="w-full" alt={title} />
          </a>
          <div className="flex flex-grow flex-col justify-between items-center text-center py-8">
            <a href={link} target="_blank" rel="noreferrer">
              <h4 className="text-center text-3xl font-medium">{title}</h4>
            </a>
            <p className="mt-4 mb-2 text-xl">{description}</p>
            <p className="text-md text-gray-300">{technologies}</p>
          </div>
        </li>
      ))}
      </div>
    </section>
  )
}

const codingProjects: ICodingProjects[] = [
  {
    image: '/assets/smiths-air.png',
    link: 'https://youtu.be/biNf-jZZ9gk',
    title: 'Smiths Air',
    subtitle: 'Solo Project',
    description: 'A workplace communication Progressive Web App. Live App with 50 Users',
    technologies: 'Next.js, Redux, Tailwind CSS, Node.js, Express, MongoDB, TypeScript, Jest'
  },
  {
    image: '/assets/code-buddy.jpg',
    link: 'https://youtu.be/gJ_Q4nzSVMs',
    title: 'Code Buddy',
    subtitle: 'Solo Project',
    description: 'Code Buddy is a no-code platform that allows you to create websites using a drag and drop interface.',
    technologies: 'React, Redux, Tailwind CSS, Node.js, Express, MongoDB, TypeScript'
  }
]