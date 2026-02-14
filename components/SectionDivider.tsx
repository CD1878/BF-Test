import React from 'react';

type DividerVariant = 'curve-up' | 'curve-down' | 'wave' | 'slant-left' | 'slant-right';

interface SectionDividerProps {
    variant?: DividerVariant;
    fillColor: string;
    className?: string; // For additional positioning like -mt-1 or -mb-1 to fix sub-pixel gaps
    height?: string;
    flip?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
    variant = 'curve-up',
    fillColor,
    className = '',
    height = 'h-16 md:h-24',
    flip = false
}) => {
    const transform = flip ? 'rotate(180)' : '';

    return (
        <div className={`w-full overflow-hidden leading-[0] ${height} ${className}`}>
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className={`relative block w-[calc(100%+1.3px)] h-full`}
                style={{ fill: `var(--${fillColor}, ${fillColor})`, transform }}
            >
                {variant === 'curve-up' && (
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="hidden"></path>
                )}

                {variant === 'curve-up' && (
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                )}

                {variant === 'curve-down' && (
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
                )}

                {variant === 'wave' && (
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                )}

                {variant === 'slant-left' && (
                    <polygon points="1200 120 0 120 0 0 1200 120"></polygon>
                )}

                {variant === 'slant-right' && (
                    <polygon points="0 120 1200 120 1200 0 0 120"></polygon>
                )}
            </svg>
        </div>
    );
};

export default SectionDivider;
