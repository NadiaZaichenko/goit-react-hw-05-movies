import { ThreeDots } from 'react-loader-spinner'
import { LoaderSpiner } from './Loader.styled'

const Loader = () => {
    return (
        <LoaderSpiner>
            <ThreeDots color="red"/>
        </LoaderSpiner>
    )
}

export default Loader;