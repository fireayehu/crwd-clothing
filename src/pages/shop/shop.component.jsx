import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../components/collection-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded
} from "../../redux/shop/shop.selectors";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionAsync } = this.props;
    fetchCollectionAsync();
  }
  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionsFetching,
  isCollectionLoaded: selectIsCollectionsLoaded
});

const mapDispachToProps = dispatch => ({
  fetchCollectionAsync: () => dispatch(fetchCollectionAsync())
});
export default connect(
  mapStateToProps,
  mapDispachToProps
)(ShopPage);
