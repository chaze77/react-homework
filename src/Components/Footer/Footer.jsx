import React from 'react';




const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-text'>
        <h4>ИГРЫ</h4>
        <span>Подбор компьютера под определенную игру</span>
            </div>        
        <div className='footer-img'>
            <img src='/img/dota2.png'  alt='' />
            <img src="/img/bf5.png"   alt=""/>
            <img src="/img/csgo.png"  alt="" />
            <img src="/img/gta5.png"  alt="" />
            <img src="/img/lol.png"   alt="" />
            <img src="/img/minecraft.png" alt="" />
            <img src="/img/pubg.png"  alt="" />
            <img src="/img/warface.png" alt="" />
            <img src="/img/witcher3.png" alt="" />
            <img src="/img/wot.png"   alt="" />
        </div>
        </div>
    );
};

export default Footer;