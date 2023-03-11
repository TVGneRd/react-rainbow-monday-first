import React from 'react';
import PropTypes from 'prop-types';

function SvgPeru(_ref) {
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
            React.createElement('circle', {
                fill: '#F0F0F0',
                cx: 16,
                cy: 16,
                r: 16,
            }),
            React.createElement(
                'g',
                {
                    fill: '#D80027',
                },
                React.createElement('path', {
                    d:
                        'M32 16C32 9.12 27.658 3.256 21.565.995v30.01C27.658 28.745 32 22.88 32 16zM0 16c0 6.88 4.342 12.744 10.435 15.005V.995C4.342 3.255 0 9.121 0 16z',
                }),
            ),
        ),
    );
}

SvgPeru.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
SvgPeru.defaultProps = {
    className: undefined,
    style: undefined,
};
export default SvgPeru;
