import Lottie from 'lottie-react-web'
import animation from '../../assets/lottie/81122-error-404-page-not-found.json';

export default function Eror404() {
    return (
        <div className='container text-center' >

            <Lottie
                height={300}
                width={300}
                options={{
                    animationData: animation,
                    loop: true
                }}
            />

            <h2>ruta no encontrada</h2>
        </div>

    )
}