const React = require('react');
const PropTypes = require('prop-types');
// import Marked from '../lib/marked';

const Parameters = ({ block }) => {
  const columns = block.data.cols;
  const rows = block.data.rows;

  function th() {
    const thCells = [];
    for (let c = 0; c < columns; c += 1) {
      thCells.push(<div className="th">
        {block.data.data[`h-${c}`]}
      </div>);
    }
    return thCells;
  }

  function td(r) {
    const tdCells = [];

    for (let c = 0; c < columns; c += 1) {
      tdCells.push(
        <div className="td" >
          {
            // TODO add marked
            block.data.data[`${r}-${c}`] || ''
          }
        </div>,
      );
    }
    return tdCells;
  }

  function tr() {
    const trCells = [];

    for (let r = 0; r < rows; r += 1) {
      trCells.push(
        <div className="tr">
          {td(r)}
        </div>,
      );
    }
    return trCells;
  }

  return (
    <div className="magic-block-parameters">
      <div className="block-parameters-table">
        <div className="table">
          {
            (block.data.data['h-0'] || block.data.data['h-1']) && (
              <div className="tr">
                {th()}
              </div>
            )
          }
          {tr()}

        </div>
      </div>
    </div>
  );
};

Parameters.propTypes = {
  block: PropTypes.shape({
    data: PropTypes.shape({
      cols: PropTypes.number.isRequired,
      rows: PropTypes.number.isRequired,
      data: PropTypes.shape({}).isRequired,
    }),
  }).isRequired,
};


module.exports = Parameters;