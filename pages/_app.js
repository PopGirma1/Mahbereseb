import { SideNavigation } from "../components/SideNavigation";
import "../styles/globals.css";
import Layout from "../components/layout";
import UpperFooter from "../components/Footer"; 

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <div className="pageWrapper">
      <SideNavigation />
      <Component {...pageProps} />
    </div>
     <div>
   <UpperFooter/>
     </div>
    </Layout>
  );
}

export default MyApp;

