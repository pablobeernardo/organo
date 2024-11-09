import './Rodape.css'

const Rodape = () => {
    return (
        <footer>
            <div className="rodape">
                <div className="social">
                    <img src='/imagens/fb.png' alt='facebook'/>
                    <img src='/imagens/tw.png' alt='twitter'/>
                    <img src='/imagens/ig.png' alt='instagram'/>
                </div>
                <div className="logo">
                    <img src='/imagens/logo.png' alt='Logo'/>
                </div>
                <div className="right-image">
                    <p>Desenvolvido por Pablo Bernardo</p>
                </div>
            </div>
        </footer>
    )
}

export default Rodape
