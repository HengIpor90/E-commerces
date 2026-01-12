import { Link } from '@inertiajs/react';
import AppLogoIcon from './app-logo-icon';
export default function AppLogo() {
    return (
        <Link href="/" className='flex items-center space-between'>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm xl:text-[18px]">
                <span className="mb-0.5 truncate leading-tight font-semibold ml-1 ">
                    E-Commerces <span className='text-[#333] ml-2'>KH</span>
                </span>
            </div>
        </Link>
    );
}