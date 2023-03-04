import React from 'react';
import SkillCard from './SkillCard';
import reactimg from '../../../assets/skillsPhoto/react.jpeg'
import firebaseimg from '../../../assets/skillsPhoto/firebase.png'
import flowbiteimg from '../../../assets/skillsPhoto/flowbite.png'

const Skills = () => {
    const skills = [
        {
            'name': 'React JS',
            'link': 'https://reactjs.org/',
            'img': "https://reactjs.org/logo-og.png"
        },

        {
            'name': 'Node JS',
            'link': 'https://nodejs.org/en/',
            'img': 'https://usefulangle.com/img/thumb/nodejs.png'
        },
        {
            'name': 'Express JS',
            'link': 'https://expressjs.com/',
            'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsT7OzFnBiKCymonhqBodClSKAbtaurhEHA&usqp=CAU'
        },
        {
            'name': 'MongoDB',
            'link': 'https://www.mongodb.com/',
            'img': 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png'
        },
        {
            'name': 'Firebase',
            'link': 'https://firebase.google.com/',
            'img': 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/firebase-logo-icon.png?fit=1200%2C600&ssl=1'
        },
        {
            'name': 'Tailwind CSS',
            'link': 'https://tailwindcss.com/docs/guides/create-react-app',
            'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuMdkg5uExhqnoTkIS1Tznf93WP0P2crfIJkN32wcmDDNWr6Is9eePJqtjBPinWwfH_c&usqp=CAU'
        },
        {
            'name': 'Bootstrap',
            'link': 'https://getbootstrap.com/',
            'img': 'https://wallpaperaccess.com/full/4623107.png'
        },
        {
            'name': 'DaisyUI',
            'link': 'https://daisyui.com/',
            'img': 'https://images.opencollective.com/daisyui/d1eb928/logo/256.png'
        },
        {
            'name': 'Flobite',
            'link': 'https://flowbite.com/',
            'img': 'https://www.creative-tim.com/assets/icon-flowbite-8385ecf9f2e9057b24925020687e84bbdfedbe9b7f27da2ac50ebabd9d0f98aa.jpg'
        },
        {
            'name': 'Redux',
            'link': 'https://redux.js.org/',
            'img': 'https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage-1024x768.jpg'
        },

    ]
    return (
        <div className='max-w-[1440px] mx-auto my-[300px] mt-32'>
            <h1 data-aos="fade-in" className=" text-6xl mb-[100px] font-extrabold  text-slate-300 text-center">Skills</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[100px] '>
                {
                    skills.map(skill => <SkillCard
                        key={skill.name}
                        skill={skill}
                    ></SkillCard>)
                }
            </div>
        </div>
    );
};

export default Skills;