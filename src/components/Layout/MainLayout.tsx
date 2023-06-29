import { Navigation } from "../Navigation";
import "./style.css"
type MainLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="layout">
            <Navigation />
            <main>{children}</main>
        </div>
    );
};
