import React from 'react';
import { FaGithub, FaRebel, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { Container } from './styles';

const Footer: React.FC = () => {
    return (
        <Container>
            <div>
                Maden By &nbsp;
                <a href="http://luanfarias.netlify.app" target="_blank" rel="noopener noreferrer">Luan Farias</a>
                <a href="https://github.com/luan-farias" target="_blank" rel="noopener noreferrer"><FaGithub size={36} color="#FFF" /></a>
            </div>
            <div>
                <span onClick={() => alert("Yes, I'm part of Rebel Alliance")}><FaRebel size={32} color="#FFF" /></span>
                <a href="https://www.github.com/Luan-Farias" target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} color="#FFF" /></a>
                <a href="https://wa.me/5591992812696?text=Hello, I want to speak with you about a job" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={32} color="#FFF" /></a>
                <a href="mailto:luan.farias_bvs@outlook.com" target="_blank" rel="noopener noreferrer"><FiMail size={32} color="#FFF" /></a>
            </div>
        </Container>
    );
}

export default Footer;
