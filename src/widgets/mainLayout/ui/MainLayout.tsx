import Page from "@/shared/primitives/page/Page";
import Wrapper from "@/shared/primitives/wrapper/Wrapper";
import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";
import { Outlet } from "react-router";


function MainLayout(): React.JSX.Element {
  return (
    <Wrapper className="wrapper">
      <Header />
      <Page className="page">
        <Outlet />
      </Page>
      <Footer />
    </Wrapper >
  );
}

export default MainLayout;