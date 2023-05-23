import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from 'react-icons/ai';
import { Paginate } from "./Pagination.styled";
import PropTypes from 'prop-types';

const Pagination = ({page, totalPages, changePage}) => {
 const handlePage = event => {
    changePage(event.selected +1);
 };
 return (
    <Paginate
    previousLabel={<AiOutlineLeft />}
      nextLabel={<AiOutlineRight />}
      breakLabel="..."
      pageCount={totalPages}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      onPageChange={handlePage}
      activeClassName="active"
      hrefBuilder={(page, pageCount) =>
        page >= 1 && page <= pageCount ? `/page/${page}` : '#'
      }
      forcePage={page - 1}
    />
 )
};
Pagination.propTypes ={
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  totalPages: PropTypes.number.isRequired,
  changePage:  PropTypes.func.isRequired,
}
export default Pagination;