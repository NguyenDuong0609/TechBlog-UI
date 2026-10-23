import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from '@/components/portfolio/ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from '@/components/portfolio/ui/badge';

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
        <CardHeader className='p-0'>
            <div className="relative w-full h-[220px] flex 
            items-center justify-center bg-tertiary dark:bg-secondary/40 
            xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                <Image 
                    src={project.image} 
                    alt={project.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    width={600} 
                    height={400} 
                    priority />
                {/* Overlay with action buttons on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center gap-x-4">
                    <Link
                        href={project.link}
                        className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center
                         scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <Link2Icon className="text-white" />
                    </Link>
                    <Link
                        href={project.github}
                        className="bg-[#1A2332] w-[54px] h-[54px] rounded-full flex justify-center items-center
                         scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-75 shadow-lg hover:shadow-xl"
                    >
                        <Github className="text-white" />
                    </Link>
                </div>
            </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
            <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5 shadow-md">
                {project.category}
            </Badge>
            <h4 className="h4 mb-1 text-base">{project.name}</h4>
            <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
        </div>
    </Card>
  )
}

export default ProjectCard
