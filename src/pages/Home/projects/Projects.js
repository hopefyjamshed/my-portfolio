import { useQuery } from '@tanstack/react-query'
import './Projects.css'
import React, { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () => {

    const { data: projects = [], refetch } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await fetch('https://my-portfolio-server-iota-ivory.vercel.app/projects')
            const data = await res.json()
            return data;
        }

    })
    console.log(projects)
    refetch()


    return (
        <div>
            <h1 className='text-6xl text-center mb-[150px] font-extrabold text-white' data-aos="fade-in">My Projects</h1>

            <div className='mt-[100px] bg-grad-to-bw grad py-16 mb-32 max-w-[1440px] mx-auto'>

                <div className='ml-14'>


                </div>
                <div className='grid sm:grid-cols-1  group md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 lg:ml-14' data-aos="slide-up">
                    {
                        projects.map(data => <ProjectsCard
                            key={data._id}
                            data={data}
                        ></ProjectsCard>)
                    }
                </div>

            </div>
        </div>

    );
};

export default Projects;