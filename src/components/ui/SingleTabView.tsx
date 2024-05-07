export const SingleTabView = ({ link, image, title, description, technologies }: IProps) => {
    return (
        <li className={`flex flex-col items-center p-2 select-none`}>
            <a href={link} target="_blank" rel="noreferrer" className="flex justify-center items-center w-full md:w-[75%]">
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
    )
}

interface IProps {
    link: string
    image: string
    title: string
    description: string
    technologies: string
}