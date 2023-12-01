import BreadCrump from "../Breadcrump/Breadcrump";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type SETUP_LAYOUT_PROPS = {
  children: any;
};
function SetupLayout(props: SETUP_LAYOUT_PROPS) {
  const { children } = props;
  return (
    <main>
      <Header />
      <BreadCrump />
      {children}
      <Footer />
    </main>
  );
}
export default SetupLayout;
