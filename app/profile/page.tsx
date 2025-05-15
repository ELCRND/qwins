import { Metadata } from "next";

import Profile from "../components/ui/profile/Profile";
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";

export const metadata: Metadata = {
  title: "VPS",
  description: "Мощные VPS под любые задачи",
};

const ProfilePage = async () => {
  return (
    <>
      <Header />
      <Profile />
      <Footer />
    </>
  );
};

export default ProfilePage;
