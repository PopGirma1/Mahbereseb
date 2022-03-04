import { SideNavigation } from "../components/SideNavigation";
import "../styles/globals.css";
import Layout from "../components/layout";
import UpperFooter from "../components/Footer"; 
import 'semantic-ui-css/semantic.min.css';
import {SSRProvider} from '@react-aria/ssr';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
    <Layout>
    <div className="pageWrapper">
      <SideNavigation />
      <Component {...pageProps} />
    </div>
     <div>
   <UpperFooter/>
     </div>
    </Layout>
    </SSRProvider>
  );
}

export default MyApp;

