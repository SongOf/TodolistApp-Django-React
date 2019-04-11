import { connect} from 'react-redux';
import Display from '../Display';
import { setSortMethod } from '../../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.method === state.sortMethod
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setSortMethod(ownProps.method))
        }
    }
};

const DisplayInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Display);

export default DisplayInfo;
