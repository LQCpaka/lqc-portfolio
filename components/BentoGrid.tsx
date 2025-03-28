import { cn } from "@/lib/utils";
import Link from "next/link";
import {PanelLeftOpen } from "lucide-react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    link,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    link?: string;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl bg-white/20   backdrop-blur-sm  p-4 transition duration-200 hover:shadow-xl dark:bg-black dark:shadow-none",
                className,
            )}
        >

            {header}
            <Link href={link || "#"} passHref>
                <div className="transition duration-200 group-hover/bento:translate-x-2">
                    {icon}
                    <div className="mt-2 mb-2 font-sans font-bold text-gray-200 dark:text-neutral-200 flex justify-between">
                        <p>{title}</p><PanelLeftOpen />
                    </div>
                    <div className="font-sans text-xs font-normal text-gray-200 dark:text-neutral-300">
                        <p>{description}</p>
                        
                    </div>
                </div>
            </Link>


        </div>
    );
};
