import { MarketDataNumber } from "./coinDetailed";

export interface MarketCapPercentage {
    btc: number;
    eth: number;
    usdt: number;
    bnb: number;
    usdc: number;
    xrp: number;
    busd: number;
    ada: number;
    doge: number;
    matic: number;
}

export interface IGlobalData {
    active_cryptocurrencies: number;
    upcoming_icos: number;
    ongoing_icos: number;
    ended_icos: number;
    markets: number;
    total_market_cap: MarketDataNumber;
    total_volume: MarketDataNumber;
    market_cap_percentage: MarketCapPercentage;
    market_cap_change_percentage_24h_usd: number;
    updated_at: number;
}

