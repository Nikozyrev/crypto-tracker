import { CURRENCIES } from "../constants/currencies";

interface Localization {
  en: string;
  de: string;
  es: string;
  fr: string;
  it: string;
  pl: string;
  ro: string;
  hu: string;
  nl: string;
  pt: string;
  sv: string;
  vi: string;
  tr: string;
  ru: string;
  ja: string;
  zh: string;
}

interface Description {
  en: string;
  de: string;
  es: string;
  fr: string;
  it: string;
  pl: string;
  ro: string;
  hu: string;
  nl: string;
  pt: string;
  sv: string;
  vi: string;
  tr: string;
  ru: string;
  ja: string;
  zh: string;
}

interface ReposUrl {
  github: string[];
  bitbucket: any[];
}

interface Links {
  homepage: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: ReposUrl;
}

interface CoinImageOptions {
  thumb: string;
  small: string;
  large: string;
}

export type MarketDataNumber = {
  [s in CURRENCIES]: number;
}

export type MarketDataDate = {
  [s in CURRENCIES]: Date;
}

export interface MarketData {
  current_price: MarketDataNumber;
  total_value_locked?: any;
  mcap_to_tvl_ratio?: any;
  fdv_to_tvl_ratio?: any;
  roi?: any;
  ath: MarketDataNumber;
  ath_change_percentage: MarketDataNumber;
  ath_date: MarketDataDate;
  atl: MarketDataNumber;
  atl_change_percentage: MarketDataNumber;
  atl_date: MarketDataDate;
  market_cap: MarketDataNumber;
  market_cap_rank: number;
  fully_diluted_valuation: MarketDataNumber;
  total_volume: MarketDataNumber;
  high_24h: MarketDataNumber;
  low_24h: MarketDataNumber;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: MarketDataNumber;
  price_change_percentage_1h_in_currency: MarketDataNumber;
  price_change_percentage_24h_in_currency: MarketDataNumber;
  price_change_percentage_7d_in_currency: MarketDataNumber;
  price_change_percentage_14d_in_currency: MarketDataNumber;
  price_change_percentage_30d_in_currency: MarketDataNumber;
  price_change_percentage_60d_in_currency: MarketDataNumber;
  price_change_percentage_200d_in_currency: MarketDataNumber;
  price_change_percentage_1y_in_currency: MarketDataNumber;
  market_cap_change_24h_in_currency: MarketDataNumber;
  market_cap_change_percentage_24h_in_currency: MarketDataNumber;
  total_supply: number;
  max_supply: number;
  circulating_supply: number;
  last_updated: Date;
}

export interface CommunityData {
  facebook_likes?: any;
  twitter_followers: number;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: number;
  reddit_accounts_active_48h: number;
  telegram_channel_user_count?: any;
}

export interface CodeAdditionsDeletions4Weeks {
  additions: number;
  deletions: number;
}

export interface DeveloperData {
  forks: number;
  stars: number;
  subscribers: number;
  total_issues: number;
  closed_issues: number;
  pull_requests_merged: number;
  pull_request_contributors: number;
  code_additions_deletions_4_weeks: CodeAdditionsDeletions4Weeks;
  commit_count_4_weeks: number;
  last_4_weeks_commit_activity_series: number[];
}

export interface PublicInterestStats {
  alexa_rank: number;
  bing_matches?: any;
}

export interface Market {
  name: string;
  identifier: string;
  has_trading_incentive: boolean;
}

export interface ConvertedLast {
  btc: number;
  eth: number;
  usd: number;
}

export interface ConvertedVolume {
  btc: number;
  eth: number;
  usd: any;
}

export interface Ticker {
  base: string;
  target: string;
  market: Market;
  last: number;
  volume: number;
  converted_last: ConvertedLast;
  converted_volume: ConvertedVolume;
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: Date;
  last_traded_at: Date;
  last_fetch_at: Date;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url: string;
  token_info_url?: any;
  coin_id: string;
  target_coin_id: string;
}

export interface ICoinDetailed {
  id: string;
  symbol: string;
  name: string;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  additional_notices: any[];
  localization: Localization;
  description: Description;
  links: Links;
  image: CoinImageOptions;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: MarketData;
  community_data: CommunityData;
  developer_data: DeveloperData;
  public_interest_stats: PublicInterestStats;
  last_updated: Date;
  tickers: Ticker[];
}


