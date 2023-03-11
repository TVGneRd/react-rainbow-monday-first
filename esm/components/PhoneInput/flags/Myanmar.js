import React from 'react';
import PropTypes from 'prop-types';

function SvgMyanmar(_ref) {
    var className = _ref.className,
        style = _ref.style;
    return React.createElement(
        'svg',
        {
            width: 32,
            height: 32,
            viewBox: '0 0 32 32',
            className: className,
            style: style,
        },
        React.createElement(
            'g',
            {
                fillRule: 'nonzero',
                fill: 'none',
            },
            React.createElement('path', {
                d:
                    'M31.005 21.565C31.648 19.832 32 17.957 32 16c0-1.957-.352-3.832-.995-5.565L16 9.043.995 10.435A15.965 15.965 0 000 16c0 1.957.352 3.832.995 5.565L16 22.956l15.005-1.39z',
                fill: '#6DA544',
            }),
            React.createElement('path', {
                d: 'M31.005 10.435C28.745 4.342 22.879 0 16 0 9.12 0 3.256 4.342.995 10.435h30.01z',
                fill: '#FFDA44',
            }),
            React.createElement('path', {
                d: 'M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z',
                fill: '#D80027',
            }),
            React.createElement('path', {
                fill: '#F0F0F0',
                d:
                    'M26.972 13.537H18.59L16 5.565l-2.59 7.972H5.028l6.781 4.926-2.59 7.972L16 21.565l6.781 4.87-2.59-7.972z',
            }),
        ),
    );
}

SvgMyanmar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
SvgMyanmar.defaultProps = {
    className: undefined,
    style: undefined,
};
export default SvgMyanmar;
