import { FC } from 'react';
import { Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ICoinDetailed } from '../../interfaces/coinDetailed';
import './CoinInfo.scss';

interface ICoinInfoProps {
  coin: ICoinDetailed;
}

export const CoinInfo: FC<ICoinInfoProps> = ({ coin }) => {
  const telegramLink = coin.links.telegram_channel_identifier;

  return (
    <div className='coin-info'>
      <h3>Info</h3>
      <div>
        <span>Website: </span>
        <div className='coin-info__links'>
          <Button size='small' variant="outlined" target='_blank' href={coin.links.homepage[0]}>
            {new URL(coin.links.homepage[0]).host}
          </Button>
        </div>
      </div>
      <div>
        <span>Explorers: </span>
        <div className='coin-info__links'>
          {coin.links.blockchain_site.map((el, i) => (!el || i > 1) ||
            <Button key={el} size='small' variant="outlined" target='_blank' href={el}>
              {new URL(el).host}
            </Button>)}
        </div>
      </div>
      <div>
        <span>Community: </span>
        <div className='coin-info__links'>
          {telegramLink && <Button size='small' variant="outlined" target='_blank' href={`https://t.me/${telegramLink}`}>
            <TelegramIcon/>
          </Button>}
          <Button size='small' variant="outlined" target='_blank' href={`https://twitter.com/${coin.links.twitter_screen_name}`}>
            <TwitterIcon/>
          </Button>
          <Button size='small' variant="outlined" target='_blank' href={coin.links.subreddit_url}>
            <RedditIcon/>
          </Button>
        </div>
      </div>
    </div>
  );
};
