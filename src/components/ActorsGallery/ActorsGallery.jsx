import Actor from "components/Actor/Actor"
import PropTypes from 'prop-types'
import { ActorsList } from "./ActorsGallery.styled"

const ActorsGallery = ({actors}) => {
    return (
       <ActorsList>
        {actors.map(actor => (
            <Actor key ={actor.id}
            actor={actor}/>
        ))}
       </ActorsList>
    )
}
ActorsGallery.propTypes={
actors: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
        character: PropTypes.string.isRequired,
}).isRequired).isRequired
}

export default ActorsGallery;