import Image from "next/image";
import TimeTracking from "./components/pages/TimeTracking";
import TimeManagement from "./components/pages/TimeManagement";
import GoodUI from "./components/pages/GoodUI";
import Service from "./components/pages/Service";
import BudgetFriendly from "./components/pages/BudgetFriendly";
import Testmonial from "./components/pages/Testmonial";
import Trail from "./components/pages/Trail";

export default function Home() {
  return (
    <>
      <TimeTracking />
      <TimeManagement />
      <GoodUI />
      <Service />
      <BudgetFriendly />
      <Testmonial />
      <Trail />
    </>
  );
}
