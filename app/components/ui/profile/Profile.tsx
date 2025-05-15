"use client";

import { useState } from "react";

import ReviewTab from "./tabs/ReviewTab";
import OrdersTab from "./tabs/OrdersTab";
import ProfileTab from "./tabs/ProfileTab";

import { useAuth } from "@/app/store/auth-store";

import styles from "./profile.module.scss";
import TabsButton from "./tabs/TabsButton";
import FavoritesTab from "./tabs/FavoritesTab";

const tabsData = [
  {
    text: "Профиль",
    value: "profile",
  },
  {
    text: "Заказы",
    value: "orders",
  },
  {
    text: "Отзывы",
    value: "reviews",
  },
  {
    text: "Избранное",
    value: "favorites",
  },
];

const ProfilePage = () => {
  const { user, isLoading, error, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabsClick = (v: string) => {
    setActiveTab(v);
  };

  if (isLoading) {
    return (
      <div className={`container ${styles.loadingContainer}`}>
        <div className={styles.loadingPulse}></div>
        <div className={styles.loadingPulse}></div>
        <div className={styles.loadingPulse}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h2 className={styles.errorTitle}>Ошибка загрузки профиля</h2>
        <p className={styles.errorText}>{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className={styles.errorButton}
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <h1 className={styles.profileTitle}>Мой профиль</h1>
          <p className={styles.profileEmail}>{user?.email}</p>
        </div>

        <div className={styles.tabsContainer}>
          {tabsData.map((tab) => (
            <TabsButton
              key={tab.value}
              text={tab.text}
              value={tab.value}
              isActive={tab.value === activeTab}
              handleClick={handleTabsClick}
            />
          ))}
        </div>

        <div className={styles.tabContent}>
          {activeTab === "profile" && <ProfileTab user={user || null} />}

          {activeTab === "orders" && <OrdersTab orders={user?.orders || []} />}

          {activeTab === "reviews" && (
            <ReviewTab reviews={user?.reviews || []} />
          )}
          {activeTab === "favorites" && (
            <FavoritesTab favorites={user?.Favorite[0].servers || []} />
          )}
        </div>

        <div className={styles.logoutContainer}>
          <button onClick={() => logout()} className={styles.logoutButton}>
            <span>Выйти</span>
            <svg
              className={styles.logoutIcon}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
