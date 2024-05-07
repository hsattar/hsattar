export const SingleTabView = ({ link, image, title, description, technologies }: IProps) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-x-4 px-4 select-none`}>
            <a href={link} target="_blank" rel="noreferrer" className="flex justify-center items-center w-full md:w-[75%] mx-auto">
                <img src={image} className="w-full" alt={title} />
            </a>
            <div className="flex flex-col justify-between items-center text-center py-8">
                <a href={link} target="_blank" rel="noreferrer">
                    <h4 className="text-center text-3xl font-medium">{title}</h4>
                </a>
                <p className="mt-4 mb-6 text-xl">{description}</p>
                <img src={technologies} />
            </div>
        </div>
    )
}

interface IProps {
    link: string
    image: string
    title: string
    description: string
    technologies: string
}