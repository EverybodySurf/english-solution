'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Baby, NotebookPen, PartyPopper, Star } from 'lucide-react'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function Features() {
    const { t } = useTranslation()
    return (
        <section className="bg-zinc-50 scroll-mt-12 sm:mt-20 pb-16 pt-0 md:py-16 dark:bg-transparent" id="features-1">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-teal-400 text-balance text-4xl font-semibold lg:text-5xl">{t('Our offers')}</h2>
                    <p className="mt-4 text-md">{t("Whether it's adults or children, for work or personal practice, we'll help you attain your goals")}</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-4 mx-auto mt-8 lg:mt-14 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Baby className="size-6 text-amber-400" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-3 font-bold">{t('Wednesdays')}</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">{t('Group workshops, for ages 4-10, 8am-12pm, 110€/m')}</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <NotebookPen className="size-6 text-yellow-400" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-3 font-bold">{t('Saturdays')}</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">{t('Group workshops for ages 8-11, 9:30am-12:30pm, 65€/m | 6th/5th 10:30am-12:30pm, 85€/m')}</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <PartyPopper className="size-6 text-yellow-400" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-3 font-bold">{t('Holiday Workshops')}</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">{t("All Saints' Day, Carnival, Easter 180€/w (meal included)")}</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Star className="size-6 text-yellow-400" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-3 font-bold">{t('Various Services')}</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">{t("Language stays, creation of texts, animation")}</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex pt-11 sm:pt-10 md:pt-16 lg:pt-10 items-center justify-center w-full">
                    <Link href="#team">
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

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
