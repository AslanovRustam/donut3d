import { Metadata } from "next";
import DonutSectionScroll from "../../components/adaptive/DonutSectionScroll";

export const metadata: Metadata = {
  title: "Scroll ",
};

export default function page() {
  return <DonutSectionScroll />;
}
