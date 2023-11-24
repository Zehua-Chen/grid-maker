import { FC, useId } from 'react';

import { useFormContext } from 'react-hook-form';

import { PAPERS } from './papers';
import { Inch, Pixel } from './units';

export interface ConfigurationProps {
  className?: string;
}

export interface ConfigurationValues {
  paperKey: string;
  cellSize: Inch;
  fontSize: Pixel;
}

const Configuration: FC<ConfigurationProps> = ({ className }) => {
  const { register } = useFormContext<ConfigurationValues>();
  const paperSizeId = useId();
  const cellSizeId = useId();
  const fontSizeId = useId();

  return (
    <form className={className}>
      <div>
        <label htmlFor={paperSizeId}>Paper Sizes</label>
        <select id={paperSizeId} {...register('paperKey')}>
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
          step={0.1}
          {...register('cellSize')}
        />
      </div>
      <div>
        <label htmlFor={fontSizeId}>Font Size (px)</label>
        <input
          placeholder="px"
          type="number"
          step={1}
          {...register('fontSize')}
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.print();
        }}
      >
        Print
      </button>
      <div>Info</div>
      <ul>
        <li>
          <a href={'https://github.com/Zehua-Chen/grid-maker'} target="_blank">
            Git
          </a>
        </li>
      </ul>
    </form>
  );
};

Configuration.displayName = 'Configuration';

export default Configuration;
