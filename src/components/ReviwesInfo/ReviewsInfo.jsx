import PropTypes from 'prop-types';
import { ReviewsList, ReviewItem, ReviewTitle, View } from './ReviewsInfo.styled';

const ReviewsInfo = ({reviews}) => {
     return(
        <ReviewsList>
            {reviews.map(({id, author, content}) => { return  <ReviewItem key={id}>
                    <ReviewTitle>{author}</ReviewTitle>
                    <View>{content}</View>
                </ReviewItem>
            }) }
        </ReviewsList>
     )
}

ReviewsInfo.propTypes ={
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            author: PropTypes.string,
            content: PropTypes.string,
        }).isRequired
    ).isRequired
};

export default ReviewsInfo;