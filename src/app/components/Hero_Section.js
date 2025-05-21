import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero_Section = ({ title, subtitle, points, buttonText, buttonLink, imageSrc }) => {
  return (
    <section className="container">
        <div className="flex flex-col-reverse lg:flex-row gap-6">
            <div className="lg:w-6/12 py-8 flex flex-col justify-center gap-5 sm:gap-[34px]">
                <h1 className="text-h1">
                    <span className="text-yellow">{title}</span><br/>{subtitle}
                </h1>
                <div className="content-listing">
                    <ul className="space-y-4 ml-6">
                        {points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
                {
                    buttonText && 
                <Link role="link" href={buttonLink}
                    className="inline-block w-fit text-white bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium">
                    {buttonText}
                </Link>
                }
            </div>
            <div className="lg:w-6/12 flex items-end ">
            <div>
                <Image role="img" className="!static" fill src={imageSrc} alt="Hero-image"/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero_Section
