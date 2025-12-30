import React from 'react';


   const socialLInk =[
        {
            title: "Youtube",
            href: "http://www.youtube.com/@reactjsBD",
            icon: <Youtube className='w-5 h-5'></Youtube>
        },
        {
            title: "Github",
            href: "http://www.youtube.com/@reactjsBD",
            icon: <Github className='w-5 h-5'></Github>
        },
        {
            title: "Linkedin",
            href: "http://www.youtube.com/@reactjsBD",
            icon: <Linkedin className='w-5 h-5'></Linkedin>
        },
        {
            title: "Facebook",
            href: "http://www.youtube.com/@reactjsBD",
            icon: <Facebook className='w-5 h-5'></Facebook>
        },
        {
            title: "Slack",
            href: "http://www.youtube.com/@reactjsBD",
            icon: <Slack className='w-5 h-5'></Slack>
        },
    ];


const SocialMedia = () => {
    return (
        <TooltipProvider >
     <div className={cn("flex items-center gap-3.5", className)}>
        {socialLInk?.map((item)=> (
            <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                    <Link target='_blank' rel='noopener noreferrer' key={item?.title} href={item?.href} 
                    className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect")}>
                    {item?.icon}
                    </Link>
                </TooltipTrigger>
                <TooltipContent className={cn("bg-white text-darkColor font-semibold")}>
                    {item?.title}
                </TooltipContent>
            </Tooltip>
        ))}
     </div>
     </TooltipProvider>
    );
};

export default SocialMedia;