import { ReactElement } from "react";
import BitcoinIcon from '../assets/icons/bitcoinIcon.png';

export type AssetInfoProps = {
  assetName: string;
  assetPrice: number;
  assetPriceStatus: number;
  assetCurrency: string;
  assetTVL: number;
  assetIcon: string,
  assetPopularPairs: string[]
};

export const AssetInfoCard = ({
  assetName,
  assetCurrency,
  assetPrice,
  assetTVL,
  assetPriceStatus,
  assetIcon,
  assetPopularPairs
}: AssetInfoProps) : ReactElement =>  
  <div className="rounded-lg relative h-full w-48 cardGradientBgColor border-white/20 px-4 pb-2">
    <div className="relative mx-auto bg-[#14172b] border border-t-0 w-16 h-8 z-20 rounded-b-full border-white/10 top-0 roundedCornerPseduos">
      <div className="rounded-full cardGradientBgColor h-15 w-15 absolute left-1 -top-8 p-3 flex justify-center items-center">
      <img src={assetIcon} className="h-7 w-7 rounded-full" />
      </div>
    </div>

    <div>
      <h5 className="text-[#7B81AC] text-[10px]">{assetName}</h5>
    </div>

    <div className="flex flex-col justify-start items-center mt-2">
        <div className="bg-[#14172b] border border-t-white/10 border-b-0 border-l-0 border-r-0 rounded-xl w-full flex justify-center items-center py-1">
            <span className="text-white mr-2 text-[12px]">{`${assetCurrency} ${assetPrice}`}</span>
            <span className={`${assetPriceStatus > 0 ? 'text-[#00FFA3]' : 'text-[#FF4D4D]'} text-[9px] font-bold`}>{assetPriceStatus > 0 && '+'}{assetPriceStatus}%</span>
        </div>
        <small className="text-[8px] text-[#7B81AC] mt-1">Price</small>
    </div>

    <div className="flex flex-col justify-start items-center mt-2">
        <div className="bg-[#14172b] border border-t-white/10 border-b-0 border-l-0 border-r-0 rounded-xl w-full flex justify-center py-1">
            <span className="text-white mr-2 text-[12px]">{`${assetCurrency} ${assetTVL}`}</span>
        </div>
        <small className="text-[8px] text-[#7B81AC] mt-1">TVL</small>
    </div>

    <div className="flex flex-col justify-start items-center mt-2">
        <div className="bg-[#14172b] rounded-xl flex justify-between w-24 px-2.5 py-1">
            {assetPopularPairs.map(pairIcon => <img src={pairIcon} className="h-5 w-5 rounded-full" />)}
        </div>
        <small className="text-[8px] text-[#7B81AC] mt-1">Popular Pairs</small>
    </div>

  </div>;
