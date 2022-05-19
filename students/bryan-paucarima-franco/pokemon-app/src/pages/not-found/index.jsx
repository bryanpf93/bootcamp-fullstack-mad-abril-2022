import Header from '../../components/header'
import './styles.css'

function NotFound() {
    return (
        <>  
            <Header></Header>
            <div className="not-found">
                <h2>This is Not the Web Page your Looking For</h2>
                <img src="https://sm.ign.com/t/ign_latam/screenshot/default/pikachu-triste_auuu.1280.jpg" alt="" />
            </div>
        </>
    )
}

export default NotFound