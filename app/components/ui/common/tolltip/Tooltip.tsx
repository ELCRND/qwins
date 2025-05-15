"use client";

import { useState } from "react";
import { toast } from "sonner";

import { SvgId } from "../svgSprites/SvgSpritesComponent";

import { authService } from "@/app/services/auth";

import styles from "./tooltip.module.scss";

const Tooltip = ({
  serverId,
  isAuth,
  isFavorite,
}: {
  serverId: string;
  isAuth: boolean;
  isFavorite: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);

  const handleFavorite = async () => {
    if (!isAuth) {
      toast.warning("Пожалуйста авторизуйтесь");
      return;
    }

    setIsFavoriteState((p) => !p);

    if (isFavoriteState) {
      const res = await authService.removeFavorite(serverId);
      toast.success(res.message);

      return;
    }

    const res = await authService.addFavorite(serverId);
    toast.success(res.message);
  };

  return (
    <div className={`${styles.container} `}>
      <button
        className={`${styles.btn} ${open ? styles.open : ""}`}
        onClick={() => setOpen((p) => !p)}
      >
        <svg width="20" height="20" fill="#0082FB">
          <use href={`#${SvgId.TOOLTIP}`} />
        </svg>
      </button>

      <div className={`${styles.actions} ${open ? styles.open : ""}`}>
        <button
          onClick={handleFavorite}
          className={isFavoriteState ? styles.favorite : ""}
        >
          <svg width="30" height="30">
            <use href={`#${SvgId.FAVORITE}`} />
          </svg>
        </button>
        {/* <button>
          <svg width="30" height="30">
            <use href={`#${SvgId.COMPARE}`} />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default Tooltip;
