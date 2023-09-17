import { LayoutProps } from "@/.next/types/app/layout";

export default function TwoColumn({ children }: LayoutProps) {
    return (
        <div className={`hover:flex flex`}>
            {children}
        </div>
    )
}

TwoColumn.Main = function Main({ children }: LayoutProps) {
    return (
        <div className={`w-768`}>
            {children}
        </div>
    )
}

TwoColumn.Sidebar = function Sidebar({ children} : LayoutProps) {
    return (
        <div className={`w-240 ml-4 text-right sticky top-0`}>
            {children}
        </div>
    )
}