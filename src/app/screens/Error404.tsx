import Lottie from 'lottie-react-web'
import animation from '../../assets/lottie/81122-error-404-page-not-found.json';

export default function Eror404() {
    return (
        <div className='container text-center' >

            <div>
                <Lottie
                    height={300}
                    width={300}
                    options={{
                        animationData: animation,
                        loop: true
                    }}
                />
            </div>


            <h2>Ruta no encontrada</h2>
        </div>

    )
}