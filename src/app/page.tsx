import TopSection from "@/components/advertisement/TopSection";
import BestDeals from "@/components/bestDeals/BestDeals";
import Devices from "@/components/Devices/Devices";
import Membership from "@/components/membership/Membership";
import NewReleased from "@/components/newReleased/NewReleased";
import TryNewFlavor from "@/components/tryNewFlavor/TryNewFlavor";

export default function Home() {
  return (
    <div className="h-full">
      {/* <AdvertisementSection /> */}
      <TopSection />
      <div className="lg:mx-24">
        <BestDeals />
        <Membership />
        <NewReleased />
      </div>
      <div className="lg:ml-24">
        <TryNewFlavor />
      </div>
      <div className="lg:mx-24">
        <div id="devices">
          <Devices
            imageUrl={
              "https://dummyvapesofficials.com/wp-content/uploads/2024/02/ElfBar-Aro-Skit-Ice-k-300x300.webp"
            }
            label={"Devices"}
            description={"Find the best for you here!"}
          />
        </div>
        <div id="pods">
          <Devices
            imageUrl={
              "https://dummyvapesofficials.com/wp-content/uploads/2024/02/Dummy_Vapes_Limited_Edition_24k_Gold-1-300x300.webp"
            }
            label={"Pod"}
            description={"Variety of choices available"}
          />
        </div>
        <div id="disposable">
          <Devices
            imageUrl={
              "https://dummyvapesofficials.com/wp-content/uploads/2024/02/E-Liquid_Alien_Invasion_Grape_Dragon_Fruit-1-300x300.webp"
            }
            label={"Disposable"}
            description={"Easy,clean & superb flavor"}
          />
        </div>
      </div>
    </div>
  );
}
