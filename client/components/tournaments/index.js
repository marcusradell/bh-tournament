var React = require('react/addons');
var CreateItem = require('./create-item');
var ListItems = require('./list-items');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
       <CreateItem />
        <ListItems />
      </div>
    );
  }
});
