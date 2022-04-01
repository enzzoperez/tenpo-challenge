import * as React from 'react';
import Svg, {G, Circle, Rect, Path} from 'react-native-svg';

const SearchIcon = () => {
  return (
    <Svg width={25.207} height={25.163} viewBox="0 0 25.207 25.163">
      <G transform="translate(-2.5 -2.5) translate(3 3)">
        <Circle fill="none" stroke="#008f7e" cx={9} cy={9} r={9} />
        <Rect
          fill="none"
          stroke="#008f7e"
          width={2.554}
          height={8.938}
          rx={1}
          transform="rotate(-45.97 28.817 -9.746)"
        />
        <Path
          d="M15.462 15.322l1.21 1.277"
          fillRule="evenodd"
          fill="none"
          stroke="#008f7e"
        />
      </G>
    </Svg>
  );
};

export default SearchIcon;
