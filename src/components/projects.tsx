export default function CodingProjects() {
    return (
        <>
        <h2 className="text-center text-4xl my-8 select-none mt-16">Coding Projects</h2>
        { codingProjects.map(({ title, description, technologies, link, image, direction }, index) => (
            <section key={index} className={`flex flex-col items-center ${direction} p-4 select-none`}>
                <a href={link} target="_blank" rel="noreferrer" className="flex justify-center items-center w-full md:w-[50%]">
                    <img src={image} className="w-full px-3 lg:w-[75%]" alt=""/>
                </a>
                <div className="flex flex-grow flex-col justify-between items-center text-center py-8">
                    <a href={link} target="_blank" rel="noreferrer">
                        <h4 className="text-center text-2xl font-medium">{title}</h4>
                        {/* <h5 className="mb-3">{subtitle}</h5> */}
                    </a>
                    <p className="mt-4 mb-2">{description}</p>
                    <p className="text-sm text-gray-600">{technologies}</p>
                </div>
            </section>
        )) }
        </>
    )
}

const codingProjects: ICodingProjects[] = [{
    image: '/assets/smiths-air.png',
    link: "https://youtu.be/biNf-jZZ9gk",
    title: 'Smiths Air',
    subtitle: "Solo Project",
    description: "A workplace communication Progressive Web App. Live App with 50 Users",
    technologies: "Next.js, Redux, Tailwind CSS, Node.js, Express, MongoDB, TypeScript, Jest",
    direction: "md:flex-row"
}, {
    image: '/assets/code-buddy.jpg',
    link: "https://youtu.be/gJ_Q4nzSVMs",
    title: 'Code Buddy',
    subtitle: "Solo Project",
    description: "Code Buddy is a no-code platform that allows you to create websites using a drag and drop interface.",
    technologies: "React, Redux, Tailwind CSS, Node.js, Express, MongoDB, TypeScript",
    direction: "md:flex-row-reverse"
}]