import NavigationSide from "./NavigationSide"
import AdArea from './AdArea';
import Footer from './Footer';

function sidenav() {
    return (
        <aside  className="h-screen sticky top-0  text-right">
            <NavigationSide/>
            <AdArea/>
            <Footer/>
        </aside>
    )
}

export default sidenav
