"use client"
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const members = [
    {
        name: 'Candace Hamilton',
        role: 'Founder - CEO',
        avatar: '/candace.jpg',
        link: '#',
    },
    {
        name: 'Luis Bendana',
        role: 'CTO',
        avatar: '/luis.jpeg',
        link: '#',
    }
]

export default function TeamSection() {
    const { t } = useTranslation();
    return (
        <section className="pb-12 pt-0 md:py-16 dark:bg-transparent" id="team">
            <div className="mx-auto max-w-5xl px-6">
                {/*<span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Team</span>*/}
                <div className="mt-6 gap-4 sm:grid sm:grid-cols-2">
                    <div className="sm:w-2/5">
                        <h2 className="text-teal-400 text-3xl font-bold sm:text-4xl">{t('Our dream team')}</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>{t('Since 2014, our goal at The English Solution has been to awaken a lasting affinity for the English language through rigorous teaching provided in an encouraging and fun way. With our California senior teacher, students enjoy a real language immersion on site.')}</p>
                    </div>
                </div>
                <div className="mt-6 md:mt-8 lg:mt-10">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
                        {members.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <img className="h-86 w-full rounded-md object-cover object-[50%_66%] grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src={member.avatar} alt="team member" width="826" height="1239" />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        {/*<Link href={member.link} className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            Linktree
                                        </Link>*/}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex sm:pt-10 md:pt-16 lg:pt-0 items-center justify-center w-full">
                    <Link href="#call-to-action">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="40" 
                                height="40" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="lucide lucide-chevrons-down-icon lucide-chevrons-down animate-bounce">
                                    <path d="m7 6 5 5 5-5"/>
                                    <path d="m7 13 5 5 5-5"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
