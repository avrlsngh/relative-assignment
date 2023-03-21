import { ReactElement } from "react";
import { TrendingIcon } from "../assets";
import { AssetInfoCard } from "../components/AssetInfoCard.component";
import { AssetInfoProps } from "../components/AssetInfoCard.component";

interface AssetList{
    assetList: AssetInfoProps[];
}

export const AssetList = ({assetList}: AssetList) =><div className="p-16">
<div className="w-full flex justify-start items-center">
    <img className="h-3 w-3" src={TrendingIcon}/>
    <p className="text-[10px] text-white ml-2">Trending Assets</p>
</div>
<div className="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-20 mt-16">
  {assetList.map((asset) => <AssetInfoCard {...asset} />)}
  </div>
  </div>
