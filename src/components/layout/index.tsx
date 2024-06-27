import { FC, ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="">
            {children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout;