const Parameters = (block) => {
  return (
    <div className="magic-block-parameters">
      <div className="block-parameters-table">
        <div className="table">

          if (block.data.data['h-0'] || block.data.data['h-1']) {
            return(
              <div className="tr">
                for (let c = 0; c < block.data.cols; c++) {
                  <div className="th">
                    {block.data.data['h-' + c]}
                  </div>
                }
              </div>
            )
          }

          for (let r = 0; r < block.data.rows; r++) {
            <div className="tr">
              for (let c = 0; c < block.data.cols; c++) {
                <div className="td">
                  //marked? dangerouslySetInnerHTML
                </div>
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
};

module.exports = Parameters;
