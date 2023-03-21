import { BinanceIcon, BitcoinIcon, EthereumIcon, ShibaInuIcon, SolanaIcon } from "../assets";

export const DUMMY_ASSET_LIST = [
    {
      assetName: "Bitcoin [BTC]",
      assetPrice: 31812.8,
      assetPriceStatus: 10,
      assetCurrency: "$",
      assetTVL: 60000,
      assetIcon: BitcoinIcon,
      assetPopularPairs: [SolanaIcon, EthereumIcon, BinanceIcon],
    },
    {
      assetName: 'Solana [SOL]',
      assetPrice: 32.83,
      assetPriceStatus: -12.32,
      assetCurrency: '$',
      assetTVL: 60000,
      assetIcon: SolanaIcon,
      assetPopularPairs: [BitcoinIcon, EthereumIcon, BinanceIcon]
    },
    {
      assetName: 'Ethereum [ETH]',
      assetPrice: 1466.45,
      assetPriceStatus: -11.93,
      assetCurrency: '$',
      assetTVL: 60000,
      assetIcon: EthereumIcon,
      assetPopularPairs: [SolanaIcon, BitcoinIcon, BinanceIcon]
    },
    {
      assetName: 'Binance USD [BUSD]',
      assetPrice: 1.00,
      assetPriceStatus: 0.26,
      assetCurrency: '$',
      assetTVL: 60000,
      assetIcon: BinanceIcon,
      assetPopularPairs: [SolanaIcon, EthereumIcon, BinanceIcon]
    },
    {
      assetName: 'Shiba Inu [SHIB]',
      assetPrice: 0.00000001948,
      assetPriceStatus: -8.1,
      assetCurrency: '$',
      assetTVL: 60000,
      assetIcon: ShibaInuIcon,
      assetPopularPairs: [SolanaIcon, EthereumIcon, BinanceIcon]
    }
  ];