import './Footer.scss';
import gitImg from '../../assets/img/gitlogo.svg';
import rsImg from '../../assets/img/rslogo.png';

export const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container _container">
            <div className="footer__git-links">
               <a href="https://github.com/K0nfigMDA">
                  <img
                     className="footer__git-img _hover"
                     src={gitImg}
                     alt="git"
                  />
               </a>
               <a href="https://github.com/Nikozyrev">
                  <img
                     className="footer__git-img _hover"
                     src={gitImg}
                     alt="git"
                  />
               </a>
               <a href="https://github.com/saebiz">
                  <img
                     className="footer__git-img _hover"
                     src={gitImg}
                     alt="git"
                  />
               </a>
            </div>

            <span className="footer__year">2023</span>

            <div className="footer__rs-link">
               <a href="https://rs.school/">
                  <img className="footer__rs-img _hover" src={rsImg} alt="rs" />
               </a>
            </div>
         </div>
      </footer>
   );
};
