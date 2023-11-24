import { FC, useId, useState } from 'react';
import Grid from './components/Grid';
import InvalidConfiguration from './components/InvalidConfiguration';
import { PAPERS } from './papers';
import { inchToPixel, Inch } from './units';

import * as styles from './App.module.scss';

const App: FC = () => {
  const [paperKey, setPaperKey] = useState('US_ENVELOPE_9');
  const paper = PAPERS[paperKey];
  const { width, height } = paper;

  const [cellSize, setCellSize] = useState(0.2 as Inch);

  const paperSizeId = useId();
  const cellSizeId = useId();

  return (
    <div className={styles.App}>
      <nav className={styles.App_nav}>
        <div className={styles.App_nav_content}>Navigation bar</div>
      </nav>
      <div className={styles.App_content}>
        <div className={styles.App_content_grid}>
          {cellSize === 0 ? (
            <InvalidConfiguration />
          ) : (
            <Grid
              width={inchToPixel(width)}
              height={inchToPixel(height)}
              cellSize={inchToPixel(cellSize)}
              alt={`A grid whose width is ${width} inches, and whose height is ${height} inches`}
            ></Grid>
          )}
        </div>

        <form className={styles.App_content_configuration}>
          <div>
            <label htmlFor={paperSizeId}>Paper Sizes</label>
            <select
              id={paperSizeId}
              value={paperKey}
              onChange={(e) => setPaperKey(e.target.value)}
            >
              {Object.keys(PAPERS).map((paper) => (
                <option key={paper} value={paper}>
                  {PAPERS[paper].displayName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={cellSizeId}>Cell Size (inch)</label>
            <input
              placeholder="inch"
              type="number"
              value={cellSize}
              step={0.1}
              onChange={(e) =>
                setCellSize(Number.parseFloat(e.target.value) as Inch)
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

App.displayName = 'App';

export default App;
