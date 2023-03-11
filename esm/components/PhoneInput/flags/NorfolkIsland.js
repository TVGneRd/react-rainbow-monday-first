import React from 'react';
import PropTypes from 'prop-types';

function SvgNorfolkIsland(_ref) {
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
                    'M22.956 1.588A15.936 15.936 0 0016 0c-2.493 0-4.853.57-6.957 1.588L7.654 16l1.39 14.412A15.936 15.936 0 0016 32c2.493 0 4.853-.57 6.956-1.588L24.348 16 22.956 1.588z',
                fill: '#F0F0F0',
            }),
            React.createElement(
                'g',
                {
                    fill: '#6DA544',
                },
                React.createElement('path', {
                    d:
                        'M9.043 1.588C3.692 4.176 0 9.657 0 16s3.692 11.824 9.043 14.412V1.588zM22.956 1.588v28.824C28.308 27.824 32 22.343 32 16S28.308 4.176 22.956 1.588zM20.174 20.87L16 7.652 11.826 20.87h3.13v3.478h2.088V20.87z',
                }),
            ),
        ),
    );
}

SvgNorfolkIsland.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
SvgNorfolkIsland.defaultProps = {
    className: undefined,
    style: undefined,
};
export default SvgNorfolkIsland;
