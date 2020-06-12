import Head from "next/head";
import WSHeader from "./src/component/WSHeader";
import WSButton from "./src/component/WSButton";
import WSBanner from "./src/component/WSBanner";
import WSFooter from "./src/component/WSFooter";

export default class Home extends React.Component {
  onLoginClick() {
    console.log("Buttton clicked ");
  }
  render() {
    return (
      <div>
        <WSHeader name="Login" onClickFunc={this.onLoginClick} />
        <WSBanner image="https://res.cloudinary.com/anisof/image/upload/v1591775482/e-commerce-banner-1024x341_zobdn2.jpg" />
        <WSBanner image="https://res.cloudinary.com/anisof/image/upload/v1591787904/BannerImages/Ecommerce-Trends-banner_tp2e6c.jpg" />
        <WSBanner image="https://res.cloudinary.com/anisof/image/upload/v1591787901/BannerImages/ecommerce-shopping-banner_hh0po4.jpg" />
        <WSBanner image="https://res.cloudinary.com/anisof/image/upload/v1591787901/BannerImages/eCommerce_uxlmie.png" />
        <WSBanner image="https://res.cloudinary.com/anisof/image/upload/v1591787910/BannerImages/preview_fltddo.png" />

        <div style={{display: 'flex', justifyContent: 'center'}}>
        <WSButton name="Book a Equipment Now" onClickFunc={this.onLoginClick} />
        </div>
        <WSFooter
          leftHeadingLine1={"Products"}
          leftHeadingLine2={"Product on sale"}
          leftHeadingLine3={"Imported Products"}
          leftHeadingLine4={"Collect vouchers"}
          centerHeadingLine1={"Company"}
          centerHeadingLine2={"About Us"}
          centerHeadingLine3={"Contact Us"}
          centerHeadingLine4={"Follow Us :"}
          rightHeadingLine1={"Helpful Content"}
          rightHeadingLine2={"Blogs"}
          rightHeadingLine3={"Privacy Policy"}
          rightHeadingLine4={""}
          logo1="https://res.cloudinary.com/anisof/image/upload/v1591786742/LOGO/png/twitter_n36ags.png"
          logo2="https://res.cloudinary.com/anisof/image/upload/v1591786742/LOGO/png/instagram-sketched_yuzmco.png"
          logo3="https://res.cloudinary.com/anisof/image/upload/v1591786741/LOGO/png/facebook_1_jmmtjz.png"
        />
      </div>
    );
  }
}
