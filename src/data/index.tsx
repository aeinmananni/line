import {
  GiBackpack,
  GiCape,
  GiHeadbandKnot,
  GiNecklaceDisplay,
  GiRing,
  GiSunglasses,
  GiWallet,
} from "react-icons/gi";
import { MdOutlineWatch } from "react-icons/md";
import { TbGitBranchDeleted } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import type { LinksType } from "../models";

export const CATEGORIES_LINK: LinksType[] = [
  {
    id: "sunglasses",
    title: "عینک",
    icon: <GiSunglasses />,
    link: "/sunglasses",
  },
  { id: "watch", title: "ساعت", icon: <MdOutlineWatch />, link: "/watch" },
  { id: "ring", title: "انگشتر", icon: <GiRing />, link: "/ring" },
  {
    id: "bracelet",
    title: "دستبند",
    icon: <TbGitBranchDeleted />,
    link: "/bracelet",
  },
  { id: "necklace", title: "گردنبند", icon: <GiNecklaceDisplay />, link: "/" },
  { id: "handbag", title: "کیف دستی", icon: <FiShoppingBag />, link: "/" },
  { id: "backpack", title: "کوله‌پشتی", icon: <GiBackpack />, link: "/" },
  { id: "cap", title: "کلاه", icon: <GiCape />, link: "/" },
  { id: "headband", title: "هدبند", icon: <GiHeadbandKnot />, link: "/" },
  { id: "wallet", title: "کیف پول", icon: <GiWallet />, link: "/" },
];
