import { Metadata } from "next";
import DonutSectionScroll from "../../components/DonutSectionScroll";

export const metadata: Metadata = {
  title: "Scroll ",
};

export default function page() {
  return <DonutSectionScroll />;
}
